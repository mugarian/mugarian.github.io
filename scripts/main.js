let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === './images/1.jpg') {
		myImage.setAttribute('src', './images/2.jpg');		
	} else {
		myImage.setAttribute('src', './images/1.jpg');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername() {
	let myName = prompt('please enter your name.');
	if(!myName) {
		setUsername();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Mozilla is cool, ' + myName;		
	}
}

if(!localStorage.getItem('name')) {
	setUsername();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
   
myButton.onclick = function() {
	setUsername();
}