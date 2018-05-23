const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongo = require('./mongo.js');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

