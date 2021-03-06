var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var path = require('path');

//this is for finding the image dir

//app.use(express.static(path.join(__dirname, 'app/public')));
app.use(express.static(path.normalize(path.join(__dirname, 'app/public'))));
var PORT = process.env.PORT || 3030;//must use this for heroku deployment


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT)
})