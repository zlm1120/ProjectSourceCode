$(function() {
	$('.btngroup button').each(function(index) {
		$(this).click(function() {
			$(this).addClass('activebtn').siblings().removeClass('activebtn');
		});
	});
	//getpage
	function getPage(url) {
		if (url == "" || url == null) {
			return;
		}
		$.get(url, {
//			"_": Math.random()
		}, function(result) {
			$(".invitationCon").html('');
			$(".invitationCon").append(result);
		});
	}
	
	var username=sessionStorage.getItem('phone');
	console.log(username);
});