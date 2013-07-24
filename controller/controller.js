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