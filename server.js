const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./routes/routes');
const app = express();

// mongoDB connect
const dbURI =
  'mongodb+srv://hustle123:hustle123@cluster0.mm8tj.mongodb.net/net-ninja?retryWrites=true&w=majority';
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => app.listen(8000))
  .catch((err) => console.log(err));

// regiter view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blogs routes
app.use('/blogs', router);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
