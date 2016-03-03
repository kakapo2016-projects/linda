var should = require('chai').should()
var mongoose = require('mongoose')
var clearDB  = require('mocha-mongoose')(dbURI)

var dbURI = 'mongodb://localhost:27017/linda'

var Dummy = mongoose.model('Dummy', new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  passwordHash: String,
  age: String,
  description: String,
  location: String,
  img: String
}))
