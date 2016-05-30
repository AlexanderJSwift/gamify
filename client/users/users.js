Meteor.subscribe('players', function() {
	console.log(Players.find().count());
});

Meteor.subscribe('departments');

Template.AddUser.helpers({

	playersList: () => {
		return Players.find();
	},

	options: () => {
		return Departments.find({}, {
			id: 1,
			name: 1
		}).map(function(c) {
			return {
				label: c.name,
				value: c._id
			};
		});
	}
})

Template.AddUser.events({
	'change #department': function(event,template){
		var departmentId = $(event.currentTarget).val();
		console.log("Department Id: "+departmentId);
		$('#departmentId').val(departmentId);
	}
})