// Assignment code here

window.alert("Welcome to Password Generator!");


var generateOption = function() {
    var promptGenerate = window.prompt("To create a password say YES, to exit say NO.");

    // if user's reply is NOT yes or no, alert them that they need to reply with only yes or no and return to the prompt question again
    if (promptGenerate !== "yes" || promptGenerate !== "no" ) {
        window.alert("You need to provide a valid answer. Please try again!");
        return generateOption();
    }
    
    // make it case insensitive
    promptGenerate = promptGenerate.toLowerCase();
    // if user chooses to exit ask them if they're sure 
    if (promptGenerate === "no" || promptGenerate === "NO") {
        var confirmQuit = window.confirm("Are you sure you would like to exit?");

        // if user confirms to quit tell them "See you next time"
        if (confirmQuit) {
            window.alert("See you next time!");
            console.log("user decided to leave");
            return true;
        }
    }

        
}
generateOption();
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















        // Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

        // Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

        // Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
