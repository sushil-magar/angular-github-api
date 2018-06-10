require('dotenv').config({silent: true});

const express = require('express');
const app = express();
const path = require('path');

// const db = require('./db/config');
const port = process.env.PORT || 8000;

app.use(express.static(path.resolve(__dirname + './dist')));

app.get('/', (req, res) => {
  res.send('Hello..Server started!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
