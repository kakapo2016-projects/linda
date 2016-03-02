var dbURI = 'monogodb://localhost/db_name'
var expect = require('chai').expect
var should = require('chai').should
var mongoose = require('mongoose')
var Dummy = mongoose.model('Dummy', new mongoose.Schema({ a:Number }))

describe("Example spec for a model", function() {
  beforeEach(function(done) {
    if (mongoose.connection.db) return done()

    mongoose.connect(dbURI, done)
  })

  it("can be saved", function(done) {
    new Dummy({ a: 1 }).save(done)
  })

  it("can be listed", function(done) {
    new Dummy({ a: 1 }).save(function(err, model){
      if (err) return done(err)

      new Dummy({ a: 2 }).save(function(err, model){
        if (err) return done(err)

        Dummy.find({}, function(err, docs){
          if (err) return done(err)

          // without clearing the DB between specs, this would be 3
          docs.length.should.equal(2)
          done()
        })
      })
    })
  })
