/* you want to count number of times a substring occurs in a larger string.

simplest approach is by walking through one character at a time, 
and if first character in substring matches, check next letter, etc., etc.
if it all matches, increment a counter 
then do the same thing through the rest of the string

function that takes string and short string
loop over longer string, 
loop over short string,
if characters don't match, break out of inner loop
if characters do match, keep going
if inner loop completes and match is found, increment count of matches
return count
*/

function stringSearch(longString, shortString) {
  let count = 0;

  // loop over long string
  for (var i = 0; i < longString.length; i++) {
    // loop over short string
    for (var j = 0; j < shortString.length; j++) {
      // if outer string letter in each position doesn't match inner string letter in same position, break
      if (shortString[j] !== longString[i + j]) {
        break;
      }
      // if it does, keep going
      if (j === shortString.length - 1) {
        // and when you find a full match, increment the count
        count++;
      }
    }
  }
  return count;
}

console.log(stringSearch('wowzomgzomg', 'omg')); // 2
console.log(stringSearch('lorie loled', 'loled')); // 1
