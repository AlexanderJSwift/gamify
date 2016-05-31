Template.EditDepartments.onCreated(function () {
	 this.autorun(()=>this.subscribe('departments'));
})

Template.EditDepartments.helpers({
	departments:()=>{
		return Departments.find({}); 
	}
})