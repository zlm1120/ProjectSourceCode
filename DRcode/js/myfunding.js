$(function(){
	//点击按钮实现不同的样式和内容的填充
	$('.fundingbtngroup a').each(function(){
		$(this).click(function(){
			$(this).addClass('activeclick').siblings().removeClass('activeclick');
		});
	});
	//根据文字给定样式
	$('.funding1list table tr td.laststatus').each(function(){
		var text=$(this).text();
		if(text==="正在进行中"){
			$(this).css("color","#f1a400");
		}else if(text==="已结束"){
			$(this).css("color","#808080");
		}else if(text==="筹集中"){
			$(this).css("color","#3cb1f7");
		}else{
			$(this).css("color","#fe8202");
		}
	});
});
