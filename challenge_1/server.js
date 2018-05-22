const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));
app.listen(1337, () => console.log('Listening on port 1337...'));