console.log('poll.js server/models/poll');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollSchema = new mongoose.Schema({
	question: {type: String, required: true, minlength: 8},
	answers: [{option: {type: String, required: true, minlength: 3}, votes: Number}],
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	created_at: {type: Date, default: new Date}
})

mongoose.model('Poll', PollSchema);
