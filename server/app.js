// /* eslint-disable */
// imports
const express = require('express');

const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

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

// body parser config
server.use(cors());
server.use(bodyParser.json());
server.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
   //intercepts OPTIONS method
if ('OPTIONS' === req.method) {
  //respond with 200
  res.send(200);
}
else {
//move on
  next();
}
});

// import routes
server.use('/api/product', require('../routes/product'));
server.use('/api/user', require('../routes/user'));


// linstening to the server
server.listen(3000, function() {
  console.log('server start');
});
