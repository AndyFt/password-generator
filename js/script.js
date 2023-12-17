// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

const charOptions = [];
const generatedPassword = '';
// You can store the generatedPassword as a string and concat each character OR
// as an array and push each character, then join once you have enough characters

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt for password length
  let passwordLenght = prompt("Please, enter the desired lenght of your password (Between 8 and 128 characters).");

  // making sure it's a number
  // Prompts store data as strings, so need to parse into a number
  passwordLenght = parseInt(passwordLenght);

  // At least 8 characters, no more than 128 characters
  // Conditional to check that the number that was entered is in range
  // If the user's input is out of range, either return out of the function or call the function again
  if (passwordLenght < 8 || passwordLenght > 128 || isNaN(passwordLenght)) {
    alert("You haven't entered a valid lenght for your password! Please, enter a number between 8 and 128.");
    return getPasswordOptions();
  }

  // Confirm which character sets to use
  const useLowerCasedCharacters = confirm("Do you want your password to have lowercase characteres?" + lowerCasedCharacters);
  const useUpperCasedCharacters = confirm("Do you want your password to have uppercase characteres?" + upperCasedCharacters);
  const useNumericCharacters = confirm("Do you want your password to have numeric characteres?" + numericCharacters);
  const useSpecialCharacters = confirm("Do you want your password to have special characteres?" + specialCharacters);

  // If the user answers false for all, either return out of the function or call the function again
  if (!(useLowerCasedCharacters || useUpperCasedCharacters || useNumericCharacters || useSpecialCharacters)) {
    alert("Please, select at least one character set to be used in your password.");
    return getPasswordOptions();
  }

  // Once they select a character set:
  // Generate a random character for each selected character set
  let selectedCharacters = [];
  // Either push selected character sets to a mega-array of all selected characters
  if (useLowerCasedCharacters) selectedCharacters = selectedCharacters.concat(lowerCasedCharacters);
  if (useUpperCasedCharacters) selectedCharacters = selectedCharacters.concat(upperCasedCharacters);
  if (useNumericCharacters) selectedCharacters = selectedCharacters.concat(numericCharacters);
  if (useSpecialCharacters) selectedCharacters = selectedCharacters.concat(specialCharacters);

  // Once character sets are selected, move on to generating random characters
  return {length: passwordLenght, characters: selectedCharacters};
}

const passwordOptions = getPasswordOptions();
console.log(passwordOptions);

// Function for getting a random element from an array
function getRandom(arr) {
  // Need a variable to hold the password as it's being generated
  let password = '';
  // Need a variable to hold the index that's being generated
  let generatedIndex;
  // For loop that loops the number of times that matches the length the user chose
  for (let i = 0; i < passwordLenght; i++) {
    // Generate a random number
    // That number is the index for a character in the mega-array
    // So then, mega-array[generated-index] is the actual character
    generatedIndex = Math.floor(Math.random() * arr.length);
    // Add that character to the password
    password += arr[generatedIndex];
  }
  // Once we finish the for loop, return the generated password
  return password;
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);