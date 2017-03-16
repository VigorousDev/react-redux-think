import url from 'url'
import _ from 'lodash'
import whatwgfetch from 'isomorphic-fetch'

const messageByCode = {
  'request_failed': [
    'Request failed to complete.',
    'This may be caused by bad network conditions.',
    'Check your connection and try again.'
  ].join(' '),
  'unexpected': [
    'Impressive... You just uncovered a bug in the system.',
    'You might want to try again or report this issue.'
  ].join(' ')
}

function ServerError(...errs) {
  if (!(this instanceof ServerError)) {
    return new ServerError(...errs)
  }
  const len = errs.length
  this.name = 'ServerError'
  this.message = `${len} error${len > 1 ? 's' : ''} occurred`
  this.errors = this.children = errs
}

ServerError.fromResponse = function(res) {
  if (_.has(res, 'errors')) {
    return ServerError(...res.errors)
  }
  return ServerError({code: 'unexpected', details: messageByCode['unexpected'], meta: res})
}

ServerError.prototype = Object.create(Error.prototype)
ServerError.prototype.constructor = ServerError

ServerError.prototype.toFieldErrors = function() {
  return _.chain(this.errors)
    .map((fe) => {
      if (fe.code !== 'validation_failed') { return {} }
      let p = _.get(fe, 'source.pointer', '').replace(/^\//, '').split('/')
      if (p[0] === 'data') {
        p = p.slice(1)
      }
      const keyPath = p.length ? p : '_error'
      return _.set({}, keyPath, fe.details)
    })
    .reduce(_.merge, {})
    .value()
}

function unpackAPIArray(arr, included) {
  return _.map(arr, e => unpackAPIObject(e, included))
}
function unpackAPIObject(obj, included) {
  const rels = {}
  const iter = e => {
    var rel = _.get(included, `${e.type}:${e.id}`)
    return rel ? unpackAPIObject(_.get(included, `${e.type}:${e.id}`), included): e
  }
  _.forEach(_.get(obj, 'relationships'), (es, k) => {
    const data = _.get(es, 'data')
    if (_.isArray(data)) {
      rels[k] = _.map(data, iter)
    } else {
      rels[k] = iter(data)
    }
  })
  return {
    ...obj.attributes,
    id: obj.id,
    type: obj.type,
    $relationships: rels,
    $original: obj
  }
}

export function unpackAPI(obj) {
  if (!obj) { return obj }
  const {data, included, ...rest} = obj || {}
  const includeMap = _.keyBy(included || [], e => `${e.type}:${e.id}`)

  if (!data) { return obj }

  let out

  if (_.isArray(data)) { out = unpackAPIArray(data, includeMap) }
  else { out = unpackAPIObject(data, includeMap) }

  return {...rest, data: out}
}

export let makeURL = _.identity

if (process.env.CONFIG_API_BASE) {
  let u = url.parse(process.env.CONFIG_API_BASE)
  makeURL = (pathname, params) => {
    const p = url.parse(url.format({...u, pathname: pathname}))
    p.pathname += p.pathname.charAt(p.pathname.length - 1) === '/' ? '' : '/'
    p.query = params
    return url.format(p)
  }
}

export function fetch(pathname, options) {
  const opts = {
    credentials: 'include',
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json'
    },
    ...options,
  }
  return whatwgfetch(makeURL(pathname, opts.params), opts)
    .catch(err => {
      const code = 'request_failed'
      return Promise.reject(ServerError({code: code, details: messageByCode[code]}))
    })
    .then(res => {
      if (res.status < 200 || res.status >= 300) {
        return Promise.reject(res)
      }
      return res
    })
    .catch(res => {
      if (res instanceof ServerError) { return Promise.reject(res) }
      return res.json()
        .catch(() => {
          const code = 'unexpected'
          return Promise.reject(ServerError({status: res.status, code: code, details: messageByCode[code]}))
        })
        .then(e => {
          return Promise.reject(ServerError.fromResponse(e))
        })
    })
    .then(res => {
      if (res.status === 204) {
        return
      }
      return res.json()
    })
    .then(body => unpackAPI(body))
}

