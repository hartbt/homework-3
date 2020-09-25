// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// } 



var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9","0"]
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

function getCriteria() {

  var confirmLength = prompt("How long would you like your password to be be? Between 8 and 128")
  var confirmUpper = prompt("What uppercase character would you like?")

      var upper =  uppers [uppers.indexOf(confirmUpper)]
      array.push(upper)

    var confirmLower = prompt("What lowercase letter would you like?")

      var lower = lowers [lowers.indexOf(confirmLower)]
      array.push(lower)

    var confirmSpecial = prompt("What special character would you like?")
    
      var special = specials [specials.indexOf(confirmSpecial)]
      array.push(special)


    var confirmNumber = prompt("What number would you like?")
      
      var number = numbers [numbers.indexOf(confirmNumber)]
      array.push(number)
      
      console.log(array)
      
      console.log(confirmLength)
      console.log(upper)
      console.log(lower)
      console.log(special)
      console.log(number)

  if (+confirmLength > 8 || +confirmLength < 128) {

   
  } 




}
var array = []




// Add event listener to generate button
generateBtn.addEventListener("click", getCriteria);
