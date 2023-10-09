console.log("Hello");
let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("inputElement");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
  let guessedNumber = parseInt(userInput.value);
  if (guessedNumber > randomNumber) {
    gameResult.textContent = "Too High ! Try Again!!";
    gameResult.style.backgroundColor = "#1e217c";
  } else if (guessedNumber < randomNumber) {
    gameResult.textContent = "Too Low ! Try Again!!";
    gameResult.style.backgroundColor = "#1e217c";
  } else if (guessedNumber === randomNumber) {
    gameResult.textContent = "Congratulations! You got it Right!";
    gameResult.style.backgroundColor = "green";
  } else {
    gameResult.textContent = "Please provide a valid user input";
    gameResult.style.backgroundColor = "red";
  }
}
