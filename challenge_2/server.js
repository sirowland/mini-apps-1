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
    console.log(req.body);

    
});

app.listen(1337, () => console.log('Listening on port 1337...'));

