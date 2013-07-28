window.onload = function(){
	InitPage.start();
	$("#suggest").click(WishListener.listener);
	$("#all-screen").click(WishListener.clearScreen);
	$("#wish-form").submit(WishListener.addWish);
}

var InitPage = {
	start : function(){
		this.initProject();
		this.initWish();
	},
	initProject : function(){
		var url_items = window.location.href.split("/");
		var project_id = url_items[url_items.length-1];
		var cb = function(data){
			$("#project-body").attr("pro_id",data._id);
			$("#project-title").text(data.name);
			$("#project-content").text(data.content);
		};
		sendAjax("/init_project/" + project_id,"get",null,"json",cb);
	},
	initWish : function(){
		
	}
};

var WishListener = {
	listener : function(){
		WishListener.showScreen();
		WishListener.showForm();
	},
	showScreen : function(){
		$("#all-screen").css("display","block");
	},
	showForm : function(){
		$("#wish-form").animate({
			top : "100px"
		},300);
	},
	clearScreen : function(){
		$("#all-screen").css("display","none");
		$("#wish-form").css("top","-300px");
		$("#wish-form-content").val("");
	},
	addWish : function(event){
		event.preventDefault();
		if(wishVertify()){
			var project_id = $("#project-body").attr("pro_id");
			var project_content = $("#wish-form-content").val();
			var cb = function(data){
				if(data.result == "success"){
					WishListener.clearScreen();
				}
				else{
					alert("发送失败");
				}
			};
			sendAjax("/create_wish","post",{project_id:project_id,project_content:project_content},"json",cb);
		}
	}
};

var CommentListener = {
	listener : function(){

	},
	loading : function(){

	},
	getData : function(){

	}
};

var AddScoreListner = {
	listener : function(){

	}
};

var OperateListener = {
	listener : function(){
		
	}
};



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