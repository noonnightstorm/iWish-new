var Template = {
	project_list_item : [
		'<article class="article-item">',
			'<h2 class="article-title"><a href=""></a></h2>',
			'<p class="article-content"></p>',
		'</article>'
	].join(""),
	project_list_more : [
		'<a class="show-more-wish">',
			'<span class="more-wish-btn">点击查看更多项目</span>',
			'<span class="more-wish-arrow"></span>',
		'</a>'
	].join(""),
	wish_list_item : [
		'<section class="wish-item">',
			'<div class="wish-status"></div>',
			'<div class="wish-avatar avatar" id="avatar-jation"></div>',
			'<article class="wish-content-box">',
				'<span class="wish-content"></span>',
			'</article>',
			'<div class="wish-more-box">',
				'<span class="wish-info">',
					'<span class="wish-name"></span>',
					' @ ',
					'<span class="wish-date"></span>',
				'</span>',
				'<a href="javascript:;" class="comment-text">评论(',
					'<span class="comment-num"></span>',
				')</a>',
			'</div>',
			'<div class="wish-vote">',
				'<span>28</span>',
				'<a href="javascript:;">+1</a>',
			'</div>',
		'</section>'
	].join(""),
	wish_list_more : [
		'<a class="show-more-wish">',
			'<span class="more-wish-btn">点击查看更多愿望</span>',
			'<span class="more-wish-arrow"></span>',
		'</a>'
	].join(""),
	iwish_list_item_bar : [
		'<div class="wish-operate">',
			'<a href="">更多</a>',
			'&nbsp',
			'<a href="">获准</a>',
			'&nbsp',
			'<a href="">删除</a>',
		'</div>'
	].join(""),
	ongoing_list_item_bar : [
		'<div class="wish-operate">',
			'<a href="">更多</a>',
			'&nbsp',
			'<a href="">完成</a>',
			'&nbsp',
			'<a href="">删除</a>',
		'</div>'
	].join(""),
	comment_list_item_dialog : [
		'<div class="comment-box">',
			'<em class="triangle"></em>',
		'</div>'
	].join(""),
	comment_list_item_loading : [
		'<div class="loading-box">',
			'<div class="point-container">',
				'<div class="point-box point-box-1">',
					'<div class="point point1"></div>',
				'</div>',
				'<div class="point-box point-box-2">',
					'<div class="point point2"></div>',
				'</div>',
				'<div class="point-box point-box-3">',
					'<div class="point point3"></div>',
				'</div>',
				'<div class="point-box point-box-4">',
					'<div class="point point4"></div>',
				'</div>',
				'<div class="point-box point-box-5">',
					'<div class="point point5"></div>',
				'</div>',
				'<div class="point-box point-box-6">',
					'<div class="point point6"></div>',
				'</div>',
			'</div>',
			'<span class="loading-text">请稍后</span>',
		'</div>'
	].join(""),
	comment_list_item_input : [
		'<div class="comment-box-input-row">',
			'<input type="text" class="comment-input">',
			'<button class="comment-submit-btn">回复</button>',
		'</div>'
	].join(""),
	comment_list_item_item : [
		'<div class="comment-box-row">',
			'<span class="person-text orange"></span>',
			'<span class="orange">&nbsp:&nbsp</span>',
			'<span class="ordinary-text"></span>',
		'</div>'
	].join(""),
	comment_list_item_more : [
		'<a href="javascript:;" class="comment-show-more">加载更多>></a>'
	].join("")
};