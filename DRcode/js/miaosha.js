$(function() {
	/*代码初始化,动态生成小圆点*/
	var imgsize = $(".slide .imglist li").size();
	for (var i = 0; i < imgsize; i++) {
		var li = "";
		li = "<li>" + (i + 1) + "</li>";
		$(".cicreList").append(li);
		$(".cicreList li").first().addClass("numactive");
	}
	/*手动控制*/
	$(".imglist li").first().show();
	/*圆点鼠标移上*/
	$(".cicreList li").mouseover(function() {
		$(this).addClass("numactive").siblings().removeClass("numactive");
		var index = $(this).index();
		indexli = index;
		$(".imglist li").eq(index).fadeIn().siblings().fadeOut();
	});
	/*自动控制*/
	var timer = null;
	var indexli = 0;
	timer = setInterval(function() {
		moverigth();
	}, 2000);
	/*鼠标移入移除*/
	$(".slide").mouseover(function() {
		clearInterval(timer);
	});
	$(".slide").mouseout(function() {
		timer = setInterval(function() {
			moverigth();
		}, 2000);
	});
	/*左右按钮*/
	$(".slide .lefts").click(function() {
		moveleft();
	});
	$(".slide .rigths").click(function() {
		moverigth();
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
		$(".imglist li").eq(indexli).stop().fadeIn(300).siblings().stop().fadeOut(300);
		$(".cicreList li").eq(indexli).addClass("numactive").siblings().removeClass("numactive");
	}
});

$(function(){
	var numbers;
	$(".list a").each(function(){
		var indexs=$(this).index();
		var html=$(this).text();
		if(html==="已抢光"){
			$(this).css("background-color","#666666").addClass("over");
			$(this).next().find(".progress").css("border","1px solid #666666");
			var siblings=$(this).next().find(".progress-bar").css("background-color","#666666");
			$(this).next().find('em').text("100%");
		}else{
			$(this).css("background-color","#F1A400").removeClass("over");
			$(this).next().find(".progress").css("border","1px solid #F1A400");
			var siblings=$(this).next().find(".progress-bar").css("background-color","#F1A400");
		}
	});
	
	$(".footerlist span em").each(function(){
		var index=$(this).index();
		numbers=$(this).text();
		var progressbar=$(this).parent().parent().find(".progress-bar").width(numbers);
	});
/*});

$(function(){*/
	$(".start").each(function(){
		$(this).click(function(){
			var index=$(this).index();
			$(".seckilllist").addClass("con"+index+" ");
			$(".con"+index+"  .list").each(function(){
				$(this).find("img").attr("src","img/02-0秒杀专区10_03.png");
				$(this).find("a").text("即将开始");
				var tetx=$(this).find("a").text();
				if(tetx==="即将开始"){
					$(this).find("a").css("background-color","#F1A400").removeClass("over");
					$(this).find("a").next().find(".progress").css("border","1px solid #F1A400");
					var siblings=$(this).find("a").next().find(".progress-bar").css("background-color","#F1A400");
				}
			});
		$(".footerlist").css("display","none");
		});
	});

});