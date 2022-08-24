# Password-Generator-StarterCode

<p>This is the repository for password generator application. <br>
The program interacts with user through the chain of prompt/alert messages. <br>

First, the user is asked to provide the length of desired password, which has to be within a range of > 8 and < 128 characters.
- empty string, null, letters are not accepted and if the input is out of required range the alert message will notify the user<br>

Second, the user is asked if they would like to include any letters in their password.
- if the answer is yes - then the program generates random letter from English alphabet<br>

Next, the user is asked if they would like to include any numbers in their password.
- if the answer is yes - then the program generates random number<br>

Last, the user is asked if they would like to include any special characters in their password.
- if the answer is yes - then the program generates random special character</p><br>

----------

This is as far as the application was developed, the rest of the work is still in progress.
Next steps will be:
- check if the user provided at least one parameter to include in their password, if not - then return them to the beginning
- after making sure at least one criteria is met, generate a string equal to the requested password length containing randomly generated set of specified parameters
- check if generated password contains all specified criteria, if not then keep going through checking process until the conditions have been met


Stay tuned!

link to the application: https://valkim55.github.io/Password-Generator-StarterCode/ <br>
link to GitHub repository: https://github.com/valkim55/Password-Generator-StarterCode