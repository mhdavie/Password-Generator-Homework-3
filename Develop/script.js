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

//declare variables 

var enter;
var numberConfirm;
var symbolConfirm;
var uppercaseConfirm;
var lowercaseConfirm;


symbol= ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

letters2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


var userchoices;

function generatePassword(){

  enter =parseInt(prompt("Enter amount of characters desired in your password. Choose between 8 and 128"))


if (!enter) {
  alert("Please choose a number");
} else if (enter < 8 || enter > 128) {

enter = parseInt(prompt("You must choose between 8 and 128")); 
}
  else{

    numberConfirm = confirm("Would you like numbers in your password?");
    symbolConfirm = confirm("Would you like special charecters in your password?");
    uppercaseConfirm = confirm("Would you like Upercase letters in your password?");
    lowercaseConfirm = confirm("Would you like lowercase letters in your password?");
};


 // Else if for 4 negative choices
 if (!numberConfirm && !symbolConfirm && !uppercaseConfirm&& !lowercaseConfirm) {
  userchoices = alert("You need to chose at least one criteria");
 }
 
 //else if for 4 positives choices
 else if( numberConfirm && symbolConfirm && uppercaseConfirm && lowercaseConfirm){
    userchoices = symbol.concat(number, letters, letters2);
}

//else if for 3 positives choices
  else if( numberConfirm && symbolConfirm && uppercaseConfirm){ 
  userchoices = number.concat (symbol, letters2);
}
  else if( numberConfirm && symbolConfirm && lowercaseConfirm){
    userchoices = number.concat(symbol, letters);
  }
  else if( numberConfirm && lowercaseConfirm && uppercaseConfirm){
    userchoices = number.concat(letters, letters2);
  }
  else if ( lowercaseConfirm && uppercaseConfirm && symbolConfirm){
   userchoices = letters.concat(letters2,symbol);
}

//else if 2 positves choices

 else if (numberConfirm && symbolConfirm){
  userchoices = number.concat(symbol);
 }
 else if ( numberConfirm && uppercaseConfirm){
   userchoices = number.concat( letters2);
 }
else if ( numberConfirm && lowercaseConfirm){
   userchoices = number.concat (letters);
}
else if (symbolConfirm && uppercaseConfirm){
   userchoices = symbol.concat (letters2);
}
else if( symbolConfirm & lowercaseConfirm){
  userchoices = symbol.concat(letters);
}
else if( lowercaseConfirm && uppercaseConfirm){
 userchoices = letters.concat(letters2);
}

//else if 1 positive choice

else if (symbolConfirm){
  userchoices = symbol;
}
else if (numberConfirm){
  userchoices = number;
}
else if( uppercaseConfirm){
 userchoices = letters2;
}
else if (lowercaseConfirm){
userchoices = letters;
}


var password = [];

for (var i=0; i < enter; i++){
  var pickChoices = userchoices[Math.floor(Math.random() *userchoices.lenght)];
  password.push(pickChoices);
} 

}
