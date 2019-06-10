
function music(event){
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const box = document.querySelector(`.box[data-key="${event.keyCode}"]`); 
	if(!audio){ 
		return; 
	}	// This stops the function if there is no audio
	audio.currentTime = (0); // 
	audio.play();
	box.classList.add('current');
	};

function removeTransition(event){
	this.classList.remove('current');
};


const keys = document.querySelectorAll('.box');
keys.forEach(keys => keys.addEventListener('transitionend', removeTransition));


window.addEventListener('keydown', music);  // This listens for any key down in the window





/* Above
- Listens for any key down in the window using the event listener function.
	It then passes this into the function via the 'event' argument.

- Const audio looks through all 'audio' elements in my HTML using querySelector
 and finds the one thats data key attribute matches the keycode entered.
 FIND OUT IN DETAIL HOW THE SYNTAX IN THIS LINE WORKS 

 - The If statement then checks if there is any audio or not and if there is no audio it returns (ends the function)
 as it is not needed.

 - before any sound happens, the function resets the current time of the audio to 0, this ensures the audio plays from the begining
 every time the key is pressed.

 - The next line simply plays the relevant audio

 - The function then adds a class to the relevant box that was selected via the keydown.

 - removeTransition function removes the class given to the element highlighted by the Key down, 

 */






