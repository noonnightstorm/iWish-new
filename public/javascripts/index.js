$(document).ready(function(){
	$("#login-form").submit(login_check);
	$("#register-form").submit(register_check);
});

function login_check(event){
	event.preventDefault();
	if(loginVertify()){
		var obj = {
			mail : $("#login-account").val(),
			psw : $("#login-password").val()
		};
		sendAjax("/login_check", "post", obj, "json", function(data){
			if (data.result == "success"){
				document.cookie = "mail="+data.mail;
				document.cookie = "name="+data.name;
				document.cookie = "user_id="+data.user_id;
				document.cookie = "status=user";
				window.location.href = "/pro_list_page/"+ data.mail + "/" + data.name + "/" + data.user_id;
				return true;
			}
			else if (data.result == "fail"){
				$("#login-password").css("background","#ffb9b9");
				return false;
			}
		});
	}
	else{
		return false;
	}
}

function register_check(event){
	event.preventDefault();
	if(registerVertify()){
		var obj = {
			mail : $("#register-account").val(),
			psw : $("#register-psw").val(),
			name : $("#register-nickname").val(),
			avatar : $("#register-avatar").val()
		};
		sendAjax("/register_addUser", "post", obj, "json", function(data){
			if (data.result == "success"){
				document.cookie = "mail="+data.mail;
				document.cookie = "name="+data.name;
				document.cookie = "user_id="+data.user_id;
				document.cookie = "status=user";
				window.location.href = "/pro_list_page/" + data.mail + "/" + data.name + "/" + data.user_id;
			}
		});
	}
}

function sendAjax (url, type, data, datatype, cb) {
	$.ajax({
		url: url,
		type: type, 
		data: data,
		datatype: datatype,
		success: cb,
		error: function(XMLHttpRequest, textStatus, errorThrown){
			console.log(XMLHttpRequest + '#' + textStatus + '#' + errorThrown);
		}
	});
}