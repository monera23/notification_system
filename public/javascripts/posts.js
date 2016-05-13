
var express = require('express');
var mongoose = require( 'mongoose' );
var notifications= require('../../core-modules/notification');


var user=["Richard","Harry","Sam","James","Ben","Wayne","Adam","Andy","Charles","Dane"];  // 10

var posts=[" posted a photo"," posted a video"," commented on your post"," liked your photo"," liked your video"]; // 5

exports.notify=function(){

for(var i=0;i<5;i++)
{
	 


	var obj={
		name: user[Math.floor(Math.random() * 10)],
		post: posts[Math.floor(Math.random() * 5)],
		read: "unread"
	};


	notifications.create(obj,function(err,newnoti){
		if(err){
			console.log(err);
		}
		else
		{
			// console.log(newnoti);
			var y=obj;
			obj={};


		}
	});



}
}



