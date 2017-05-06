var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');


function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

function result(){
	var man=['Willy the Goblin','Big Daddy','Father Christmas'],
		place=['the soup kitchen','Disneyland','the White House'],
		action=['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];
	if (customName.value!='') {
		var name=customName.value;
	}else{
		var name='Somebody';
	}
	if(document.getElementById('us').checked){
		var tempureture='94 farenheit',
			weight="300 pounds";
	}else{
		var tempureture='34 centigrade',
			weight='21 stone';
	}
	var who=randomValueFromArray(man),
		where=randomValueFromArray(place),
		what=randomValueFromArray(action);
	var storyContent="It was "+tempureture+' outside, so '+who+' went for a walk. When they got to '+where+', they stared in horror for a few moments, then '+what+'. '+name+' saw the whole thing, but he was not surprised — '+who+' weighs '+weight+', and it was a hot day.';
	story.textContent=storyContent;
	customName.value="";
	customName.focus();
	story.style.visibility = 'visible';
}

randomize.addEventListener('click',result);


