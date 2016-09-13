//悬浮框的位置
$(function() {
	$('.Plogo .PL-center ul li:nth-child(2)').mousemove(function() {
		$('.Passmenu').css("display","block");
	});
	$('.Plogo .PL-center ul li:nth-child(2)').mouseout(function() {
		$('.Passmenu').css("display","none");
	});
	
	/*修改资料*/
	$('.amend a').hover(function(){
		$(this).css("text-decoration",'none');
	});
	
	/*邀请码*/
	$(".invitationNav div a").click(function(){
		$(this).parent().addClass('activecode').siblings().removeClass('activecode');
		$(this).parents().siblings().find('span').removeClass('activecode');
	});
});