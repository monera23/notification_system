var mongoose= require('mongoose'),
	Schema=mongoose.schema;


var notificationSchema=mongoose.Schema({
		name: {type: String, required: true},
		post: {type:String, required:true},
		read: String
});	

module.exports= function(){

	return mongoose.model('notification',notificationSchema);
}();
