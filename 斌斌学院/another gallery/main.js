function addLoadEvent(func){
	var oldLoad=window.onload;
	if(typeof oldLoad!='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldLoad();
			func();
		}
	}
}

function prepareGallery(){
	if(!document.getElementById||!document.getElementsByTagName){
		return false;
	}
	if(!document.getElementById('imagegallery')){
		return false;
	}
	var gallery=document.getElementById('imagegallery');
	var links=gallery.getElementsByTagName('a');
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			return showPic(this);
		}
	}
}

addLoadEvent(prepareGallery);

function preparePlaceholder(){
	if(!document.getElementById||!document.getElementsByTagName){
		return false;
	}
	if(!document.createElement){
		return false;
	}
	if(!document.insertBefore){
		return false;
	}
	var placeholder=document.createElement('img');
	placeholder.setAttribute('id','placeholder');
	placeholder.setAttribute('alt','here shows the picture');
	if(!document.getElementById('imagegallery')){
		return false;
	}else{
		var imagegallery=document.getElementById('imagegallery');
	}
	insertAfter(placeholder,imagegallery);
	var description=document.createElement('p');
	description.setAttribute('id','picTitle');
	var titleText=document.createTextNode('choose a picture');
	description.appendChild(titleText);
	insertAfter(description,placeholder);
}

addLoadEvent(preparePlaceholder);
function showPic(whichPic){
	var source=whichPic.getAttribute('href');
	var placeholder=document.getElementById('placeholder');
	placeholder.setAttribute('src',source);
	var titleText=document.getElementById('picTitle');
	if(whichPic.getAttribute('title')){
		titleText.firstChild.nodeValue=whichPic.getAttribute('title');
	}else{
		titleText.firstChild.nodeValue="";
	}
	//var titleText=whichPic.getAttribute('title')?which.getAttribute('title'):"";
	return false;
}

function countBodyChildren(){
	var body=document.body;
	console.log(body.childNodes.length);
}

//addLoadEvent(countBodyChildren);
function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(targetElement==parent.lastChild){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

var body=document.body;
var p=document.createElement('p');
var txt=document.createTextNode('hello world');
p.appendChild(txt);
body.appendChild(p);
p.innerHTML="<p>hello hello world</p>";