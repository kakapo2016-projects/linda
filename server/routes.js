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
    			console.log('database closed')
    		})
			})
  	}		
  }) 
})
    		

  //   		})
  //   		userForDB.save(function (err, userForDB) {
		// 			if (err) return console.error(err)
		// 			console.log(userForDB.firstName, "saved sucessfully! (maybe...)")
		// 		})
    		
 	// 			})
  //   		var collection = db.get(getUsers)
  //   		// submit to db
  //   		collection.insert({
  //   			"email": newUserEmail
  //   		}, function (err, doc) {
  //   			if (err) {
  //   				res.send("There was a problem you are not a Linda prescriber")
  //   			} else {
  //   				res.redirect('/profile')
  //   			}
  //   		})
  //  	})
  // })
    		
    		

    			// Otherwise, we're going to add them to the database
    			// And redirect them to the (/profile) page
 
  app.get('/lindas', function (req, res) {
    res.render('lindas')
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