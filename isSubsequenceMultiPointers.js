/* write a function called isSubsequence which takes 2 strings and checks whether the
characters in the first string form a subsequence of the characters in the second string. 
In other words, the function should check whether the characters in the first string
appear somewhere in the second string, WITHOUT THEIR ORDER CHANGING.

examples 
- isSubsequence('hello', 'hello world') // true
- isSubsequence('sing', 'string') // true
- isSubsequence('abc', 'abracadabra') // true
- isSubsequence('abc', 'acb') // false (order matters)

time complexity - o(n + m)
space complexity - o(1)
*/

function isSubsequence(string1, string2) {
  let i = 0;
  let j = 0;
  // check if string1 exists
  if (!string1) return true;

  // use j to iterate through string2
  while (j < string2.length) {
    // if the value at the index of string2 is the same as the value of the index at string1,
    // increase string1's index
    if (string2[j] === string1[i]) i++;
    // if the i index is equal to string1's length, you've reached the end of the string
    if (i === string1.length) return true;
    // regardless, increase j's value for the next iteration
    j++;
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'string'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
