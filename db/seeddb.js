var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/linda');
var userSchema = require('../models/user')
var Faker = require(‘faker’)


// fakeUserOptions (n) =>  [{}, {}]

for (var i = 0; i < 100; i++) {
   var personObject = {
   personID: i,
   firstName: Faker.name.firstName(),
   lastName: Faker.name.lastName(),
   email: Faker.internet.email(),
   address: Faker.address.streetAddress(),
   city: Faker.address.city()
 }
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

	// fakeOptions

	// fakeOptions.forEach 
		// new User(option)
		// User.save()




});

