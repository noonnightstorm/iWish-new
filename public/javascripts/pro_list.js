$(document).ready(function(){
	ScrollEvent.init();
	$(window).scroll(ScrollEvent.listener);
});

var ScrollEvent = {
	//页数
	index_count : 0,
	//临界值
	threshold : 500,
	//每次获取的项目数量
	project_num : 15,
	init : function(){
		this.getData();
	},
	listener : function(){
		var w_h = $(window).height();
		var a_h = $(document.body).height();
		var top = $(window).scrollTop();
		if(a_h-w_h-top<ScrollEvent.threshold && a_h-w_h*ScrollEvent.index_count > ScrollEvent.threshold){
			ScrollEvent.getData();
		}
	},
	getData : function(){
		var index = ScrollEvent.index_count*ScrollEvent.project_num;
		var num = ScrollEvent.project_num;
		if(num != 0){
			$.ajax({
				url : "/pro_list_data/" + index + "/" + num,
				type : "get",
				datatype : "json",
				success : function(data){
					if(data.length < num){
						ScrollEvent.project_num = 0;
					}
					var box = $("#article-box");
					for(var i = 0;i < data.length;i++){
						var item = $(Template.project_list_item);
						var item_title = item.find(".article-title a").text("标题:" + data[i].name).attr("href","/wish_list_page/"+getCookie("mail")+"/"+getCookie("name")+"/"+getCookie("user_id")+"/"+data[i]._id);
						var item_content = item.find(".article-content").text("简介:" + data[i].content);
						item.appendTo(box);
					}
					ScrollEvent.index_count++;
				},
				error: function(XMLHttpRequest, textStatus, errorThrown){
					console.log(XMLHttpRequest + '#' + textStatus + '#' + errorThrown);
				}
			});
		}
	}
};

function getCookie(key){
	var items = document.cookie.replace(/\s+/g,"").split(";");
	for(var i = 0; i < items.length; i++){
		var vals = items[i].split("=");
		if(key == vals[0]){
			return vals[1];
		}
	}
	return null;
}