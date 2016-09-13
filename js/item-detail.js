$(function(){
	/*主要内容区域详情导航*/
	$('.breadcrumb li').each(function(){
		if($(this).hasClass("active")){
			$(this).find("a").css("font-weight","bold");
		}
	});
	/*规格 尺寸点击*/
	$(".detailactiveparent span").click(function(){
		$(this).addClass('detailactive').siblings().removeClass('detailactive');
	});
});
//焦点轮播图
$(function() {
	/*代码初始化,动态生成小圆点*/
	var imgsize = $(".detailslide .detailimglist li").size();
	for (var i = 0; i < imgsize; i++) {
		var li = "";
		li = "<li></li>";
		$(".cicreList").append(li);
		$(".cicreList li").first().addClass("numactive");
	}
	/*手动控制*/
	$(".detailimglist li").first().show();
	/*圆点鼠标移上*/
	$(".cicreList li").mouseover(function() {
		$(this).addClass("numactive").siblings().removeClass("numactive");
		var index = $(this).index();
		indexli = index;
		$(".detailimglist li").eq(index).fadeIn().siblings().fadeOut();
	});
	/*自动控制*/
	var timer = null;
	var indexli = 0;
	timer = setInterval(function() {
		moverigth();
	}, 2000);
	/*鼠标移入移除*/
	$(".detailslide").mouseover(function() {
		clearInterval(timer);
	});
	$(".detailslide").mouseout(function() {
		timer = setInterval(function() {
			moverigth();
		}, 2000);
	});
	/*move left*/
	function moveleft() {
		indexli--;
		if (indexli == -1) {
			indexli = (imgsize - 1);
		}
		$(".imglist li").eq(indexli).stop().fadeIn(300).siblings().stop().fadeOut(300);
		$(".cicreList li").eq(indexli).addClass("numactive").siblings().removeClass("numactive");
	}
	/*move rigth*/
	function moverigth() {
		indexli++;
		if (indexli == imgsize) {
			indexli = 0;
		}
		$(".detailimglist li").eq(indexli).stop().fadeIn(300).siblings().stop().fadeOut(300);
		$(".cicreList li").eq(indexli).addClass("numactive").siblings().removeClass("numactive");
	}
});
