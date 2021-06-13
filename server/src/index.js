const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

mongoose.connect('mongodb://mongo/smashinator', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(db => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/v1', require('./routes/index'));

// Starting the server
app.listen(app.get('port'), () => console.log(`Server on port ${app.get('port')}`));