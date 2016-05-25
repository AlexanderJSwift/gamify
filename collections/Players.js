Players= new Mongo.Collection('players');

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
	points:{
		type:[Point]
	}
});

Players.attachSchema(PlayerSchema);