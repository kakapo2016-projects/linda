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
    res.render('lindas')
  })

  app.get('/sign-up', function (req, res) {
    res.render('sign-up')
  })
  app.get('/profile', function (req, res) {
  })

  app.post('/sign-in', function (req, res) {
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
    			res.render('profile', {"user": user})
    		})
    	}
    	
    	})
  	if (!userExists) {
				console.log(req.body.email, "User doen't exist yet!")
    		db.disconnect(function() {
    			console.log('database closed')
	    		res.render('sign-up')
    		})
	  	}
	  })
	})
}