const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/client')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//ATTEMPT AT USING JQUERY IN NODEMODULES
// app.get('/node_modules/jquery/dist/jquery.min.js', function(req, res){
//     res.sendFile(path.join(__dirname, 'node_modules/jquery/dist/jquery.min.js'));
// });

app.post('/', (req, res) => {
    toCSV(req.body, function(data){
        res.send(data);
    });
});

app.listen(1337, () => console.log('Listening on port 1337...'));




function toCSV (object, callback) {
    var data;

    //get keys
    data = getKeys(object)
    
    //iterate through all children
    writeRow(object);

    callback(data);
}

function getKeys (obj) {
    var keysRow = [];
    
    for (var key in obj) {
        if (key !== 'children') {
            keysRow.push(key);
        }
    }

    return keysRow.join(',') + '<br>';
}

function writeRow (obj) {
    var arr = [];

    for (var key in obj) {
        if (key !== 'children') {
            arr.push(obj[key]);
        }
    }

    return arr.join(',') + '<br>';
}

function writeRows (obj) {
    if (children.length === 0) {
    
    } else {
    
    }
}