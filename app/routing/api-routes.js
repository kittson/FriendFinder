var friendsData = require('../data/friends.js');
var path = require('path');

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	});
	app.post('/api/friends', function(req, res){
		
		var newFriendSum = 0;
		var currentFriendScore = 0;
		var lowestCurrentScore = Infinity;
		var friendObj;
		
		for (var k = req.body.scores.length - 1; k >= 0; k--) {
				newFriendSum += parseInt(req.body.scores[k]);
				//console.log("newfriendSum sum " + newFriendSum);								
			}
		for (var i = friendsData.length - 1; i >= 0; i--) {
			console.log("i is " + i);
			var friendSum = 0;
			for (var j = friendsData[i].scores.length - 1; j >= 0; j--) {
				friendSum += friendsData[i].scores[j];
				//console.log("j is " + j);
				//console.log("friendSum sum " + friendSum);							
			}
			currentFriendScore = Math.abs(friendSum - newFriendSum);			
			if(currentFriendScore < lowestCurrentScore){
				lowestCurrentScore = currentFriendScore;
				friendObj = friendsData[i];
			}//if
		}//for
		res.json(friendObj);
		console.log(req.body);	
		friendsData.push(req.body);
		for (var l = friendsData.length -1; l >= 0; l--){
			console.log("friendsData name " + friendsData[l].name);
		}
		
	});//app.post
};