Template.PlayerSingle.onCreated(function(){
	this.autorun(()=>this.subscribe('players'));
})

Template.PlayerSingle.helpers({
	player: ()=> {
		var id = FlowRouter.getParam('id');
		return Players.findOne({_id: id});
	}
})