var path = require('path');
var express = require('express');
var app = express();
//app.use(express.static(__dirname + '/public'));
//app.use('/public', express.static(__dirname + '/app/public'));
module.exports = function(app){
	
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});
	

	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
		//app.use('/public', express.static(__dirname + '/app/public'));		
	});
	
}