var express = require('express');
var app = express();
app.use('/public', express.static(__dirname + 'app/public'));

var bodyParser = require('body-parser');
var path = require('path');

var PORT = process.env.PORT || 3030;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT)
})