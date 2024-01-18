/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  if(str.length === 0 ) {
    return true
  }

  //first we convert the string into all lowercase and then we have to also check for non-alphabetic characters that can be present in the strings
  //replace the non-alphabetic chars to empty string
  let mod_str = str.toLowerCase().replace(/[^a-z0-9]/gi,'');

  let str2 = mod_str.split("").reverse().join("");

  if (mod_str === str2) {
    return true;
  }else {
    return false;
  }
} 

module.exports = isPalindrome;
