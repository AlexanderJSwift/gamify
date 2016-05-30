Players = new Mongo.Collection('players');

Players.allow({
	insert:function(){
		return true;
	}
})

Point = new SimpleSchema({
	pointTypeId:{
		type:String,
		label: "Point Type"
	},
	pointValue:{
		type:Number,
		label: "Point Value"
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
	points:{
		type:[Point]
	},
	badges:{
		type:[Badge]
	}
});

Players.attachSchema(PlayerSchema);