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
    };
    writePassword();
    //writePassword();
    document.getElementById("generate").addEventListener("click", writePassword);

 

    // ask a user how long they want their password to be
    var getPasswordLength = function() {
        var passwordLength = "";
        // set that the password has to be at least 8 and max 128 characters long
        while (passwordLength >=8 || passwordLength <= 128) {
            passwordLength = window.prompt("How many character would you like your password to include? Choose a number between 8 and 128.");
            if (passwordLength < 8 || passwordLength > 128) {
                window.prompt("Invalid number. Please try again!");
            } else {
                console.log("Password length is " + passwordLength);
                window.alert("Your password length is " + passwordLength);
                return passwordLength;
            }
        } 
    }; // end of passwordLength function
    //getPasswordLength();
    document.getElementById("generate").addEventListener("click", getPasswordLength);


    // next, ask the use if they would like to include letters
    var getLetters = function() {
        var ifLetters = window.prompt("Would you like to include the letters in your password? Reply YES or NO.");
        // use switch statement to check multiple options
        switch (ifLetters) {
            // if the user replies YES, let them know password will include letters and move on to the numbers
            case "yes":
            case "YES":
                console.log("user said " + ifLetters + " to the letters");
                window.alert("Your password will contain letters. Please continue");
                getNumbers();
                break;

            // if the user replies NO, let them know password will NOT include letters and move on to the numbers
            case "no":
            case "NO":
                console.log("user said " + ifLetters + " to the letters");
                window.alert("Your password will not contain any letters. Please continue");
                getNumbers();
                break;

            // if user provides invalid response take them back to the beginning of the function statement    
            default:
                window.alert("You didn't choose a valid option. Try again!");
                getLetters();
        } // end of switch statement for letters
    
    }; // end of getletter function
    //getLetters();
    document.getElementById("generate").addEventListener("click", getLetters); 


    // next, ask the user if they'd like to include numbers
    var getNumbers = function() {
        var ifNumbers = window.prompt("Would you like to include numbers in your password? Reply YES or NO.");
        // use switch statement to check multiple options
        switch (ifNumbers) {
            // if the user replies YES, let them know password will include numbers and move on to the special characters
            case "yes":
            case "YES":
                console.log("user said " + ifNumbers + " to the numbers");
                window.alert("Your password will contain numbers. Please continue");
                getSpecialChar();
                break;

            // if the user replies NO, let them know password will NOT include numbers and move on to the special characters
            case "no":
            case "NO":
                console.log("user said " + ifNumbers + " to the numbers");
                window.alert("Your password will not contain any numbers. Please continue");
                getSpecialChar();
                break;

            default:
                window.alert("You didn't choose a valid option. Try again!");
                getNumbers();

        } // end of switch statement for numbers
    
    }; // end of getNumbers function
    //getNumbers();
    document.getElementById("generate").addEventListener("click", getNumbers); 


    // ask user if they'd like to include special characters
    var getSpecialChar = function() {
        var ifSpecialChar = window.prompt("Would you like to include special characters in your password? Reply YES or NO");
        switch (ifSpecialChar) {
            case "yes":
            case "YES":
                console.log("user said " + ifSpecialChar + " to special characters");
                window.alert("Your password will contain special characters as well. Please continue");
                break;

            case "no":
            case "NO":
                console.log("user said " + ifSpecialChar + " to special characters");
                window.alert("Your password will not contain any special characters");
                break;

            default:
                window.alert("You didn't choose a valid option. Try again!");
                getSpecialChar();
        } // end of switch statement for special characters
    
    }; // end of getSpecialChar function
    //getSpecialChar();
    document.getElementById("generate").addEventListener("click", getSpecialChar); 


    /*
    function generatePassword() {
    
    }
    generateBtn.addEventListener("click", generatePassword); */
        

    var nowQuit = function() {
        var quit = console.log("quit now");
        document.getElementById("password").innerHTML = "poopeepoo";
    };
    document.getElementById("generate").addEventListener("click", nowQuit); 

    };
    //pwGenerator();