Departments = new Mongo.Collection('departments');

Departments.allow({
	insert:function(){
		return true;
	}
})

DepartmentSchema = new SimpleSchema({
	name:{
		type:String
	}
})

Departments.attachSchema(DepartmentSchema);