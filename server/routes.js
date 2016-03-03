'use strict'
var getUsers = require('../db/seeddb.js')

exports = module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('home')
  })


  app.get('/test', function (req, res) {
    getUsers(function (err, res) {
    	if (err) console.log(err)
    		console.log('test response', res)
    })
  })

  app.get('/sign-up', function (req, res) {
    res.render('sign-up')
  })

  app.post('/sign-in', function (req, res) {
    res.send("trying to sign in, are you?")
  })
}
