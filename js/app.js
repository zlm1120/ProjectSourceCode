window.onload=function(){
	getparents("housingcontain","box");
}
function checkflag(){
	var cparents=document.getElementById('housingcontain');
	var ccontents=getchild(cparents,"box");
	var lastcontentheigth=ccontents[ccontents.length-1].offsetTop;  //最后一个box距离顶部的高度
	var scrollTopS=document.documentElement.scrollTop || document.body.scrollTop;  //滚动条距离顶部的高度
	var pageheigth=document.documentElement.clientHeight || document.body.clientHeight;  //页面的高度
	if(lastcontentheigth<scrollTopS+pageheigth){
		return true;
	}
}
//获取continer下的box
function getparents(parents,content){
	//获取父元素的id
	var cparents=document.getElementById(parents);
	//获取父元素当下的box
	var ccontents=getchild(cparents,content);
	//box的图片的宽度
	var imgwidth=ccontents[0].offsetWidth;
	//获取每一行的排列的数量
	var cols=Math.floor(document.documentElement.clientWidth/imgwidth);
	//获取container的总宽度
/*	cparents.style.cssText="width:"+(imgwidth*cols)+"px; margin:0 auto;";*/
	//box高度的数组
	var boxheigth=[];
	for (var i=0; i<ccontents.length; i++) {
		if(i<cols){
			boxheigth[i]=ccontents[i].offsetHeight;    //存储第一行的box的高度
		}else{
			var minheight=Math.min.apply(null, boxheigth);  //最小的高度
			var minindex=imgLocation(boxheigth,minheight);  //最小告诉的图片的索引
			ccontents[i].style.position="absolute";
			ccontents[i].style.top=minheight+"px";
			ccontents[i].style.left=ccontents[minindex].offsetLeft+"px";
			boxheigth[minindex]=boxheigth[minindex]+ccontents[minindex].offsetHeight;
		}
	}
}
/*获取container 下的所偶的box*/
function getchild(parents,content){
	var allcontentARR=[];
	var contents=parents.getElementsByTagName('*');  
	for(var i=0; i<contents.length; i++){
		if(contents[i].className==content){
			allcontentARR.push(contents[i]);
		}
	}
	return allcontentARR;
}
//最小的box的高度
function imgLocation(boxheigth,minheigth){
	for (var i=0; i<boxheigth.length; i++) {
		if(boxheigth[i]==minheigth){
			return i;
		}
	}
}
