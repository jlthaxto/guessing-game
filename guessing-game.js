/* 
Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".
In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.
*/


const input = document.getElementsByTagName('input')[0];
const submitButton = document.getElementById('submit-button');
const listItems = document.getElementsByTagName('li');
let listItemIdx = 0;

let hint = alert;

// const playAgainButton = document.getElementById('submit-button');
// const submitButton = document.getElementById('playAgain-button');


let winningNumber = Math.ceil(Math.random() * 100);

var guesses= 0;



function checkGuess () {
  let guess = Number(document.getElementbyId("test").value);
  if (input == winningNumber) {
  alert (`You guessed right ,  it was${winningNumber}`);
} 
// else if (input == wrongGuesses) {
//   const newLocal = document.getElementById("hint").innerHTML =
//       "Hint: You guessed wrong. Try another number!";
// }
else if (input>winningNumber){
  document.getElementById("hint").innerHTML=
  "Hint: Your guess was too big! Try a smaller number.";
}
  else if (input<winningNumber){
    document.getElementById("hint").innerHTML=
    "Hint: Your guess was too small! Try a bigger number.";
}
  else {
    document.getElementById("hint").innerHTML =
     "That's not a number!";
  }
  };


// submitButton.addEventListener ('click', checkInput);
// playAgainButton.addEventListener ('click', function (){
//   const guess = parseInt (userInput.value);
//   validateGuess(guess);
// })

submitButton.addEventListener('click', function(event) {
  // event.preventDefault keeps page from refreshing
  event.preventDefault();
  
  // event.target gives access to the target node where the event occurred 
  
  // element.value will give us the current value of that element (looking at the input element = input.value)
  
  listItems[listItemIdx].innerText = input.value;
  
  listItemIdx++;
  
  const guess = parseInt(input.value)
  const li = [];


  
  if (winningNumber === guess) {
    
  }
  console.log(winningNumber);
  
});

submitButton.addEventListener("click", onsubmit);






// function playAgain() {
//   high = 100;
//   low = 1;
//   count = 0;
//   playAgain();

// }

// object.onclick = function(){"submit-guess"};
// object.onclick = function(){"play-again"};
// object.onclick = function(){"hint-button"};

// submitButton.addEventListener("click", function(checkGuess) {
//   // event.preventDefault keeps page from refreshing
//   if (checkGuess.key === "return") {
//   checkGuess.preventDefault();
//   document.getElementById("myBtn").click();
//   }
// })
  
  // event.target gives access to the target node where the event occurred 
  
  // element.value will give us the current value of that element (looking at the input element = input.value)
  
//   listItems[listItemIdx].innerText = input.value;
  
//   listItemIdx++;
  
//   const guess = parseInt(input.value)
  
//   if (winningNumber === guess) {
    
//   }
//   console.log(winningNumber)
  
// })

