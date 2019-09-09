const express = require('express');
const app = express();

// Set the Express Templating engine to PUG
app.set('view engine', 'pug');
app.set('views', './views'); // explicitly set to default

// Static content folder
app.use(express.static('public'));

// MongoDB
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/surf',  { useNewUrlParser: true })
//   .then(() => console.log('Connected to MongoDB...'))
//   .catch(err => console.error('Could not connect to MongoDB...'));

// Routes
const home = require('./routes/home');
app.use('/', home);

// Setup server on environment port or default to 3000
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});