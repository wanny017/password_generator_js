// Assignment Code
var generateBtn = document.querySelector("#generate");

const num = ['0','1','2','3','4','5','6','7','8','9'];
const LC = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const UC = LC.map(function(x){ return x.toUpperCase(); });
const SP = ["\ ","\!","\”","\#","\$","\%","\&","\'","\(","\)","\*","\+","\,","\-","\.","\/","\:","\;","\<","\=","\>","\?","\@","\[","\\","\]","\^","\_","\`","\{","\|","\}","\~"];
// Write password to the #password input
// Ask user for the password length
var generatePassword =function(){
  var length = window.prompt("How long will your password be? \nChoose between 8 and 128.");
  
// if user chose cancel or input not in the range
  if (!length) {
    return "You canceled!\nPress Generate Password to try again.";
  } else if (length < 8){
    return "Your chosen length is too short!\nPress Generate Password to try again.";
  } else if (length > 128){
    return "Your chosen length is too long!\nPress Generate Password to try again.";  
  }
  window.alert("You choose length of "+ length + ".");

//ask for lowercase
  var lowercase = window.confirm("Do you want to include lowercase?\nEither OK or Cancel.");
  if (lowercase) {
    window.alert("Lowercase included."); 
    lowercase_array= LC;
  } else {
    window.alert("Lowercase not included.");
    lowercase_array=[];
  }

//ask for uppercase
  var uppercase = window.confirm("Do you want to include uppercase?\nEither OK or Cancel.");
  if (uppercase) {
    window.alert("Uppercase included.");
    uppercase_array= UC;
  } else {
    window.alert("Uppercase not included.");
    uppercase_array=[];
  }

//ask for numbers
var numbers = window.confirm("Do you want to include numbers?\nEither OK or Cancel.");
if (numbers) {
  window.alert("Numbers included.");
  numbers_array= num;
} else {
  window.alert("Numbers not included.");
  numbers_array=[];
}

//ask for special characters
var special = window.confirm("Do you want to include special characters?\nEither OK or Cancel.");
if (special) {
  window.alert("Special characters included.");
  special_array= SP;
} else {
  window.alert("Special characters not included.");
  special_array=[];
}

//check if there at least one character type has been selected, otherwise cancelled.
if (!(lowercase||uppercase||numbers||special)){
  return "At least one character type should be selected!\nPress Generate Password to try again.";
}

//big array depends on what characterstic typies
var newarray = lowercase_array.concat(uppercase_array,numbers_array,special_array);
//select elements out of the array randomly in for loop
//we first creat an empty array and then add an new element each iteration
var pw=[];

for (let i=0;i<length;i++){
pw.push(newarray[~~(Math.random() * newarray.length)])
}
//since the result is an array of strings, now we use join() to make it a string
result = pw.join('');
return "Your password is \n"+ result;

};
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
