export function uuid(){
    var d = Date.now()
    const id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0
        d = Math.floor(d/16)
        return (c=='x' ? r : (r&0x3|0x8)).toString(16)
    })
    return id
}

const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

export function shortid(length = 8) {
  var rtn = ''
  for (var i = 0; i < length; i++) {
    rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length))
  }
  return rtn
}
