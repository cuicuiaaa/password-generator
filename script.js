// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var charLength = parseInt(prompt("How many characters would you like your password to contain?"));

  if (charLength >= 8 && charLength <= 128) {
    var specialChar = confirm("Click OK to confirm including special characters.");
    var numericChar = confirm("Click OK to confirm including numeric characters.");
    var lowerCaseChar = confirm("Click OK to confirm including lowercase characters.");
    var upperCaseChar = confirm("Click OK to confirm including uppercase characters.");

    var specialCharCollection = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var numericCharCollection = "1234567890";
    var lowerCaseCharCollection = "qwertyuiopasdfghjklzxcvbnm";
    var upperCaseCharCollection = "QWERTYUIOPASDFGHJKLZXCVBNM";
    var combinedSpecialNumeric = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~1234567890";
    var combinedSpecialLower = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~qwertyuiopasdfghjklzxcvbnm";
    var combinedSpecialUpper = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~QWERTYUIOPASDFGHJKLZXCVBNM";
    var combinedNumericLower = "1234567890qwertyuiopasdfghjklzxcvbnm";
    var combinedNumericUpper = "1234567890QWERTYUIOPASDFGHJKLZXCVBNM";
    var combinedLowerUpper = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    var combinedSpecialNumericLower = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~1234567890qwertyuiopasdfghjklzxcvbnm";
    var combinedSpecialNumericUpper = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~1234567890QWERTYUIOPASDFGHJKLZXCVBNM";
    var combinedSpecialLowerUpper = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    var combinedNumericLowerUpper = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    var combinedAll = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    var password = "";

    if (specialChar === false && numericChar === false && lowerCaseChar === false && upperCaseChar === false) {
      alert("Must select at least one character type.");
      return;
    }

    else if (specialChar === true && numericChar === false && lowerCaseChar === false && upperCaseChar === false) {
      for (var i = 0; i < charLength; i++) {
        password = password + specialCharCollection.charAt(Math.floor(Math.random() * 33));
      }
    }

    else if (specialChar === false && numericChar === true && lowerCaseChar === false && upperCaseChar === false) {
      for (var i = 0; i < charLength; i++) {
        password = password + numericCharCollection.charAt(Math.floor(Math.random() * 10));
      }
    }

    else if (specialChar === false && numericChar === false && lowerCaseChar === true && upperCaseChar === false) {
      for (var i = 0; i < charLength; i++) {
        password = password + lowerCaseCharCollection.charAt(Math.floor(Math.random() * 26));
      }
    }

    else if (specialChar === false && numericChar === false && lowerCaseChar === false && upperCaseChar === true) {
      for (var i = 0; i < charLength; i++) {
        password = password + lowerCaseCharCollection.charAt(Math.floor(Math.random() * 26));
      }
    }

    else if (specialChar === true && numericChar === true && lowerCaseChar === false && upperCaseChar === false) {
      for (var i = 0; i < charLength; i++) {
        password = password + combinedSpecialNumeric.charAt(Math.floor(Math.random() * 43));
      }
    }

    else if (specialChar === true && numericChar === false && lowerCaseChar === true && upperCaseChar === false) {
      for (var i = 0; i < charLength; i++) {
        password = password + combinedSpecialLower.charAt(Math.floor(Math.random() * 59));
      }
    }

    else if (specialChar === true && numericChar === false && lowerCaseChar === false && upperCaseChar === true) {
      for (var i = 0; i < charLength; i++) {
        password = password + combinedSpecialUpper.charAt(Math.floor(Math.random() * 59));
      }
    }

    else if (specialChar === false && numericChar === true && lowerCaseChar === true && upperCaseChar === false) {
      for (var i = 0; i < charLength; i++) {
        password = password + combinedNumericLower.charAt(Math.floor(Math.random() * 36));
      }
    }

    else if (specialChar === false && numericChar === true && lowerCaseChar === false && upperCaseChar === true) {
      for (var i = 0; i < charLength; i++) {
        password = password + combinedNumericUpper.charAt(Math.floor(Math.random() * 36));
      }
    }

    else if (specialChar === false && numericChar === false && lowerCaseChar === true && upperCaseChar === true) {
      for (var i = 0; i < charLength; i++) {
        password = password + combinedLowerUpper.charAt(Math.floor(Math.random() * 52));
      }
    }
    
    else if (specialChar === true && numericChar === true && lowerCaseChar === true && upperCaseChar === false) {
      for (var i = 0; i < charLength; i++) {
        password = password + combinedSpecialNumericLower.charAt(Math.floor(Math.random() * 69));
      }
    }

    else if (specialChar === true && numericChar === true && lowerCaseChar === false && upperCaseChar === true) {
      for (var i = 0; i < charLength; i++) {
        password = password + combinedSpecialNumericUpper.charAt(Math.floor(Math.random() * 69));
      }
    }

    else if (specialChar === true && numericChar === false && lowerCaseChar === true && upperCaseChar === true) {
      for (var i = 0; i < charLength; i++) {
        password = password + combinedSpecialLowerUpper.charAt(Math.floor(Math.random() * 85));
      }
    }

    else if (specialChar === false && numericChar === true && lowerCaseChar === true && upperCaseChar === true) {
      for (var i = 0; i < charLength; i++) {
        password = password + combinedNumericLowerUpper.charAt(Math.floor(Math.random() * 62));
      }
    }

    else if (specialChar === true && numericChar === true && lowerCaseChar === true && upperCaseChar === true) {
      for (var i = 0; i < charLength; i++) {
        password = password + combinedAll.charAt(Math.floor(Math.random() * 95));
      }
    }

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  else {
    alert("Password length must be a number between 8 and 128.");
    return;
  }
};


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);




