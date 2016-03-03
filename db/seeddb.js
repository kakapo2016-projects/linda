var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/linda');

var userSchema = require('../models/user')
var Faker = require('faker')


// fakeUserOptions (n) =>  [{}, {}]
// function fakerUsers(userNumber) {

// 	var userOptions = []
// 	for (var i = 0; i < userNumber; i++) {
//   	var user = {
// 	   	email: Faker.Internet.email(),
// 	   	firstName: Faker.Name.firstName(),
// 	   	lastName: Faker.Name.lastName(),
// 	   	age: 32,
// 	   	description: "Pretend description!!",
// 	   	location: Faker.Address.city(),
// 	   	img: Faker.Image.imageUrl()
//    	}
//    	userOptions.push(user)
//  	}
//  	return userOptions
// }

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {

// 	var userModel = mongoose.model('User', userSchema)
// 	console.log("DATABASE OPEN!")
// 	var users = fakerUsers(20) 
// 	users.forEach(function (user) {
// 		var userForDB = new userModel(user)
		// userForDB.save(function (err, userForDB) {
		// 	if (err) return console.error(err)
		// 	console.log(userForDB.firstName, "saved sucessfully! (maybe...)")
		// })

		// userModel.find(function (err, userFromDB) {
  // 	if (err) return console.error(err);
  	// console.log(userFromDB);
// })
// 	})

	// fakeUsers.save(function (err, fakerUsers) {
	// 	if (err ) return console.log(err);

	// })
// });
// var userModel = mongoose.model('User', userSchema)

// 		users.forEach(function (user) {
// 		var userForDB = new userModel(user)
// 		userModel.find(function (err, userFromDB) {
//   	if (err) return console.error(err);
  	// console.log(userFromDB);
// })
// })

module.exports = function getUsers(callback) {
	console.log('Im alive')
	var db = mongoose.connect('mongodb://localhost:27017/linda');
	var userModel = mongoose.model('User', userSchema)
	userModel.find(function (err, res) {
			callback(err, res)
			db.disconnect()
	})
}

	// var db = mongoose.connection;
	// var db = mongoose.createConnection('mongodb://localhost:27017/linda');
	// db.open('localhost', 'linda', 27017)
// 	db.on('error', console.error.bind(console, 'connection error:'));


// 	db.once('open', function() {
// 		// console.log('im open')


// })
// }

