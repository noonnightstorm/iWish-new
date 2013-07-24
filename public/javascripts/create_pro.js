$(document).ready(function(){
	$("#project-form").submit(createProListener);
});

function createProListener(event){
	event.preventDefault();
	if(projectVertify()){
		var info = {
			name : $("#name").val(),
			content : $("#introduction").val(),
			password : $("#password").val(),
		};
		$.ajax({
			url : "/create_pro",
			type : "post",
			data : info,
			datatype : "json",
			success : function(data){
				window.location.href = "/wish_list_page/" + data.mail + "/" + data.name + "/" + data.user_id + "/" +data.project_id;
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				console.log(XMLHttpRequest + '#' + textStatus + '#' + errorThrown);
			}
		});
	}
}