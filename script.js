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

// Define variables 

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

// Function - Get random element from an array
function getRandom(arr) {
	var randIndex = Math.floor(Math.random() * arr.length);
	var randElement = arr[randIndex];

	console.log(randElement);
	return randElement;
}

// Function = Generate password when button is clicked

function generatePassword() {
	var parameters = getPasswordParameters();

	var workingPassword = [];

	var possibleParameters = [];

	var requiredParameters = [];

	// determine which characters are going to be part of generated password

	if (parameters.includeLowercase) {
		possibleParameters = possibleParameters.concat(lowercaseArray);
		requiredParameters.push(getRandom(lowercaseArray));
	}

	if (parameters.includeUppercase) {
		possibleParameters = possibleParameters.concat(uppercaseArray);
		requiredParameters.push(getRandom(uppercaseArray));
	}

	if (parameters.includeNumericCharacter) {
		possibleParameters = possibleParameters.concat(numericCharacterArray);
		requiredParameters.push(getRandom(numericCharacterArray));
	}

	if (parameters.includeSpecialCharacter) {
		possibleParameters = possibleParameters.concat(specialCharacterArray);
		requiredParameters.push(getRandom(specialCharacterArray));
	}
	
	// for loop 1
	for (var i = 0; i < parameters.length; i++) {
		var possibleParameter = getRandom(possibleParameters);

		workingPassword.push(possibleParameter);
	}
	
	// for loop 2 
	for (var i = 0; i < requiredParameters.length; i++) {
		workingPassword[i] = requiredParameters[i];
	}

	// Convert workingPassword into a string and generatePassword

	return workingPassword.join(", ");
}

