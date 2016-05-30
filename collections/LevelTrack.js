LevelTrack = new Mongo.Collection('levelTrack');

Level = new SimpleSchema({
    levelNumber:{
        type:Number,
        label:'Level Number'
    } ,
    xpRequired: { 
        type: Number,
        label: 'XP Requiredx'
    }

})
LevelTrackSchema = new SimpleSchema({
    departmentId: {
        type:String,
        label:'Department Id'
    },
    level: {
        type:[Level]
    }
});


