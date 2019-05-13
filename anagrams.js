// anagrams
// given two strings, write a function to determine if
// the second string is an anagram of the first
// assume all inputs are single words, lowercase, no punctuation or stuff
// for instance (validAnagram('', '')) // true
// or validAnagram('aaz', 'zza') // false

function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  let letterFrequencyCounter = {};

  // create a lookup object from the first string
  for (let letter of string1) {
    letterFrequencyCounter[letter] = (letterFrequencyCounter[letter] || 0) + 1;
  }

  console.log(letterFrequencyCounter);

  // loop over the second string
  for (let i = 0; i < string2.length; i++) {
    let letter = string2[i];
    // check the letter exists in the second string in the object
    if (!letterFrequencyCounter[letter]) {
      return false;
    } else {
      // if it does, subtract 1 from the counter object
      letterFrequencyCounter[letter] -= 1;
    }
  }
  return true;
}

const stringA = 'zaa';
const stringB = 'zzzz';
const stringC = 'iceman';
const stringD = 'cinema';

console.log(validAnagram(stringA, stringB));
console.log(validAnagram(stringC, stringD));
