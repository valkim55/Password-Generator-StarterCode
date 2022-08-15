// Assignment code here


// if user replies YES go to generatePassword function
// if user replies NO then break and exit

// inside the generatePassword function use a conditional statement if or switch to ask user which symbols they'd like to include

// password can be >=8 and <= 128 characters long
// password can have lower or upper case letters
// password can have numbers
// password can have special characters

// user has to use at least one character type to generate the password

// after all prompts are answered the password is generated and it matches the selected criteria

// when password is generated it is displayed on the page   



//once the page finished loading the alert pops up
var pwGenerator = function () {
    window.alert("Welcome to Password Generator!");
}

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// define a function writePassword to start interaction with a user
var writePassword = function() {
    var promptGenerate = window.prompt("To create a password say YES, to exit say NO.");

    // if user's response is empty or null, alert them that they need to reply with only yes or no and return to the prompt question again
    if (promptGenerate === "" || promptGenerate === "null" ) {
        window.alert("You need to provide a valid answer. Please try again!");
        return writePassword();
    }

    // make it case insensitive
    promptGenerate = promptGenerate.toLowerCase();
    // if user chooses to exit ask them if they're sure 
    if (promptGenerate === "no" || promptGenerate === "NO") {
        var confirmQuit = window.alert("Are you sure you would like to exit?");

        // if user confirms to quit tell them "See you next time"
        if (confirmQuit) {
            window.alert("See you next time!");
            console.log("user decided to leave");
            return true;
        }
    }
    return false;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//writePassword(); 







     //(see below) is user expected to type something?

        // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

        
