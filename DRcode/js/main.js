window.onload = function() {
	var as = $("body a");
	$(as).click(function(){
		$(this).target="_blank";
	});
}