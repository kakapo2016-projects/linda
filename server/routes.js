'use strict'

exports = module.exports = function (app) {
  app.get('/', function (req, res) {
    res.send('LINDA IS WAITING FOR YOU. COME FIND LINDA.')
  })
}
