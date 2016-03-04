'use strict'
var getUsers = require('../db/seeddb.js')

exports = module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('home')
  })


  app.post('/sign-up', function (req, res) {
    getUsers(function (err, users) {
      if (err) console.log(err)

        var newEmail = ''
        // extract new users email address from req

        var userArray = Array.from(users)
        userArray.forEach(function(user) {
          if (user.email === newEmail) console.log(user)
          // if the users email already exists in the server, they are a LOSER
        })

          // Otherwise, we're going to add them to the database
          // And redirect them to the (/profile) page
    })
  })

  app.get('/sign-up', function (req, res) {
    res.render('sign-up')
  })

  app.post('/sign-in', function (req, res) {
    res.send("trying to sign in, are you?")
  })
}
