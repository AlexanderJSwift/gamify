Players = new Mongo.Collection('players');

Players.allow({
	insert:function(){
		return true;
	}
})



Badge = new SimpleSchema({
	badgeType:{
		type: String,
		label: 'Badge Type'
	},
	badgeExtraDescription:{
		type:String,
		label: 'Badge Description'
	},
	badgeEarnedOn:{
		type:Date,
		label:'Earned On:'
	},
	badgeImage:{
		type:String,
		label: 'Image Path'
	}
})

PlayerSchema = new SimpleSchema({
	firstName:{
		type:String,
		label:"First Name"
	},
	lastName:{
		type:String,
		label:"Last Name"
	},
	departmentId:{
		type: String,
		autoform: {
			type:"hidden"
		},
		optional: true
	},
	badges:{
		type:[Badge]
	}
});

Players.attachSchema(PlayerSchema);