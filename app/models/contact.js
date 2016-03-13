var mongoose = require('mongoose');
var schema = mongoose.Schema;
// define our nerd model
// module.exports allows us to pass this to other files when it is called
var userschema = new schema({
    name : String,
    email: String
});
module.exports = mongoose.model('contact', userschema);