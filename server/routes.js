'use strict'

exports = module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('home')
  })

  app.get('/sign-up', function (req, res) {
    res.render('sign-up')
  })

  app.post('/sign-in', function (req, res) {
    res.send("trying to sign in, are you?")
  })
}
