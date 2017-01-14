const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const port = process.env.PORT || 3000;





app.use(express.static(__dirname + '/public'));
app.use(expressLayouts);

app.set('view engine', 'ejs');


app.use(require('./app/routes'));



app.listen(port, function() {
  console.log("listening on port 3000");
})
