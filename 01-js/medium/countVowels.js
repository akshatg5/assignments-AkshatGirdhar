/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    const lowerStr = str.toLowerCase();

    //defining a set for efficient lookup
    const vowels = new Set(['a','e','i','o','u'])

    //defining a counter for the counter
    let count = 0 

    //looping through the str to check how many vowels it contains
    for (let char of lowerStr) {
      if (vowels.has(char)) {
        count ++;
      }
    }
    return count;
}

module.exports = countVowels;