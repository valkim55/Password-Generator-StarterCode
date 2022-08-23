// Assignment code here

//Get references to the #generate and #password elements from HTML
var generateBtn = document.querySelector("#generate");
var quit = document.querySelector("#password");

var getStarted = function() {
    var promptGenerate = window.prompt("To create a password say YES, to exit say NO."); 
    if (promptGenerate === "YES" || promptGenerate === "yes") {
        window.alert("Let's get started!");
        console.log("user said yes");
        getPasswordLength();
    } else if (promptGenerate === "no" || promptGenerate === "NO") {
        alert("see you next time!");
        nowQuit();
    } else {
        alert("Invalid. Please try again!");
        getStarted();
    };
}; 

//once the page finished loading the alert pops up and getStarted function runs
var pwGenerator = function () {
    window.alert("Welcome to Password Generator!");
    getStarted(); 
}; 


// ask user how long they want their password to be
var getPasswordLength = function() {
    var passwordLength = window.prompt("How many character would you like your password to include? Choose a number between 8 and 128.");
    // set that the password has to be at least 8 and max 128 characters long
    // while (passwordLength >=8 && passwordLength <= 128) // no need to do the loop, becasue the value of passwordLength will not change
    if (passwordLength >=8 && passwordLength <= 128) {
        console.log("password length is " + passwordLength);
        window.alert("Your password length is " + passwordLength);
        getLetters();
    } else {
        window.alert("Invalid. Please try again!");
        getPasswordLength();
    } return passwordLength;
};  // end of passwordLength function

    


// next, ask the use if they would like to include letters
var alphabetArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
console.log(alphabetArray);

var generateRandomLetter = function() {
  var randomLetter = Math.floor(Math.random() * alphabetArray.length);
  console.log(randomLetter, alphabetArray[randomLetter]);
};

var ifLetters;
var getLetters = function() {
  var ifLetters = window.prompt("Would you like to include the letters in your password? Reply YES or NO.");
  // use switch statement to check multiple options
  switch (ifLetters) {
      // if the user replies YES, let them know password will include letters and move on to the numbers
      case "yes":
      case "YES":
          console.log("user said " + ifLetters + " to the letters");
          window.alert("Your password will contain letters. Please continue");
          generateRandomLetter();
          getNumber();
          return true;
          break;
              
      // if the user replies NO, let them know password will NOT include letters and move on to the numbers
      case "no":
      case "NO":
          console.log("user said " + ifLetters + " to the letters");
          window.alert("Your password will not contain any letters. Please continue");
          getNumber();
          return false;
          break;

      // if user provides invalid response take them back to the beginning of the function statement    
      default:
          window.alert("You didn't choose a valid option. Try again!");
          getLetters();
  } // end of switch statement for letters
}; // end of getletter function


// next, find out if the user would like to include numbers
var numbersArray = Array.from({length: 999}, () => Math.floor(Math.random() * 999));
//var numbersArray = Math.floor(1000 + Math.random() * 8999);
console.log(numbersArray);

// run the function to get random number is user replied yes
var generateRandomNumber = function() {
    var randomNumber = Math.floor(Math.random() * numbersArray.length);
    console.log(randomNumber);
};

var ifNumbers;
var getNumber = function() {
    var ifNumbers = window.prompt("Would you like to include numbers in your password? Reply YES or NO.");
    // use switch statement to check multiple options
    switch (ifNumbers) {
        // if the user replies YES, let them know password will include numbers, tell generateRandomNumber function to run and move on to the special characters
        case "yes":
        case "YES":
            console.log("user said " + ifNumbers + " to the numbers");
            window.alert("Your password will contain numbers. Please continue");
            generateRandomNumber();
            getSpecialChar();
            return true;
            break;

        // if the user replies NO, let them know password will NOT include numbers, return false and and move on to the special characters
        case "no":
        case "NO":
            console.log("user said " + ifNumbers + " to the numbers");
            window.alert("Your password will not contain any numbers. Please continue");
            getSpecialChar();
            return false;
            break;

        default:
            window.alert("You didn't choose a valid option. Try again!");
            getNumber();
    } // end of switch statement for numbers
}; // end of getNumbers function


// last, find out if the user wants to include any special characters in their password
var specialCharArray = ["!", "(", ")", "#", "$", "%", "&", "*", "+", "?", "@", "<", ">", "~", ",", "/", ":", ";", "=", "[", "]", "{", "}", "_", "^", "|"];
console.log(specialCharArray);
    
// run the function to generate a random special character, doesn't run unless called 
var generateRandomChar = function() {
    var randomChar = Math.floor(Math.random() * specialCharArray.length); //find out why u multiplate math.random() with specCharArray.length
    console.log(randomChar, specialCharArray[randomChar]);
};
    
// checks if user wants a special character
var ifSpecialChar;
var getSpecialChar = function() {
    var ifSpecialChar = window.prompt("Would you like to include special characters in your password? Reply YES or NO");
    switch (ifSpecialChar) {  
        case "yes":
        case "YES":
            console.log("user said " + ifSpecialChar + " to special characters");
            window.alert("Your password will contain special characters as well. Please continue");
            generateRandomChar(); // actually calls a random character geenrator because user replied yes
            return true;
            break;
        case "no":
        case "NO":
            console.log("user said " + ifSpecialChar + " to special characters");
            window.alert("Your password will not contain any special characters");
            return false;
    
        default:
            window.alert("You didn't choose a valid option. Try again!");
            getSpecialChar();
            return;
    } // end of switch statement for special characters
}; // end of getSpecialChar function
    
  
    
    // function generatePassword() {
        
    // }
    // 
    //document.getElementById("generate").addEventListener("click", generatePassword);


var nowQuit = function() {
    quit.innerHTML = "See You next Time!";
    console.log("quit now");
};

