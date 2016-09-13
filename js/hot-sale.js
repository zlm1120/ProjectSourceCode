$(function(){
	getsilder("hotsalediv","hotsaleimg","hotsalecicre","hotsaleleft","hotsaleright",false);
	//hotsalecontent
	$(".hotsalecontentTitle span").each(function(){
		$(this).click(function(){
			$(this).addClass("hotsalbtnactive").siblings().removeClass("hotsalbtnactive");
		});
	});
});

//点击改变list的内容
function changelist(index){
	
}
