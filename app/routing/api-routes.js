var friendsData = require('../data/friends.js');
var path = require('path');

module.exports = function(app){

	app.get('/api/friends', function(req, res){
		//res.json(friendsData);
		console.log("in friends.js");
	});

	app.post('/api/friends', function(req, res){
		console.log("here");
	});
};