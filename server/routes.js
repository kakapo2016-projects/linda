'use strict'
var dbFunctions = require('../db/seeddb.js')
var mongoose = require('mongoose');
exports = module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('home')
  })


app.post('/sign-up', function (req, res) {
	var userExists = false
	var db = mongoose.connect('mongodb://localhost:27017/linda');
    dbFunctions.getUsers(db, function (err, users) {
		var newEmail = req.body.email;
    		var userArray = Array.from(users)
    		userArray.forEach(function(user) {
    			if (user.email === newEmail) {
    				console.log(user, "ALREADY EXISTS IN DB!")
    		res.render('home')
    		userExists = true
    	}

    	})
  	if (!userExists) {
  		console.log('Im about to try and save the user')
    	dbFunctions.saveUser(db, req.body, function(err, resp) {
    		console.log('I saved', resp)
    		db.disconnect(function() {
    			res.render('profile', {"user": req.body})
    			console.log('database closed')
    		})
			})
  	}
  })
})

  app.get('/lindas', function (req, res) {
    var db = mongoose.connect('mongodb://localhost:27017/linda')
    dbFunctions.getUsers(db, function(err, users) {
    	console.log(users)
    	res.render('lindas', { users: users })
      db.disconnect(function() {
        console.log('database closed')
      })
    })
  })

  app.get('/sign-up', function (req, res) {
    res.render('sign-up')
  })
  app.get('/profile', function (req, res) {
  })

  app.post('/sign-in', function (req, resp) {
    var userExists = false
	var db = mongoose.connect('mongodb://localhost:27017/linda');
    dbFunctions.getUsers(db, function (err, users) {
		var newEmail = req.body.email;
    		var userArray = Array.from(users)
    		userArray.forEach(function(user) {
    			if (user.email === newEmail) {
    			userExists = true
    			db.disconnect(function() {
    			console.log('database closed')
    			resp.render('profile', {"user": user})
    		})
    	}

    	})
  	if (!userExists) {
				console.log(req.body.email, "User doen't exist yet!")
    		db.disconnect(function() {
    			console.log('database closed')
	    		resp.render('sign-up')
    		})
	  	}
	  })
	})
}
