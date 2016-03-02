'use strict'

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
var express = require('express')

var app = express()
var server = require('http').createServer(app)
require('./routes')(app)

// Start the app only when run with npm start
// Don't run it when imported into the tests
if (require.main === module) {
  server.listen(3000, function () {
    console.log('Linda has opened herself to you on port 3000')
  })
}

// For testing purposes
exports = module.exports = app
