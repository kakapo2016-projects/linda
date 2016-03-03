var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/linda');

var userSchema = require('../models/user')
var Faker = require('faker')


// fakeUserOptions (n) =>  [{}, {}]

for (var i = 0; i < 100; i++) {
   var user = {
   	email: Faker.Internet.email(),
   	firstName: Faker.Name.firstName(),
   	lastName: Faker.Name.lastName(),
   	age: Faker.Helpers.randomNumber(),
   	// description: Faker.Random.catch_phrase_descriptor(),
   	location: Faker.Address.city(),
   	img: Faker.Image.imageUrl()
 }
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	userSchema.find({}, function(err, users) {
		if (err) throw err
		console.log(users)
	})
	// fakeOptions

	// fakeOptions.forEach 
		// new User(option)
		// User.save()
user.save(function (err, ))



});

