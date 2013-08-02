window.onload = function(){
	InitPage.start();
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
		WishListener.getFinishWish();
	}
};

var WishListener = {
	index : 0,
	num : 15,
	getFinishWish : function(){
		var url_items = window.location.href.split("/");
		var project_id = url_items[url_items.length-1];
		var cb = function(data){
			var father = $(".status-finish");
			for(var i = 0;i < data.length;i++){
				var item = $(Template.wish_list_item);
				WishListener.setItemData(item,data[i]).appendTo(father);
			}
		};
		//初始化ongoing的愿望
		sendAjax("/wish_list_data/"+project_id+"/"+this.index+"/"+this.num+"/finish","get",null,"json",cb);
	},
	//给元素绑定数据
	setItemData : function(item,data){
		item.find(".wish-status").attr("id","status-"+data.status);
		item.find(".wish-avatar").attr("id","avatar-"+data.user.avatar);
		item.find(".wish-content").text(data.content);
		item.find(".wish-name").text(data.user.avatar);
		item.find(".wish-date").text(data.date);
		item.find(".comment-num").text(data.comment_num);
		item.find(".wish-vote span").text(data.score);
		item.find(".wish-vote a")
		.attr("p_id",data.project_id)
		.attr("w_id",data._id)
		.click(function(e){
			var btn = $(e.target);
			var project_id = btn.attr("p_id");
			var wish_id = btn.attr("w_id");
			var self = btn;
			var cb = function(data){
				var text = self.siblings("span");
				text.text(parseInt(text.text())+1);
			};
			sendAjax("/add_score/"+project_id+"/"+wish_id,"get",null,"json",cb);
		});
		item.find(".comment-text")
		.attr("mark","false")
		.attr("p_id",data.project_id)
		.attr("w_id",data._id)
		.attr("index",0)
		.click(CommentListener.listener);
		return item;
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