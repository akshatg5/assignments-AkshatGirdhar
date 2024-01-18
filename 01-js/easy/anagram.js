/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let str1lower = str1.toLowerCase();
  let str2lower = str2.toLowerCase();
  if (str1lower.length !== str2lower.length) {
    return false;
  }

  for (let i = 0;i<str1lower.length;i++) {
    let found = false;
    for (let j = str2lower.length - 1;j>=0;j--){
      if (str1lower[i] == str2lower[j]) {
        found = true;
        break;
      }
    }
    if (!found) { //if not found then we will return false
      return false;
    }
  }
  return true; // if in the end of the loop all chars are found then we return true
}

module.exports = isAnagram;
