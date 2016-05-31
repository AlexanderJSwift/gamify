Meteor.subscribe('points');

Template.AddPointTypes.helpers({
	pointTypes: ()=> {
		return PointTypes.find();
	}
})