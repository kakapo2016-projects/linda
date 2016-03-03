const dbURI    = 'mongodb://localhost/'
const should   = require('chai').should()
const mongoose = require('mongoose')
const Dummy    = mongoose.model('Dummy', new mongoose.Schema({ a:Number }))
const clearDB  = require('mocha-mongoose')(dbURI)

describe('Example spec for a model', () => {
  beforeEach((done) => {
    if (mongoose.connection.db) return done();

    mongoose.connect(dbURI, done)
  })

  it('can be saved', (done) => {
    new Dummy({ a: 1 }).save(done)
  })

  it('can be listed', (done) => {
    new Dummy({ a: 1 }).save((err, model) => {
      if (err) return done(err)

      new Dummy({ a: 2 }).save((err, model) => {
        if (err) return done(err)

        Dummy.find({}, (err, docs) => {
          if (err) return done(err)

          // without clearing the DB between specs, this would be 3
          docs.length.should.equal(2)
          done()
        })
      })
    })
  })

  it('can clear the DB on demand', (done) => {
    new Dummy({ a: 5 }).save((err, model) => {
      if (err) return done(err)

      clearDB((err) => {
        if (err) return done(err)

        Dummy.find({}, (err, docs) =>{
          if (err) return done(err)

          console.log(docs)

          docs.length.should.equal(0)
          done()
        })
      })
    })
  })
})
