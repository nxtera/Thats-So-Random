/*  Pseudo Code
1. Prompt the user for the password criteria
   a. Password length between 8 and 128.
   b. Lowercase, uppercase, numbers, special characters.
       1. Create arrays with these criteria.
2. Validate the input.
3. Generate the password.
4. Display generated password on the page.
*/

var characterLength = 8;

// Store all possible letters, symbols and numbers into their own arrays
var lowerCArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolArr = ["!", "£", "$", "%", "&", "*", "-", "="];

// Declare global variables
var passwordLength = 0;
var includelc = false;
var includeuc = false;
var includenum = false;
var includesym = false;
var possibleCharacters;

// Assignment Code
// Targets red generate password button. 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// store generated password into password variable
function writePassword() {
  var password = generatePassword();
  console.log("password = ", password);
  var passwordText = document.querySelector("#password");

  // Displays password onto the screen
  passwordText.value = password;

}

// Add event listener to generate password button. When a user clicks generate button it will call writePassword function.
generateBtn.addEventListener("click", writePassword);


// Generator functions. 
function generatePassword() {
  var password = "";
  console.log("Test. Did the button work?");
  promptUser();
  console.log("passwordLength = ", passwordLength);

  // for loop to generate enough characters to meet password length 
  for (var i = 0; i < passwordLength; i++) {
    password = password + possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
    console.log("password = ", password);
  }
  return password;
}


// Validating user input
function promptUser() {
  passwordLength = parseInt(window.prompt("Please give a number between 8 and 128"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128. Please try again");
    promptUser();
  }
  console.log("passwordLength = ", passwordLength)

 possibleCharacters = [];
  // Get password criteria
  includelc = window.confirm("Click OK to use lowercase characters in password");
  if (includelc) {
    possibleCharacters = possibleCharacters.concat(lowerCArr);
    console.log("possibleCharacters = ", possibleCharacters)
  }

  includeuc = window.confirm("Click OK to use uppercase characters in password");
  if (includeuc) {
    possibleCharacters = possibleCharacters.concat(upperCArr);
    console.log("possibleCharacters = ", possibleCharacters);
  }

  includenum = window.confirm("Click OK to use numbers in password");
  if (includenum) {
    possibleCharacters = possibleCharacters.concat(numbersArr);
    console.log("possibleCharacters = ", possibleCharacters)
  }

  includesym = window.confirm("Click OK to use symbols in password");
  if (includesym) {
    possibleCharacters = possibleCharacters.concat(symbolArr);
    console.log("possibleCharacters = ", possibleCharacters)
  }

  if (includelc === false && includeuc === false && includesym === false && includenum === false) {

    alert("At least one character type should be chosen. Please try again");
    promptUser();


  }











}


