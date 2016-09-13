$(function(){
	$(".discounthover").click(function(){
		$(".discount").css("display","block");
		$(this).addClass("discountparent");
		$(".discount .btnspan").each(function(){
			$(this).on("click",function(){
				$(this).addClass("discountactive");
			});
		});
	});
})
