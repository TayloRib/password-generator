//possible password character variables
var smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var largeLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "@", "#", "$", "%", "^", "*", "+", "="];


//Holder Array for included character values
var storage = [];
var passwordVal = '';
var newPassword = [];

function promptMe() {
  let userLength = prompt("How many characters should the Password be?");
    if (!isNaN(userLength)) { 
      if (userLength >= 8 && userLength <= 128) {
        let uppercase = confirm("Add Uppercase letters?"); {
          if (uppercase) {
            storage = storage.concat(largeLetters);
          }
        }
        let lowercase = confirm("Add Lowercase letters?"); {
          if (lowercase) {
            storage = storage.concat(smallLetters);
          } 
        }
        let addnumbers = confirm("Add Numbers?"); {
          if (addnumbers) {
            storage = storage.concat(numbers);
          } 
        }
        let addsymbols= confirm("Add Symbols?"); {
          if (addsymbols) {
            storage = storage.concat(symbols);
          }
        }     
        } else alert("Password Length must be between 8 and 128 characters.");
      } else alert("Please enter a password length using numbers between 8 and 128."); 
    
      for ( var i = 0; i < userLength; i++){
        let passwordVal = storage[Math.floor(Math.random() * storage.length)];
        newPassword.push(passwordVal);
        console.log(passwordVal);
      }
    }

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = newPassword.join("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
