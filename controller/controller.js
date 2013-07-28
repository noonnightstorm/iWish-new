var db = require('../db/db');

//登录检验
exports.c_login_check = function(req, res){
	var info = {
		mail : req.body.mail,
		psw : req.body.psw
	};	
	var cb = function(data){
		return function( select_data ){
			write_back(res,JSON.stringify({ result : "success" , mail: data.mail , name : select_data.name , user_id : select_data._id}));
		}
	};
	var err_cb = function(data){
		write_back(res,data);
	};
	db.selectUser(info,cb(info),err_cb);
};

//注册用户
exports.c_register_addUser = function(req , res){
	var info = {
		mail : req.body.mail,
		psw : req.body.psw,
		name : req.body.name,
		avatar : req.body.avatar
	};
	var cb = function(data){
		write_back(res,JSON.stringify({ result : "success" , mail : data.mail , name : data.name ,user_id : data._id}));
	};
	db.insertUser(info,cb);
};

//获取项目列表的数据
exports.c_pro_list_data = function(req , res){
	var index = parseInt(req.params.index)
	,num = parseInt(req.params.num);
	//num为返回数据的数量，不能太多
	if(!isNaN(index) && !isNaN(num) && num <=25){
		var info = {
			index : index,
			num : num
		};
		var cb = function(data){
			write_back(res,data);
		};
		var err_cb = function(err_info){
			write_back(res,err_info);
		};
		db.selectProjectList(info,cb,err_cb);
	}
	else{
		write_back(res,JSON.stringify({ result : "fail" , info : "login info have some problem"}));
	}
};

//创建项目
exports.c_create_pro = function(req, res){
	var info = {
		name : req.body.name,
		content : req.body.content,
		user_id : req.cookies.user_id,
		password : req.body.password,
	},
	cb = function (data){
		write_back(res,JSON.stringify({result:"success",mail:req.cookies.mail,name:req.cookies.name,user_id:req.cookies.user_id,project_id:data._id}));
	};
	db.insertProject(info,cb);
};

//获取愿望树的数据
exports.c_wish_list_data = function(req, res){
	var info = {
		mail : req.cookies.mail,
		name : req.cookies.name,
		user_id : req.cookies.user_id,
		project_id : req.params.project_id,
		index : req.params.index,
		num : req.params.num
	},
	cb = function(data){
		write_back(res,data);
	},
	err_cb = function(err_info){
		write_back(res,err_info);
	};
	db.selectWishList(info,cb,err_cb);
};

//获取项目内容
exports.c_init_project = function(req, res){
	var info = {
		project_id : req.params.project_id
	};
	var cb = function(data){
		write_back(res,data);
	};
	var err_cb = function(err_info){
		write_back(res,err_info);
	};
	db.selectProject(info,cb,err_cb);
};

//创建愿望
exports.c_create_wish = function(req, res){
	var info = {
		mail : req.cookies.mail,
		name : req.cookies.name,
		user_id : req.cookies.user_id,
		project_id : req.body.project_id,
		content : req.body.project_content
	},
	cb = function(){
		write_back(res,JSON.stringify({result:"success"}));
	},
	err_cb = function(err_info){
		write_back(res,JSON.stringify({result:"fail",info:err_info}));
	};
	db.insertWish(info,cb,err_cb);
};
//获取status不同的wish
exports.c_wish_list_data = function(req ,res){
	var info = {
		mail : req.cookies.mail,
		name : req.cookies.name,
		user_id : req.cookies.user_id,
		project_id : req.params.project_id,
		index : req.params.index,
		num : req.params.num,
		status : req.params.status
	},
	cb = function(data){
		write_back(res,data);
	},
	err_cb = function(err_info){
		write_back(res,err_info);
	};
	db.selectWish(info,cb,err_cb);
};


function write_back(res,data){
	if(typeof(data) == "object"){
		res.writeHead(200, {"content-type" : "text/json"});
		res.write(JSON.stringify(data));
		res.end('\n');
	}
	else if(typeof(data) == "string"){
		res.writeHead(200, {"content-type" : "text/json"});
		res.write(data);
		res.end('\n');
	}
}