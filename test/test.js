var dbURI = 'mongodb://localhost:27017/linda'
var should = require('chai').should()
var mongoose = require('mongoose')
var clearDB  = require('mocha-mongoose')(dbURI)
var dummyTest = mongoose.model('Dummy', new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  passwordHash: String,
  age: String,
  description: String,
  location: String,
  img: String
}))

describe('testing connection to db', function() {
  beforeEach(function(done) {
    if (mongoose.connection.db) return done();
    mongoose.connect(dbURI, done)
  })

  it('insert() user in the db', function(done) {
    new dummyTest({
      email: String,
      firstName: String,
      lastName: String,
      passwordHash: String,
      age: String,
      description: String,
      location: String,
      img: String
    }).insert(dummyTest)
  })
  it('find() users in the db', function(done) {
    new dummyTest({
      email: String,
      firstName: String,
      lastName: String,
      passwordHash: String,
      age: String,
      description: String,
      location: String,
      img: String
    }).save(done)
  })
})

describe('testing to see if user can sign in', function() {
  it('', function(done) {
    new dummyTest({
      email: String,
      firstName: String,
      lastName: String,
      passwordHash: String,
      age: String,
      description: String,
      location: String,
      img: String
    })
  })
})

describe('testing to see if user can sign up', function() {
  it('', function(done) {
    new dummyTest({
      email: String,
      firstName: String,
      lastName: String,
      passwordHash: String,
      age: String,
      description: String,
      location: String,
      img: String
    })
  })
})
