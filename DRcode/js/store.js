$(function(){
	getsilder("storedivid","storeimgid","cicrelistid","leftbtnid","rightbtnid",false);
	//点击导航
	$(".storemainnav li").each(function(){
		$(this).click(function(){
			$(this).addClass("liclicked").siblings().removeClass("liclicked");
		});
	});
});
