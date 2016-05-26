FlowRouter.route('/',{
	name:'home',
	action(){
		BlazeLayout.render('HomeLayout');
	}
})

FlowRouter.route('/users',
{
	name: 'users',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Users'});
	}
})

FlowRouter.route('/departments',
{
	name:'departments',
	action(){
		BlazeLayout.render('MainLayout', {main:'AddDepartment'});
	}
})