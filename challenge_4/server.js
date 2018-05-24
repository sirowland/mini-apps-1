const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('./client/dist'));
app.listen(3000, () => {
    console.log('Listening on port 3000...');
});

