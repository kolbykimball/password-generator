// establish variables 

var passwordLength = 8;
var possibleChoices = [];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?'];

var generateBtn = document.querySelector("#generate");

// add eventlistenter 
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var passwordText = document.querySelector("#password");
  var promptAnswers = prompts();

  if (promptAnswers) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}


function generatePassword() {
  var newPassword = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleChoices.length);
    newPassword = newPassword + possibleChoices[randomIndex];
  }
  return newPassword;
}


function prompts() {

  passwordLength = parseInt(prompt("How long do you want your password to be? (8-128 characters)"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Must be a number between 8 and 128 digits. Try again.");
    return false;
  }
  if (confirm("Do you want any numbers in your password?")) {
    possibleChoices = possibleChoices.concat(numbers);
  }
  if (confirm("Do you want any special characters in your password?")) {
    possibleChoices = possibleChoices.concat(specialCharacters);
  }
  if (confirm("Do you want any uppercase letters in your password?")) {
    possibleChoices = possibleChoices.concat(upperCase);
  }
  if (confirm("Do you want any lowercase letters in your password?")) {
    possibleChoices = possibleChoices.concat(lowerCase);
  }
  return true;
}