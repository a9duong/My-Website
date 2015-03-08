(function() {
	//Game Variables
		var mysteryNumber = Math.floor(Math.random() * 100);
		console.log(mysteryNumber);
		var playersGuess = 0;
		var guessesRemaining = 10;
		var guessesMade = 0;
		var gameState = "";
		var gameWon = false;
		
		//The input and output fields
		var input = document.querySelector("#input");
		var output = document.querySelector("#output");
		
		//The Button
		var button = document.querySelector("button");
		button.addEventListener("click", clickHandler, false);
		button.style.cursor="pointer";
		
		//The arrow
		var arrow = document.querySelector("#arrow");
		
		function render() {
		//Position the arrow
		//Multiply the players guess by 3 to get the correct pixel position on the scale
		arrow.style.left = playersGuess * 3 - 7 + "px";
		} 
		
		window.addEventListener("keydown", keydownHandler, false);
		
		function keydownHandler(event){
			if(event.keyCode === 13){
				validateInput();
			}
		}
		
		function clickHandler() {
			validateInput();
		}
		
		function validateInput(){
			playersGuess = parseInt(input.value);
			
			if(isNaN(playersGuess)) {
				output.innerHTML = "Please enter a number.";
			} else {
				playGame();
			}
		}
		
		function playGame() {
			guessesRemaining--;
			guessesMade++;
			gameState = " Guess: " + guessesMade + ", Remaining: " + guessesRemaining;
			
			if (playersGuess > mysteryNumber) {
				output.innerHTML = "That's too high." + gameState;
				if (guessesRemaining < 1) {
					endGame();
				}
			} else if(playersGuess < mysteryNumber){
				output.innerHTML = "That's too low." + gameState;
				if (guessesRemaining < 1) {
					endGame();
				}
			} else if (playersGuess === mysteryNumber) {
				gameWon = true;
				endGame();
			}
			
			//Update the graphic display
			render();
		}
		
		function endGame(){
			if (gameWon){
				if (guessesMade > 1){
				output.innerHTML = "Yes, it's " + mysteryNumber + "!" + "<br>" + "It only took you " + guessesMade + " guesses.";
				} else {
					output.innerHTML = "Yes, it's " + mysteryNumber + "!" + "<br>" + "It only took you " + guessesMade + " guess.";
				}
			} else {
				output.innerHTML = "No more guesses left!" + "<br>" + "The number was: " + mysteryNumber + ".";
			}
			alert("G3t a Lyfe scrub and stop playing guessing g4mes lelelelelelel danny es numero uno brian sucks");
			
			//Disable the button
			button.removeEventListener("click", clickHandler, false);
			button.disabled = true;
			
			//Disable the enter keyCode
			window.removeEventListener("keydown", keydownHandler, false);
			
			//Disable the input field
			input.disabled = true;
		}
		
} ());