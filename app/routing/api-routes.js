var friendsData = require('../data/friends.js');
var path = require('path');

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	});

	app.post('/api/friends', function(req, res){
		var friendSum = 0;
		var newFriendSum = 0;
		var currentFriendScore = 0;
		var lowestCurrentScore = Infinity;
		var friendObj;
		for (var i = req.body.scores.length - 1; i >= 0; i--) {
				newFriendSum += parseInt(req.body.scores[i]);								
			}
		for (var i = friendsData.length - 1; i >= 0; i--) {
			for (var j = friendsData[i].scores.length - 1; j >= 0; j--) {
				friendSum += friendsData[i].scores[j];
				console.log("sum " + friendSum);							
			}
			currentFriendScore = Math.abs(friendSum - newFriendSum);
			if(currentFriendScore < lowestCurrentScore){
				lowestCurrentScore = currentFriendScore;
				friendObj = friendsData[i];
			}//if
		}//for
		res.json(friendObj);	
	});
};