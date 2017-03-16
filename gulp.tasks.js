var path = require('path')

module.exports.buildSpec = function(specs) {
  var out = {}
  Object.keys(specs).forEach(function(k) {
    var spec = specs[k]
    var pattern = spec.pattern
    var src = pattern ? path.join(spec.src, pattern) : spec.src
    var watch = spec.watch ? path.join(spec.src, spec.watch) : src
    var dest = spec.dest || path.join('dist', spec.src)
    var task = {
      src: src,
      dest: dest,
      watch: watch,
      cache: spec.cache || k,
    }
    if (spec.pipeline) {
      task.pipeline = spec.pipeline.bind(task)
    }
    out[k] = task
  })
  return out
}
