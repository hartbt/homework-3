



var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"]
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9","0"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

function getCriteria() {

  var confirmLength = prompt("How long would you like your password to be be? Between 8 and 128")
  if (confirmLength < 8 || confirmLength > 128) {
    alert("Please choose a number between 8 and 128.")
    return   
  }
  if (isNaN(confirmLength) == true){
    alert("Password length must be a number.")
  }
  
  var confirmUpper = confirm("Would you like your password to conatin upper case characters?")

  var confirmLower = confirm("Would you like your password to contain lower case characters?")

  var confirmSpecial = prompt("Would you like your password to contain special characters?")
    
  var confirmNumber = confirm("Would you like your password to contain numbers?")

  if (confirmUpper === false && confirmLower === false && confirmSpecial === false && confirmNumber === false) {
    alert("One parameter must be chosen.")
    return
  }

  var passwordOptions = {
    confirmLength,
    confirmUpper,
    confirmLower,
    confirmSpecial,
    confirmNumber
  }
  return passwordOptions
}

function randomFunction(arr) {
  var randomIndex = Math.floor(Math.random() * arr.Length)
  var randomElement = arr[randomIndex]
  return randomElement
}

function generatePassword() {
  var options = getCriteria()
  var results = []
  var possibleChar = []
  var guaranteed = []
  if (options.confirmSpecial === true) {
    possibleChar = possibleChar.concat(special),
    guaranteedChar.push(randomFuntion(special))
  }
  if (options.confirmUpper === true) {
    possibleChar = possibleChar.concat(upper),
    guaranteedChar.push(randomFunction(upper))
  }
  if (options.confirmLower === true) {
    possibleChar = possibleChar.concat(lower)
    guaranteedChar.push(randomFunction(lower))
  }
  if (options.confirmNumber === true) {
    possibleChar = possibleChar.concat(number)
    guaranteedChar.push(randomFuntion(number))
  }
  for (var i = 0 < options.Length; i++) {
    var possibleCharacter = randomFuntion(possibleCharacters);
    results.push(possibleCharacter)
  }
  for (var i = 0; i < guaranteedCharacters.Length; i++) {
    results[i] = guaranteedCharacters[i];
  }
  return results.join('');
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


      
      