var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/linda');

var userSchema = require('../models/user')
var Faker = require('faker')

function getUsers(db, callback) {
  console.log('Im alive')
  var userModel = mongoose.model('User', userSchema)
  userModel.find(function(err, res) {
    if (err) { console.log('shit error', err) }
      console.log('finished reading database')
      callback(err, res)
  })
}

function saveUser(db, userForDB, callback) {
  console.log('started save process')
  var userModel = mongoose.model('User', userSchema)
  userForDB = new userModel(userForDB)

  userForDB.save(function(err, res) {
    if (err) { return console.log('shit error', err) }
    console.log('save finished')
    callback(err, res)
  })
}

module.exports = {
  "getUsers": getUsers,
  "saveUser": saveUser
}


// fakeUserOptions (n) =>  [{}, {}]
// function fakerUsers(userNumber) {

//   var userOptions = []
//   for (var i = 0; i < userNumber; i++) {
//     var user = {
//        email: Faker.Internet.email(),
//        firstName: Faker.Name.firstName(),
//        lastName: Faker.Name.lastName(),
//        age: 32,
//        description: "Pretend description!!",
//        location: Faker.Address.city(),
//        img: Faker.Image.imageUrl()
//      }
//      userOptions.push(user)
//    }
//    return userOptions
// }
