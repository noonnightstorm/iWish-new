var mongoose = require( 'mongoose' );
mongoose.connect( 'mongodb://localhost/wish-tree' );
var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var Person = new Schema({
	mail : String ,
	password : String ,
	name : String ,
	avatar : String ,
	pro_num : Number ,
	wish_num : Number 
});
var Project = new Schema({
	name : String ,
	content : String ,
	user_id : String ,
	password : String ,
	date : String , 
	wish_num : Number ,
	comment_num : Number
});
var Wish = new Schema({
	content : String ,
	user : {
		name : String,
		avatar : String
	} ,
	project_id : String ,
	status : String,
	score: Number,
	date : String ,
	new_mark : Boolean
});
var Comment = new Schema({
	user_id : String , 
	project_id : String ,
	content : String ,
	new_mark : Boolean ,
});

var Persons = mongoose.model( 'Person', Person );
var Projects = mongoose.model( 'Projects', Project );
var Wishs = mongoose.model( 'Wishs', Wish );
var Comments = mongoose.model( 'Comments' , Comment);

exports.selectUser = function(info,cb,err_cb){
	Persons.findOne({mail:info.mail,password:info.psw},function(err,user){
		if(err){
			err_cb(JSON.stringify({result : "db error"}));
			return ;
		}
		if(user){
			cb(user);
		}
		else{
			err_cb(JSON.stringify({result : "fail"}));
		}
	});
};
exports.insertUser = function(info,cb){
	var user = new Persons();
	user.mail = info.mail;
	user.password = info.psw;
	user.name = info.name;
	user.avatar = info.avatar;
	user.pro_num = 0;
	user.wish_num = 0;
	user.save();
	if(user._id){
		cb(user);
	}
};
exports.selectProjectList = function(info,cb,err_cb){
	if(info.mail && info.name){
		Projects.find({mail:info.mail,name:info.name},null,{skip:info.index,limit:info.num}).sort({_id:-1}).exec(function(err,projects){
			if(err){
				err_cb(err);
			}
			if(projects){
				cb(projects);
			}
		});
	}
	else{
		Projects.find({},null,{skip:info.index,limit:info.num}).sort({_id:-1}).exec(function(err,projects){
			if(err){
				err_cb(err);
			}
			if(projects){
				cb(projects);
			}
		});
	}
};
exports.insertProject = function(info,cb){
	var project = new Projects();
	var date = new Date();
	project.name = info.name;
	project.content = info.content;
	project.password = info.password;
	project.user_id = info.user_id;
	project.date = date.getFullYear()+"-"+(parseInt(date.getMonth())+1)+"-"+date.getDate();
	project.wish_num = 0;
	project.comment_num = 0;
	project.save();
	cb(project);
};
exports.selectMyProject = function(info,err_cb,cb){
	Projects.find({user_id:info.user_id},function(err,projects){
		if(err){
			err_cb();
		}
		if(projects){
			cb();
		}
	});
};
exports.insertWish = function(info,err_cb,cb){
	Persons.findOne({_id:info.user_id},function(err,person){
		if(err){
			err_cb("select error");
		}
		if(person){
			var date = new Date();
			var Wish = new Wishs();
			Wish.content = info.content;
			Wish.project_id = info.project_id;
			Wish.user.name = user.name;
			Wish.user.avatar = user.avatar;
			Wish.status = "iwish";
			Wish.score = 0;
			Wish.date = date.getFullYear()+"-"+(parseInt(date.getMonth())+1)+"-"+date.getDate();
			Wish.save();
			cb();
		}
		else{
			err_cb("select no persons");
		}
	});
};
exports.updataWishStatus = function(info,err_cb,cb){
	
};