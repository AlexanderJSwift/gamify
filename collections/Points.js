PointTypes = new Mongo.Collection('points');
PointTypes.allow({
	insert:function(){
		return true;
	}
})
PointsSchema = new SimpleSchema ({
	name:{
		type:String
	}
})

PointTypes.attachSchema(PointsSchema);