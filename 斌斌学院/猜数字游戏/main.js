var num=Math.floor(Math.random()*100+1);
console.log(num);
var compareButton=document.querySelector('button');
var inputText,//输入的数字
	myLabel,//输入数字展示提示
	numlist,//输入数字展示
	restart;//复位按钮
	

var para=document.createElement('p');//结果
var hint=document.createElement('p');//提示大小
//创建要加入的几个节点
var compareCount=0;//输入计数

compareButton.addEventListener('click',compare);

function compare(){
	inputText=document.querySelector('input').value;
	document.querySelector('input').value="";
	if(inputText==""){
		alert("You must enter a number!");
	}else if(inputText<1||inputText>100){
		alert("You must enter a number between 1 and 100!");
	}else{
		compareCount++;
		console.log(compareCount);
		if(compareCount===1){
			shownum();
		}
		if(inputText==num){
			success();
		}else{
			failed();
		}
		if(compareCount===10){
			compareButton.setAttribute('disabled','disabled');
			restart=document.createElement('button');
			restart.setAttribute("class","restart");
			restart.textContent="start new game";
			restart.addEventListener('click',allrestart);
			para.textContent="Game over!";
			document.body.appendChild(restart);
		}
	}
}

function shownum(){
	myLabel=document.createElement('label');
	myLabel.textContent="Previous guesses: ";
	numlist=document.createElement('p');
	numlist.setAttribute('class','p1');
	document.body.appendChild(myLabel);
	document.body.appendChild(numlist);	
}

function failed(){
	if(inputText>num){
		hint.textContent="Last guess was too high!";
	}else{
		hint.textContent="Last guess was too low!";
	}
	numlist.textContent+=" "+inputText;
	para.textContent="Wrong!";
	para.setAttribute('class','para failed');
	document.body.appendChild(para);
	document.body.appendChild(hint);
}

function success(){
	para.textContent="Congratulations!You got it right!";
	document.body.appendChild(para);
	para.setAttribute('class','para success');
	compareButton.setAttribute('disabled','disabled');
}

function allrestart(){
	num=Math.floor(Math.random()*100+1);//重新生成随机数
	console.log(num);
	compareCount=0;//计数器归零
	textContent="";
	myLabel.textContent="";
	numlist.textContent="";
	para.textContent="";
	hint.textContent="";
	compareButton.removeAttribute("disabled");
	document.body.removeChild(restart);
}
