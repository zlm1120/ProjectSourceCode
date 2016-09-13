$(function() {
	/*btn group js*/
	$('.btn-group button').each(function() {
		$(this).click(function() {
			$(this).addClass('btnactive').siblings().removeClass('btnactive');
		});
	});
	/*列表详情当同一个店铺下的订单元素超过1个时*/
	
});