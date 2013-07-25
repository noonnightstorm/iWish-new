function loginVertify(){
	var $login_account = $("#login-account");
	var $login_psw = $("#login-password");
	if(!vertify($login_account,5,"#fff","#ffb9b9")){
		return false;
	}
	if(!vertify($login_psw,5,"#fff","#ffb9b9")){
		return false;
	}
	return true;
}
function registerVertify(){
	var $mail = $("#register-account");
	var $psw = $("#register-psw");
	var $psw_again = $("#register-psw-again");
	var $name = $("#register-nickname");
	var $avatar = $("#register-avatar");
	if(!vertify($mail,5,"#fff","#ffb9b9")){
		return false;
	}
	if(!vertify($psw,5,"#fff","#ffb9b9")){
		return false;
	}
	if($psw.val() != $psw_again.val()){
		$psw_again.css("background","#ffb9b9");
		return false;
	}
	if(!vertify($name,1,"#fff","#ffb9b9")){
		return false;
	}
	if($avatar.val() == "default"){
		$avatar.css("background","#ffb9b9");
		return false;
	}
	return true;
}
function projectVertify(){
	var $name = $("#name");
	var $introduction = $("#introduction");
	var $psw = $("#password");
	var $psw_again = $("#password-again");
	if(!vertify($name,0,"#fff","#ffb9b9")){
		return false;
	}
	if(!vertify($introduction,0,"#fff","#ffb9b9")){
		return false;
	}
	if(!vertify($psw,0,"#fff","#ffb9b9")){
		return false;
	}
	if($psw.val() !== $psw_again.val()){
		$psw_again.css("background","#ffb9b9");
		return false;
	}
	return true;
}

function wishVertify(){
	var $wish_content = $("#wish-form-content");
	if(!vertify($wish_content,0,"#FFF7F4","#ffb9b9")){
		return false;
	}
	return true;
}
/*
function projectEnterVertify(){
	var $wish_menu_input = $("#wish-menu-input");
	if(!vertify($wish_menu_input,0,"#FFF7F4","#ffb9b9")){
		return false;
	}
	return true;
}*/

function vertify(obj,len,old_col,new_col){
	obj.css("background",old_col);
	if(obj.val().length <= len){
		obj.css("background",new_col);
		return false;
	}
	return true;
}