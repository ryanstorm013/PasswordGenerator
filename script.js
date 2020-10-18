// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if(!password) {
    document.getElementById("password").style.color = "gray";
    password = "Your Secure Password";
    passwordText.value = password;
  }
  else {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Note: Global Varibles
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s"];
var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S"];
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["@", "$", "!", "(", "^"];

function generatePassword() {
  
  var arrayVar = [];

  var chosenLength = parseInt(prompt("How many characters for your password? (8-120 Char):"));

  if(chosenLength < 8 || chosenLength > 120 || isNaN(chosenLength)) {
    alert("Does not compute, please set a number from 8-120 and make sure there are no characters.");
  }
  else {
    var letterChar = confirm("Do you need Letters?");
    var letterUppercase = confirm("Need any Uppercase?");
    var number = confirm("Need any numbers?");
    var special = confirm("Need any special characters?");

    if(letterChar)
      arrayVar.push(letters);

    if(letterUppercase)
      arrayVar.push(upperLetter);
    
    
    if(number)
      arrayVar.push(nums);
    
    if(special)
      arrayVar.push(specialChar);
    
    var pass = ""; 

    while (pass.length < chosenLength) {
      for(let i = 0; i < arrayVar.length; i++) {
        if(pass.length < chosenLength) {
          let randNum = Math.floor(Math.random() * arrayVar[i].length);
          pass += arrayVar[i][randNum];
        }
      }
    }
      console.log(pass);
  }

  return pass;
  
}

