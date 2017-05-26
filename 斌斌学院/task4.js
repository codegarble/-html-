var buttons=document.getElementsByTagName('button');
var leftIn=buttons[0],
	rightIn=buttons[1],
	leftOut=buttons[2],
	rightOut=buttons[3]; 

function _leftIn(){
	var input=document.querySelector('input');
	var num=parseInt(input.value,10);
	var present=document.querySelector('div');
	var spans=present.childNodes;
	var span=document.createElement('span');
	span.textContent=num;
	if(!spans){
		present.appendChild(span);
	}else{
		present.insertBefore(span,spans[0]);
	}
	input.value='';
}

function _rightIn(){
	var input=document.querySelector('input');
	var num=parseInt(input.value,10);
	var present=document.querySelector('div');
	var span=document.createElement('span');
	span.textContent=num;
	present.appendChild(span);
}

function _leftOut(){
	var present=document.querySelector('div');
	var spans=present.childNodes;
	if(spans.length==0){
		alert('空的，没有可以弄出去的了！');
	}else{
		present.removeChild(spans[0]);
	}
}

function _rightOut(){
	var present=document.querySelector('div');
	var spans=present.childNodes;
	if(spans.length==0){
		alert('空的，没有可以弄出去的了！');
	}else{
		present.removeChild(spans[spans.length-1]);
	}
}

leftIn.onclick=_leftIn;
rightIn.onclick=_rightIn;
leftOut.onclick=_leftOut;
rightOut.onclick=_rightOut;
