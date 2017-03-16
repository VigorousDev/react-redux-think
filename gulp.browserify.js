var path = require('path')
var util = require('util')

var browserify = require('browserify')
var buffer = require('vinyl-buffer')
var gulp = require('gulp')
var gulpif = require('gulp-if')
var gutil = require('gulp-util')
var hasher = require('gulp-hasher')
var pipe = require('multipipe')
var rename = require('gulp-rename')
var source = require('vinyl-source-stream')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var watchify = require('watchify')

module.exports.bundle = function(options) {
  var dir = path.dirname(options.dest)
  var file = path.basename(options.dest)
  var bundler = browserify(options.bundler)
  if (options.watch) { bundler = watchify(bundler) }
  if (options.packages)  { bundler.require(options.packages) }

  var transforms = options.transforms || []
  transforms.forEach(function(t) {
    bundler.transform(t)
  })

  bundler.on('log', function(msg) {
    gutil.log(util.format('Browserify: %s',  msg))
  })

  var bundle = function() {
    return pipe(
      bundler.bundle(),
      source(file),
      buffer(),
      gulp.dest(dir),
      hasher(),
      gulpif(options.production, pipe(
        rename({extname: '.min.js'}),
        sourcemaps.init({loadMaps: true}),
        uglify(),
        sourcemaps.write('./'),
        gulp.dest(dir),
        hasher()
    )))
    .on('error', gutil.log.bind(gutil, 'error:'))
  }

  bundler.on('update', bundle)
  return bundle
}
