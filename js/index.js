window.onload = function() {
	var bgcolor = ["#032276", "#red"];
	getLeftList("navvertical");
	getMainSlide("wrap", "pic", "list", "next", "prev");
}
/*
 * 垂直导航
 */
function getLeftList(classNameId) {
	//获取鼠标移上元素的父元素
	var LeftListParent = document.getElementById(classNameId);
	//获取父元素下的所有的子元素
	var LeftListSon = LeftListParent.getElementsByTagName('li');
	//遍历节点
	var flagStatus = false,index;
	
	$(LeftListSon).mouseenter(function(){
		flagStatus = true;
		index = $(this).index();
	})
	$(LeftListSon).mouseout(function(){
		flagStatus = false;
	});
	$('.aisde-content').mouseenter(function(){
		flagStatus = true;
	});
	$('.aisde-content').mouseout(function(){
		flagStatus = false;
	});
	$('#navvertical li').hover(
		function(){
			$('.aisde-content').hide();
			$('.aisde-content').eq(index).show();
		},
		function(){
			setTimeout(function(){
				if(!flagStatus ){
					$('.aisde-content').hide();
				}
			},10)
		}
	);
	$('.aisde-content').hover(
		function(){
		},
		function(){
			setTimeout(function(){
				if(!flagStatus){
					$('.aisde-content').hide();
				}
		},10)
		}
		)
}
/*
 * 轮播
*/
function getMainSlide(parentclassName, picclassname, Listclassname, Nextclassname, Prevclassname) {
	var SlideWrap = document.getElementById(parentclassName), //获取轮播的总的父节点
		SlidePic = document.getElementById(picclassname), //获取轮播图片
		Slideimg = SlidePic.getElementsByTagName('li'),
		SlideList = document.getElementById(Listclassname).getElementsByTagName('li'), //获取轮播图的小圆点
		SlideNext = document.getElementById(Nextclassname) //next
	SlidePrev = document.getElementById(Prevclassname);
	index = 0, //索引
		timer = null; //定时器

	var bgcolor = ["#032276", "red", "green"];
	/*start slide*/
	function change(curIndex) {
		SlidePic.style.marginTop = (-500 * curIndex) + 'px'; //通过改变margintop值来实现图片的移动
		/*先去除所有的索引的类名*/
		for (var i = 1; i < SlideList.length; i++) {
			$(SlideList).eq(curIndex).addClass("on").siblings().removeClass("on");
		}
		$(".index-content").css("background-color", '' + bgcolor[curIndex] + '');
		/*给index赋值当前的索引值*/
		index = curIndex;
	}
	/*auto slide*/
	function auto() {
		timer = setInterval(function() {
			++index;
			if (index >= SlideList.length) {
				index = 0;
			}
			change(index);
		}, 2000);
	}
	/*点击next按钮*/
	$(SlideNext).bind("click", function() {
		if (index == 4) {
			index = 0;
		} else {
			index++;
		}
		change(index);
		$(SlidePic).animate({
			margintop: -(index * 500)
		}, 0);
	});
	/*点击prev按钮*/
	$(SlidePrev).bind("click", function() {
		if (index == 0) {
			index = 4;
		} else {
			index -= 1;
		}
		change(index);
		$(SlidePic).animate({
			marginTop: -(index * 500)
		}, 0);
	});
	/*鼠标移上*/
	$(SlideWrap).mouseover(function() {
		clearInterval(timer);
		$("#prev, #next").css("display", "block");
	});
	/*鼠标移开*/
	$(SlideWrap).mouseout(function() {
		$("#prev, #next").css("display", "none");
		auto();
	});
	/*点击小圆点*/
	for (var i = 0; i < SlideList.length; i++) {
		SlideList[i].id = i;
		SlideList[i].onclick = function() {
			change(this.id);
		}
	}
	auto();
}

$(function() {
	/*
	 * 每个专区上连接
	 */
	$(".injurytitle .changelist a").each(function() {
		$(this).click(function() {
			$(this).addClass("indexbordractive").siblings().removeClass("indexbordractive");
		});
	});
	/*
	 * 右边的导航
	 */
	$(".leftnav li").each(function(){
		$(this).click(function(){
			$(this).addClass("leftnavactive").siblings().removeClass("leftnavactive");
		});
	});
	//页面超链接单独页面打开
	$("body a").click(function(){
		$(this).attr("target","_blank");
	});
});