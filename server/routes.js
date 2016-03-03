'use strict'
var getUsers = require('../db/seeddb.js')

exports = module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('home')
  })


  app.post('/sign-up', function (req, res) {
    getUsers(function (err, users) {
    	// set internal db variable
    	var db = req.db
    	// check for email already in db
    	if (users.email === req.body.email) {
    		res.redirect('/profile')
    		console.log('already in the db', req.body.email)
    	}
    		// get our form values based upon name attributes
    		console.log('>>>>>>',res.body.email)
    		var newUserEmail = req.body.email;
    		// set the collection
    		var collection = db.get(getUsers)
    		// submit to db
    		collection.insert({
    			"email": newUserEmail
    		}, function (err, doc) {
    			if (err) {
    				res.send("There was a problem you are not a Linda prescriber")
    			} else {
    				res.redirect('/profile')
    			}
    		})
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
  app.get('/profile', function (req, res) {
    res.render('profile')
  })

  app.post('/sign-in', function (req, res) {
    res.send("trying to sign in, are you?")
  })
}
