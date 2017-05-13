var thumbBar=document.querySelector('.thumb-bar');
var darkenBtn=document.querySelector('button');

function darken(){
	var overLay=document.querySelector('.overlay');
	overLay.style.backgroundColor='rgba(0,0,0,0.5)';
}

darkenBtn.onclick=darken;

/*
for(var i=1;i<6;i++){
	//将图片预览效果插入页面中
	var thumbImg=document.createElement('img');
	thumbImg.setAttribute('src','pic'+i+'.jpg');
	thumbImg.setAttribute('alt','picture for previewing');
	thumbBar.appendChild(thumbImg);
	//给预览效果中的图片绑定点击事件
	thumbImg.addEventListener('click',function(e){
			var imgDisplay=document.querySelector('.displayed-img');
			imgDisplay.setAttribute('src',e.target.src);
	});
}
*/
for(var i=1;i<6;i++){
	var thumbImg=document.createElement('img');
	thumbImg.setAttribute('src','pic'+i+'.jpg');
	thumbImg.setAttribute('alt','picture for previewing');
	thumbBar.appendChild(thumbImg);

	thumbImg.addEventListener('click',function(num){
		return function(){
			var displayImg=document.querySelector('.displayed-img');
			displayImg.setAttribute('src','pic'+num+'.jpg');
		};
	}(i));
}

