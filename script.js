// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//Define variables 

var passwordLength

//Define arrays for data

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numericCharArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 
var specialCharArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

//Store input from buttons

var lowercaseInput
var uppercaseInput
var numericCharInput
var specialCharInput

// random number for loop

var randomNumber

// define function for generating random number 0-3

function randomNumberGenerator() {
	randomNumber = Math.floor(Math.random() * 4)
	console.log(randomNumber)
}


// loop for generating password characters. 

For (var i = 0; i < passwordLength; i++) {
	// run random number generator
	randomNumberGenerator()

	// if random number is 0, create upper case

	if (randomNumber === 0) {
		uppercaseInput = Math.floor(Math.random() * uppercaseArray.length)
		
	}
	
	
	// if random number is 1, create upper case
	
	
	// if random number is 2, create number
	
	
	// if random number is 3, create special character

	
	// add selected character to passwordoutput string

}