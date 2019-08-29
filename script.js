function playsound(e) {
	const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
	const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
	const w = window.innerWidth;

	if (audio && w > 1224) {
		audio.currentTime = 0; // rewind the starting time/ keep pressing = keep starting the sound
		audio.play();
		key.classList.add("playing");
	} else !audio;
	return; //if no audio return nothing/stop the function
}

const keys = document.querySelectorAll(".key");
function removeTransitions(e) {
	if (e.propertyName !== "transform") return;
	this.classList.remove("playing");
}
keys.forEach(key => key.addEventListener("transitionend", removeTransitions));

window.addEventListener("keydown", playsound);
