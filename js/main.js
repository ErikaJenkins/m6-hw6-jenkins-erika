
var myButtonRed = document.getElementById('myBtnRed');
var myButtonBlue = document.getElementById('myBtnBlue');
var myButtonGreen = document.getElementById('myBtnGreen');

var myButtonHover = document.querySelectorAll('button');

var myRedMessage = document.querySelector('.myRedMessage');
var myBlueMessage = document.querySelector('.myBlueMessage');
var myGreenMessage = document.querySelector('.myGreenMessage');

var myStartPlaceHolder = document.getElementById('startover');

//this creates a button using javascript
var myStartButton = document.createElement('button');

//this creates what your button will output
var myStartButtonText = document.createTextNode('Start Over');

myStartButton.appendChild(myStartButtonText);



function toggleRedQuote() {
  myRedMessage.classList.toggle('show-myRedMessage');
  myStartPlaceHolder.appendChild(myStartButton);
};

function toggleBlueQuote() {
  myBlueMessage.classList.toggle('show-myBlueMessage');
  myStartPlaceHolder.appendChild(myStartButton);
};

function toggleGreenQuote() {
  myGreenMessage.classList.toggle('show-myGreenMessage');
  myStartPlaceHolder.appendChild(myStartButton);
};

function toggleColorAll() {
  for(i=0; i<myButtonHover.length; i++){
    myButtonHover[i].classList.toggle('myColorAll');
  }

}

//initialize i, set a condition for i, then increament i each time
for(i=0; i<myButtonHover.length; i++){
  myButtonHover[i].addEventListener('mouseenter', toggleColorAll);
  myButtonHover[i].addEventListener('mouseleave', toggleColorAll);
}

myButtonRed.addEventListener('click', toggleRedQuote);
myButtonBlue.addEventListener('click', toggleBlueQuote);
myButtonGreen.addEventListener('click', toggleGreenQuote);
