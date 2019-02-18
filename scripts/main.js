var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Aaron.jpg') {
		myImage.setAttribute ('src','images/Aaron2.jpg');
} else {
myImage.setAttribute ('src', 'images/Aaron.jpg')
}
}

var myButton = document.getElementById("User");
var myHeading = document.querySelector('h1');


function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'My Name is ' + myName + ' Welcome to My Crazy Life';
}
	if(!localStorage.getItem('name')) {
  setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'My Name is ' + storedName + ' Welcome to My Crazy Life'; 
}

	myButton.onclick = function() {
  setUserName();

}
if(storedName = "Fooey Evans"){
	myImage.setAttribute('src', 'images/Fooey.jpg')
}
