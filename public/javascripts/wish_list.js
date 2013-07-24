window.onload = function(){
	//test
}

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