var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var noti=require('../public/javascripts/posts');
var notifications= require('../core-modules/notification');

var len=0;

router.post('/',function(req,res,next){
	//noti.notify();

  setInterval( function(){
    noti.notify();
  },5000);
  res.send("Ok");
});

router.post('/update',function(req,res,next){
  // console.log(req.body.notification.length);

  len=req.body.notification.length;

  for(var i=0;i<len;i++)
  {
     var ind=req.body.notification._id;

     notifications.update({_id: ind},
     {
      $set: 
      {
        read: "read"
      }
     })

  }

  res.send("Ok");

});






/* GET home page. */
router.get('/', function(req, res, next) {
  
  notifications.find({read: "unread"}).limit(Math.floor(Math.random() * 10)).exec(function(err,notis){

  	if(err)
  	{
  		console.log(err);
  	}
  	else
  	{
  		// console.log(notis.length);
  		console.log("ok");
  		res.send(notis);
  	}
  	
  });



});

module.exports = router;
