'use strict'

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
var express = require('express')
var exphbs = require('express-handlebars')
var parser = require('body-parser')
var path = require('path')
var db = require('../db/seeddb.js')

// middleware setup
var app = express()
app.use(parser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../client')))
app.set('views', path.join(__dirname, '../views'))
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
var server = require('http').createServer(app)
require('./routes')(app)


// handles test conditions
if (require.main === module) {
  server.listen(3000, function () {
    console.log('Linda has opened herself to you on port 3000')
  })
}

exports = module.exports = app
