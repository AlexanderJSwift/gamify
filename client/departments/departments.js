Meteor.subscribe('departments');

Template.AddDepartment.helpers({
	departments:()=>{
		return Departments.find({}); 
	}
})