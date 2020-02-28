
//Define Variables, set parameters  
var chars = ''
var upChars = "ABCDEFGHIJKLMNOPQURSTUVWXYZ"
var lowChars = "abcdefghijklmnopqrstuvwxyz"
var numChars = "0123456789"
var speChars = "!@#$%^&*?/"
var passArry = [""]
var nullVal = [""]

var passLength = prompt("Choose password length between 8-128 characters.");
if (passLength >= 8 && passLength <= 128) {
    var uppCase = confirm("Include uppercase characters?");
    var lowCase = confirm("Include lowercase characters?");
    var numCase = confirm("Include numerical characters?");
    var speCase = confirm("Include special characters:'!,@,#,$,%,^,&,*,?,/'?");
}
else {
    alert("Insufficient Value.");
}

// Change variables to strings
if (uppCase) {
    chars+= upChars
}

if (lowCase) {
    chars += lowChars
}

// Create numeric and special character elements
if (numCase) {
    chars += numChars
}

if (speCase) {
    chars += speChars
}


//String Concat and trim Function

//function strConcat() {
// var conString = upperString.concat(
//  lowerString,
// numberString,
// specialString
// );
//}
//String Randomize Function
function createPass() {
    var result = '';
    // var conString = upperString.concat(
    //     lowerString,
    //     numberString,
    //     specialString
    // );
    // var conStringLength = conString.length
    for (var i = 0; i < Number(passLength); i++) {
        result += chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }
    console.log(result)

    return result;
}

//   // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = createPass();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
