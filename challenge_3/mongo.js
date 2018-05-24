const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('HELLO HELLO HELLO FROM THE MONGOD');
});

var userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});

var addressSchema = mongoose.Schema({
    address: String,
    shipZip: String,
    phone: String
});

var ccSchema = mongoose.Schema({
    ccNum: String,
    expiry: String,
    cvv: String,
    billZip: String
});

var User = module.exports.user = mongoose.model('User', userSchema);
var Address = module.exports.address = mongoose.model('Address', addressSchema);
var CreditCard = module.exports.creditcard = mongoose.model('Credit', ccSchema);