$(function(){
	//列表样式
	$('.listcon').each(function(){
		var size=$(this).find('.listconbody').size();
		if(size>1){
			for(var i=0; i<size; i++){
				$('.listconbody').eq(i).addClass("borderactive1");
			}
			$('.listconbody').eq(size-1).addClass("borderactive").removeClass("borderactive1");
		}
	});
	//优惠券
		/*var parenttop=$('.discounthover').offset().top;
		var parentleft=$('.discounthover').offset().left;
		console.log("duhfuh"+parentleft);
		$(".discount").css({"left":parentleft+"px","top":parenttop+"px"});*/
});

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
	//全选
	$("input.allcheck").click(function(){
		var status=$(this).prop("checked");
		console.log(status);
		var inputsize=$(".listconbody input[type=checkbox]").size();
		console.log(inputsize);
		for(var i=0; i<inputsize; i++){
			$(".listconbody input[type=checkbox]").eq(i).attr("checked",status); 
		}
	});
	//选中了商品件数和价格
	$(".listconbody input[type=checkbox]").each(function(){
		var index=0;
		var price=0;
		$(this).on("click",function(){
			var statusprop=$(this).prop("checked");
			var thisstatus=$(this).attr("checked",statusprop);
			if(statusprop){
				var thisprice=$(this).parent().parent().find(".price").find('span').text();
				index+=index++;
				price+=thisprice;
			}
			console.log(index+"fgbg"+parseInt(price));
			index=index;
			price=price;
		});
	})
})
