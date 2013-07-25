window.onload = function(){
	//test
	$("#suggest").click(WishListener.listener);
	$("#all-screen").click(WishListener.clearScreen);
	$("#wish-form").submit(WishListener.sendWish);
}

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
	},
	sendWish : function(event){
		event.preventDefault();
		console.log("send wish");
		if(wishVertify()){

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