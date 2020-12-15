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

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericCharacterArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
var specialCharacterArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Function to prompt for password parameters

function getPasswordParameters() {
	var passwordLength = parseInt(
		prompt("How many characters?")
	);

	// confirm that passwordLength is a number

	if (isNaN(passwordLength) === true ) {
		alert("Must be a number.");
		return;
	}

	if (passwordLength < 8) {
		alert("Password must be at least 8 characters.")
		return;
	}

	if (passwordLength > 128) {
		alert("Password may not be more than 128 characters.")
		return;
	}

	//Store password parameters from prompts

	var includeLowercase = confirm(
		"Click OK to include lowercase characters."
	);

	var includeUppercase = confirm(
		"Click OK to include uppercase characters."
	);
	var includeNumericCharacter = confirm(
		"Click OK to include numeric characters."
	);
	var includeSpecialCharacter = confirm(
		"Click OK to include special characters."
	);

	// Ensure input contains at least one necessary parameter

	if (
		includeLowercase === false &&
		includeUppercase === false && 
		includeNumericCharacter === false &&
		includeSpecialCharacter === false
	) {
		alert("Must choose at least one parameter.");
		return;
	}

	// Store selected parameters

	var passwordParameters = {
		passwordLength: passwordLength,
		includeLowercase: includeLowercase,
		includeUppercase: includeUppercase,
		includeNumericCharacter: includeNumericCharacter,
		includeSpecialCharacter: includeSpecialCharacter,
	};

	console.log(passwordParameters);
	return passwordParameters;
}




// variables for generated characters

var lowercaseCharacter
var uppercaseCharacter
var numericCharacter
var specialCharacter

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

	// if random number is 0, get upper case character from array

	if (randomNumber === 0) {
		uppercaseCharacter = uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)];
		// test if working
		console.log("Generated UC =" + uppercaseCharacter)
	}
	
	// if random number is 1, get lower case character from array
		else if (randomNumber === 1) {
			lowercaseCharacter = lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)];
			// test if working
			console.log("Generated LC =" + lowercaseCharacter)
		}	 
	
	// if random number is 2, get numeric character from array
		else if (randomNumber === 2) {
			numericCharacter = numericCharArray[Math.floor(Math.random() * numericCharArray.length)];
			// test if working
			console.log("Generated NC =" + numericCharacter)
		}
	
	// if random number is 3, get special character from array
		else if (randomNumber === 3) {
			specialCharacter = specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
			// test if working
			console.log("Generated SC =" + specialCharacter)
		}
	
	// add selected character to passwordoutput string



}