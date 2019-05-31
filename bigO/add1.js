const now = require('performance-now');

// big O
// which function is more efficient?
// this function has n operations because the addition depends on how many items (n) there are
// the number of operations grow proportionally to n for this one
// big O = O(n)
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// to better determine code timing, count the operations the code has to do
// this function has three operations (mult, add, divide)
// big O = O(1)
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

let t1 = now();
addUpTo(1000000000);
let t2 = now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

let t3 = now();
addUpTo2(1000000000);
let t4 = now();
console.log(`Time elapsed: ${(t4 - t3) / 1000} seconds`);

// space complexity
// big O allows us to talk formally about how the runtime
// of an algorithm grows as the inputs grow

// an algorithm is O(f(n)) if the number of simple operations the
// computer has to do is eventually less than a constant times f(n),
// as n increases

/* f(n) could be linear (f(n*) = n) 
    f(n) could be quadratic (f(n) = n^2)
    f(n) could be constant (f(n) = 1)
    f(n) could be something entirely different
*/

// rules of thumb
// constants don't matter - o(2n) === o(n), o(500) === o(1), o(13n^2) === o(n^2)
// smaller terms don't matter - o(n +10) === o(n), o(n^2 + 5n + 8) === o(n^2)

// logarithms - the inverse of exponentiation (log base 2(8) = 3 === 2^3 = 8)
// or log base 2 (value) = exponent === 2^exponent = value

/* the logarithm of a number roughly measures the number of times 
you can divide a number by 2 before you get a value that's less than
or equal to one */

// logarithmic time comlexity is great
// o log(n) is better than o(1)
// o (n log n) is better than o(n)

/* space complexity (auxiliary space complexity) in js
  primitives are constant space (booleans, numbers, etc.)
  strings require o(n) space (where n is string length)
  reference types are generally o(n) where n is the length (for arrays) 
  or the number of keys (for objects)
*/
