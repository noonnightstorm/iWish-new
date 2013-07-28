var controller = require("../controller/controller");
exports.index = function(req, res){
    res.render('index', {});
};

exports.r_register = function(req , res){
	res.render('register' , {});
};

exports.r_login_check = function(req , res){
	controller.c_login_check(req, res);
};

exports.r_register_addUser = function(req , res){
	controller.c_register_addUser(req , res);
};

exports.r_pro_list_page = function(req , res){
	var mail = req.params.mail;
	var name = req.params.name;
	var user_id = req.params.user_id;
	if(mail && name && (mail == req.cookies.mail) && (name == req.cookies.name)){
		res.render('pro_list',{
			mail : mail ,
			name : name ,
			user_id : user_id
		});
	}
};

exports.r_pro_list_data = function(req , res){
	if(req.cookies.mail && req.cookies.name && req.cookies.status){
		controller.c_pro_list_data(req,res);
	}
};

exports.r_create_pro_page = function(req,res){
	var mail = req.params.mail;
	var name = req.params.name;
	var user_id = req.params.user_id;
	if(mail && name && (mail == req.cookies.mail) && (name == req.cookies.name)){
		res.render('create_pro',{
			mail : mail ,
			name : name ,
			user_id : user_id
		});
	}
};	

exports.r_create_pro = function(req, res){
	if(req.cookies.mail && req.cookies.name && req.cookies.user_id){
		controller.c_create_pro(req, res);
	}
};

exports.r_wish_list_page = function(req, res){
	var mail = req.params.mail
	,name = req.params.name
	,user_id = req.params.user_id
	,project_id = req.params.project_id
	,cookies = req.cookies;
	if(mail&&name&&user_id&&project_id&&mail==cookies.mail&&name==cookies.name&&user_id==cookies.user_id){
		res.render("wish_list",{
			mail : mail,
			name : name,
			user_id : user_id,
			project_id : project_id
		});
	}
};
exports.r_wish_list_data = function(req, res){
	var mail = req.cookies.mail;
	var name = req.cookies.name;
	var user_id = req.cookies.user_id;
	if(mail && name &&user_id){
		controller.c_wish_list_data(req,res);
	}
};
exports.r_create_wish = function(req, res){
	var mail = req.cookies.mail;
	var name = req.cookies.name;
	var user_id = req.cookies.user_id;
	if(mail && name &&user_id){
		controller.c_create_wish(req,res);
	}
};
exports.r_init_project = function(req, res){
	var mail = req.cookies.mail;
	var name = req.cookies.name;
	var user_id = req.cookies.user_id;
	if(mail && name && user_id){
		controller.c_init_project(req,res);
	}
};
exports.r_create_wish = function(req, res){
	var mail = req.cookies.mail;
	var name = req.cookies.name;
	var user_id = req.cookies.user_id;
	if(mail && name && user_id){
		controller.c_create_wish(req,res);
	}
};
exports.r_wish_list_data_iwish = function(req ,res){

};
exports.r_wish_list_data_ongoing = function(req ,res){

};