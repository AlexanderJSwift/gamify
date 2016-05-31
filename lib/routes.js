FlowRouter.route('/',{
	name:'home',
	action(){
		BlazeLayout.render('MainLayout');
	}
})

FlowRouter.route('/players',
{
	name: 'players',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Players'});
	}
})

FlowRouter.route('/departments',
{
	name:'departments',
	action(){
		BlazeLayout.render('MainLayout', {main:'EditDepartments'});
	}
})

FlowRouter.route('/add_points',{
	name:'addpoints',
	action(){
		BlazeLayout.render('MainLayout', {main:'AddPointTypes'});
	}
})

FlowRouter.route('/player/:id',
{
	name: 'player',
	action(){
		BlazeLayout.render('MainLayout', {main: 'PlayerSingle'});
	}
})

FlowRouter.route('/adminarea'),
{
	name:'Admin Panel',
	action(){
		BlazeLayout.render('MainLayout', {main: 'AdminArea'});
	}
}