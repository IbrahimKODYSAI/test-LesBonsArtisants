// /* eslint-disable */

// imports

const express = require('express');

const server = express();
const mongoose = require('mongoose');

require('dotenv').config();

// import routes

const productRoute = require('../routes/product');

server.use('/product', productRoute);

// routes

server.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send('<h1>Hello welcome to the Server\'s home</h1>');
});

// connect to DB

mongoose
  .connect(
    'mongodb+srv://kodysai:kody2056@rest-poq8s.mongodb.net/rest?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => {
    console.log('Connected to Mongo!');
  })
  .catch((err) => {
    console.error('Error connecting to Mongo', err);
  });

// linstening to the server

server.listen(3000, function() {
  console.log('server start');
});
