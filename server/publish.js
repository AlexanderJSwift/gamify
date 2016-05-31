Meteor.publish('departments', function(){
	return Departments.find();
})

Meteor.publish('players', function(){
	return Players.find();
})

Meteor.publish('points',function(){
	return PointTypes.find();
})