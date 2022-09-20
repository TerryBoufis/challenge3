// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = ""
var choiceArr =[];

var symbols = ['!','@','#','$','%','^','&','*'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];

var options =[];


// if (userWantsNumbers === true) {
//     options.push(numbers)
// }

// if (userWantsSymbols === true) {
//     options.push(symbols)
// }

// if (userWantsLowerCase === true) {
//     options.push(lowerCase)
// }

// if (userWantsUpperCase === true) {
//     options.push(upperCase)
// }

// if (options.length === 0) {
//     options.push(lowerCase)
// }



function getPrompts(){
    passwordLength = parseInt(prompt(" Please enter password"));

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        window.alert("Password length must be between 8 and 128 characters");
        return false;
}       

    if (confirm("lowercase")) {
        choiceArr = choiceArr.concat(lowerCase);
    }

    if (confirm("uppercase")) {
        choiceArr = choiceArr.concat(upperCase);
    }
      
    if (confirm("Numbers")) {
        choiceArr = choiceArr.concat(numbers);
    }
    
    if (confirm("Symbols")) {
        choiceArr = choiceArr.concat(symbols);
    }
    return true;
}


function generatePassword() {
    var password = "";
    getPrompts();
    for (var i = 0; i < passwordLength; i++) {
         var randomIndex = Math.floor(Math.random() * choiceArr.length);
         password = password + choiceArr[randomIndex];
    }
    return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
