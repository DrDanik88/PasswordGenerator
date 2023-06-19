/* Assignment code here*/


function collectUserPreferences() {{
  var length = parseInt(prompt("Password length between 8 and 128 characters:")); /*This is the promt for lenght*/
  if (isNaN(length) || length <= 7 || length >= 129) {
    length = parseInt(prompt("Invalid input. Please enter a positive number between 8 and 128:"))}; /* this if, does the data validation to make sure it is a number between 8 and 128*/
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialChars = confirm("Include special characters?");
 //the if below is to validate that the user select at least ONE criteria otherwise the collectUserPreferences starts over
  if (includeLowercase==false && includeUppercase==false && includeNumbers==false &&includeSpecialChars==false) {
    alert("Please select at least ONE criteria.")
    return collectUserPreferences();
  }
};

//the return statement is used to return the generated different user input from the function collectUserPreferences and store them in key:value pairs.
  return {
    length: length,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumbers: includeNumbers,
    includeSpecialChars: includeSpecialChars
  };
}
//This function will add in an array named charSet the choices of the user.
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars) {
  var charSet = "";
  var password = "";

  if (includeLowercase) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
  }

  if (includeUppercase) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (includeNumbers) {
    charSet += "0123456789";
  }

  if (includeSpecialChars) {
    charSet += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  }

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
// when the function is called and reaches this point, it will return 
//the value stored in the password variable as the result of the function
  return password;
}


// Write password to the #password input
function writePassword() {
  var userPreferences = collectUserPreferences();
  var password = generatePassword(userPreferences.length,
    userPreferences.includeLowercase,
    userPreferences.includeUppercase,
    userPreferences.includeNumbers,
    userPreferences.includeSpecialChars
  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
/*button id is "generate" in html code*/
/*get a reference to the button element from html code*/
/* Get references to the #generate element, means the same as above but worded differently*/
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

