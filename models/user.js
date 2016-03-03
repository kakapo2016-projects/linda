var mongoose = require('mongoose');

modules.exports = mongoose.Schema({
		email: String,
		firstName: String,
		lastName: String,
		passwordHash: String
		age: Number,
		description: String,
		location: String
		img: String
	})
