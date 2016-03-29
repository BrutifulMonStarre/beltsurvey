console.log('user.js server/models/user');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: {type: String, required: true, unique: true},
})

mongoose.model('User', UserSchema);
