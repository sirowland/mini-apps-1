const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongo = require('./mongo.js');
const User = mongo.user;
const Address = mongo.address;
const CreditCard = mongo.creditcard;

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.post('/users', (req, res) => {
    var user = new User(req.body);
    user.save((err) => {
        if (err) {
            console.log(err);
        }
        res.send();
    });
});

app.post('/addresses', (req, res) => {
    var address = new Address(req.body);
    address.save((err) => {
        if (err) {
            console.log(err);
        }
        res.send();
    });
});

app.post('/ccinfo', (req, res) => {
    var ccinfo = new CreditCard(req.body);
    ccinfo.save((err) => {
        if (err) {
            console.log(err);
        }
        res.send();
    });
});