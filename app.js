// Setup
var express = require('express');
var app = express();

// Listen
app.listen(3333, () => {
  console.log('Server listening on 3333');
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//index route
app.get('/', (req, res) => {
  res.render('index');
});

