var mongoose = require('mongoose');

	module.exports = mongoose.Schema({
		email: String,
		firstName: String, 
		lastName: String,
		passwordHash: String,
		age: String,
		description: String,
		location: String,
		img: String
	})