process.env.PWD = process.cwd();
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;


var request = require('request');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.static(process.env.PWD + '/public'));

app.use(expressLayouts);

app.set('view engine', 'ejs');


app.use(require('./app/routes'));


app.listen(port, function() {
  console.log("listening on port 3000");
})
