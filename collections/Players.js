Players = new Mongo.Collection('players');

Players.allow({
	insert:function(){
		return true;
	}
})

Point = new SimpleSchema({
	pointType:{
		type:String,
		label: "Point Type"
	},
	pointValue:{
		type:Number,
		label: "Point Value"
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
		type: Number,
		autoform: {
			type:"hidden"
		},
		optional: true
	},
	points:{
		type:[Point]

	}
});

Players.attachSchema(PlayerSchema);