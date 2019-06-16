/* write a function called recursiveRange which accepts
a number and adds up all the numbers from 0 to the number passed
to the function 
*/

// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
  // check if num equals 0
  if (num === 0) {
    return 0;
  }
  // if not, continue adding num to itself minus one each time until it reaches 0
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6));
console.log(recursiveRange(10));
