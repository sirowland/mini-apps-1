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
    var keys;
    var values = '';
    var id = 1;

    function writeRows (obj, parentId) {
        //if it's the first row parentId is null
        if (id === 1) {
            values += writeRow(obj, id, null);
        } else {
            values += writeRow(obj, id, parentId);
        }

        if (obj.children.length === 0) {
            return;
        } else {
            //if you start to go down a new tree, save parentId
            parentId = id;
            for (var i = 0; i < obj.children.length; i++) {
                //increment normal id
                id++;
                writeRows(obj.children[i], parentId);
            }
        }
    }

    //get keys
    keys = getKeys(object)

    //get rows
    writeRows(object, null);
    callback(keys + values);
}

function getKeys (obj) {
    var keysRow = ['id','parentId'];
    for (var key in obj) {
        if (key !== 'children') {
            keysRow.push(key);
        }
    }
    return keysRow.join(',') + '<br>';
}

function writeRow (obj, id, parentId) {
    id = id.toString();
    parentId = parentId === null ? 'null' : parentId.toString();

    var arr = [ id, parentId ];

    for (var key in obj) {
        if (key !== 'children') {
            arr.push(obj[key]);
        }
    }
    return arr.join(',') + '<br>';
}