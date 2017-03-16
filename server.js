var crypto = require('crypto')
var fs = require('fs')
var path = require('path')

var bluebird = require('bluebird')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var compression = require('compression')
var express = require('express')
var gm = require('gm')
var pipe = require('multipipe')

var app = express()

var Promise = bluebird.Promise
Promise.config({cancellation: true})

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({
  strict: true,
  type: ['application/json', 'application/vnd.api+json']
}))
app.use(express.static('dist'))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
