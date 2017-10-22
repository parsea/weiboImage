function getSrc(){
	var num = Math.floor(Math.random()*687);
	if (num < 10 ) {
		num = "00"+num;
	}else if(num < 100){
		num = "0"+num;
	}
	return "http://oxv4n8ei3.bkt.clouddn.com/"+num+".jpg"
}

function getClass(oParent,clsName){
	var boxArr = new Array();
	oElements  = oParent.getElementsByTagName('*');
	for(var i=0;i<oElements.length;i++){
		if(oElements[i].className == clsName){
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}
var imgSrc = getSrc();
var oDiv = getClass(document,'WB_miniblog');
oDiv[0].style.backgroundImage="url("+imgSrc+")";

function changeImg(){
	imgSrc = getSrc();
	oDiv[0].style.backgroundImage="url("+imgSrc+")";
}

setInterval(changeImg,10000*60*60);
