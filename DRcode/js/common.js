//焦点轮播图
function getsilder(slidedivid, imglistid, cicrelistid, leftbtnid, rigthbtnid, liststatus) {
	var slidediv = document.getElementById(slidedivid); //获取焦点轮播图的父级元素也就是div的id
	var imageslide = document.getElementById(imglistid) //获取轮播元素的ul的标签
	var cicrelist = document.getElementById(cicrelistid) //获取小圆点的div
	var leftbtn = document.getElementById(leftbtnid) //获取向左的箭头
	var rigthbtn = document.getElementById(rigthbtnid) //获取向右的箭头
	var timer = null;
	var indexli = 0;
	//代码初始化,动态生成小圆点
	var imgsize = imageslide.getElementsByTagName("li").length; //获取无序列表下的li标签的个数
	if (liststatus) {
		for (var i = 0; i < imgsize; i++) {
			var li = "";
			li = "<li>" + (i + 1) + "</li>";
			$(cicrelist).append(li);
			$('#' + cicrelistid + ' li').first().addClass("numactive");
		}
	} else {
		for (var i = 0; i < imgsize; i++) {
			var li = "";
			li = "<li></li>";
			$(cicrelist).append(li);
			$('#' + cicrelistid + ' li').first().addClass("numactive");
		}
	}
	/*手动控制*/
	$('#' + imglistid + ' li').first().show();
	/*圆点鼠标移上*/
	$('#' + cicrelistid + ' li').mouseover(function() {
		$(this).addClass("numactive").siblings().removeClass("numactive");
		var index = $(this).index();
		indexli = index;
		$('#' + imglistid + ' li').eq(index).fadeIn().siblings().fadeOut();
	});
	/*move left*/
	function moveleft() {
		indexli--;
		if (indexli == -1) {
			indexli = (imgsize - 1);
		}
		$('#' + imglistid + ' li').eq(indexli).stop().fadeIn(300).siblings().stop().fadeOut(300);
		$('#' + cicrelistid + ' li').eq(indexli).addClass("numactive").siblings().removeClass("numactive");
	}
	/*move rigth*/
	function moverigth() {
		indexli++;
		if (indexli == imgsize) {
			indexli = 0;
		}
		$('#' + imglistid + ' li').eq(indexli).stop().fadeIn(300).siblings().stop().fadeOut(300);
		$('#' + cicrelistid + ' li').eq(indexli).addClass("numactive").siblings().removeClass("numactive");
	}
	/*左右按钮*/
	$(leftbtn).click(function() {
		moveleft();
	});
	$(rigthbtn).click(function() {
		moverigth();
	});
	//定时器
	timer = setInterval(function() {
		moverigth();
	}, 2000);
	/*鼠标移入移除*/
	$(slidediv).mouseover(function() {
		clearInterval(timer);
	});
	$(slidediv).mouseout(function() {
		timer = setInterval(function() {
			moverigth();
		}, 2000);
	});
}

/*
 * 左边的导航
 */
//$(function() {
//	var winPos = $(window).offsetTop;
//	$(window).scroll(function() {
//		$(window).scroll(function(){
//						var top=$(this).scrollTop();
//						if(top<1200){
//							alert("dfudhfuh");
//						}else{
//							
//						}
//					});
//	});
//});