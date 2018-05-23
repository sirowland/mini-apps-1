var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('HELLO HELLO HELLO FROM THE MONGOD')
});

var fileSchema = new mongoose.Schema({
    jsonFile: String,
    csvFile: String
});

module.exports.JsonCsv = mongoose.model("JsonCsv", fileSchema);