var boxOne = document.getElementById('box-one');
var boxTwo = document.getElementById('box-two');
var boxThree = document.getElementById('box-three');
var boxFour = document.getElementById('box-four');
var boxFive = document.getElementById('box-five');
var boxSix = document.getElementById('box-six');
var boxSeven = document.getElementById('box-seven');
var boxEight = document.getElementById('box-eight');
var boxNine = document.getElementById('box-nine');

var kick = document.getElementById('kick');
var snare = document.getElementById('snare');
var rim = document.getElementById('rim');
var clap = document.getElementById('clap');
var hiHat = document.getElementById('hi-hat');
var clsHat = document.getElementById('cls-hat');
var tom = document.getElementById('tom');
var crash = document.getElementById('crash');
var ride = document.getElementById('ride');


function drumKit(){

function soundskick(){
window.addEventListener('keydown',function(e){
	if(e.keyCode==65){
		if(kick.paused){
			kick.play();
			}
		else{
		kick.currentTime = 0;
			}
	}
	});
};

soundskick();

function soundssnare(){
window.addEventListener('keydown',function(e){
	if(e.keyCode==83){
		if(snare.paused){
			snare.play();
			}
		else{
		snare.currentTime = 0;
			}
	}
	});
};

soundssnare();

function soundsclap(){
window.addEventListener('keydown',function(e){
	if(e.keyCode==70){
		if(clap.paused){
			clap.play();
			}
		else{
		clap.currentTime = 0;
			}
	}
	});
};

soundsclap();

function soundsclshat(){
window.addEventListener('keydown',function(e){
	if(e.keyCode==71){
		if(clsHat.paused){
			clsHat.play();
			}
		else{
		clsHat.currentTime = 0;
			}
	}
	});
};

soundsclshat();

function soundsshat(){
window.addEventListener('keydown',function(e){
	if(e.keyCode==72){
		if(hiHat.paused){
			hiHat.play();
			}
		else{
		hiHat.currentTime = 0;
			}
	}
	});
};

soundsshat();


boxOne.addEventListener('click',function(){
	if(kick.paused){
	kick.play();
	}
	else{
	kick.currentTime = 0;
	}
	});


boxTwo.addEventListener('click',function(){
	if(snare.paused){
	snare.play();
	}
	else{
	snare.currentTime = 0;
	}
	});

boxThree.addEventListener('click',function(){
	if(rim.paused){
	rim.play();
	}
	else{
	rim.currentTime = 0;
	}
	});

boxFour.addEventListener('click',function(){
	if(clap.paused){
	clap.play();
	}
	else{
	clap.currentTime = 0;
	}
	});

boxFive.addEventListener('click',function(){
	if(hiHat.paused){
	hiHat.play();
	}
	else{
	hiHat.currentTime = 0;
	}
	});

boxSix.addEventListener('click',function(){
	if(clsHat.paused){
	clsHat.play();
	}
	else{
	clsHat.currentTime = 0;
	}
	});

boxSeven.addEventListener('click',function(){
	if(tom.paused){
	tom.play();
	}
	else{
	tom.currentTime = 0;
	}
	});

boxEight.addEventListener('click',function(){
	if(crash.paused){
	crash.play();
	}
	else{
	crash.currentTime = 0;
	}
	});

};

drumKit();


//VOLUMESLIDER
var volumeslider = document.getElementById('volumeslider');
var volumevalue = document.getElementById('volumevalue');

/* volume displayed upon loading*/
volumevalue.innerHTML = 'Disco';	

/* volume changes when slider dragged*/
volumeslider.addEventListener('input',function (){
 	volumevalue.innerHTML = this.value; 
 	if(volumevalue.innerHTML == 0){
		volumevalue.innerHTML = 'Rock'; 
		volumevalue.style.background = 'red';
	}
	else if(volumevalue.innerHTML == 30){
		volumevalue.innerHTML = 'Disco'; 
		volumevalue.style.background = 'green';
	}
	else if(volumevalue.innerHTML == 60){
		volumevalue.innerHTML = 'House';
		volumevalue.style.background = 'blue'; 
	}
	else{
		volumevalue.innerHTML = 'Rap'; 
		volumevalue.style.background = 'orange';
	}
});








