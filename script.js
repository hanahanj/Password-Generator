// Assignment code here



// When I click the gnerate password button it opens a series of prompts
// prompt 1 asks how long I want the password to be
// Prompt 2 asks if I want to use lowercase letters
// prompt 3 asks if i want to use uppercase letters
// prompt 4 asks if i want to use numbers 
// propt 5 asks if I want to use special characters

// based on those responses a random number generator is used to chose random items from each of the arrays 

// then assemble them into a new String

// then log them to the password ID in the html 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Set lowercase Array
let low = 'abcdefghijklmnopqrstuvwxyz';
let lowArray = low.split("");

console.log("lowArray =" + lowArray);

// Set uppercase Array
let high = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let highArray = high.split("");

console.log("highArray =" + highArray);

// Set number Array
let num = '0123456789';
let numArray = num.split("");

console.log("numArray =" + numArray);

// Set number Array
let spec = ' !#$%&()*+,-.:;<>?@[]/^_{}~';
let specArray = spec.split("");

console.log("specArray =" + specArray);

// On load use prompts to generate password components 

length = window.prompt("How long do you want your password to be", "1 to 128 characters");
console.log("length = " + length);
lowercase = window.prompt("Do you want to use lowercase characters", "Yes or No?");
console.log("lowercase = " + lowercase);
uppercase = window.prompt("Do you want to use uppercase characters", "Yes or No?")
console.log("uppercase = " + uppercase);
numbers = window.prompt("Do you want to use numbers", "Yes or No?");
console.log("numbers = " + numbers);
special = window.prompt("Do you want to use special characters", "Yes or No?");
console.log("special characters = " + special);


if (lowercase && uppercase && numbers && special == 'yes'){

var charArray = lowArray.concat(highArray, numArray, specArray);

}

console.log(charArray);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
