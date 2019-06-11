/* what is recursion? 

- a process (a function in our case) that calls itself 

it's everywhere: json.parse(), json.stringify(), etc. 
document.getElementById and DOM traversal
object traversal
we see it with more complex data structures
*/

// the call stack
// any time a function is invoked it's placed (pushed) to the top of the call stack
// when JS sees the return keyword or when the function ends, the compiler removes it (pop)

/* how recursive functions work: invoke the SAME function
with a different input until you reach your base case

base case: the condition where the recursion ends - 
this is the most important concept to understand

two essential parts of a recursive function:
- base case
- different input
*/

// first recursive function
function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

console.log(countDown(5));
console.log(countDown(3));

// second recursive function
function sumRange(num) {
  // base case checks if num is 1
  if (num === 1) return 1;
  // recursive call
  return num + sumRange(num - 1);
}

console.log(sumRange(4));
console.log(sumRange(3));

// factorial iteratively
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

console.log('Factorial', factorial(3));
console.log('Factorial', factorial(4));

// factorial recursively
function recurseFactorial(num) {
  if (num === 1) return 1;
  return num * recurseFactorial(num - 1);
}

console.log('Recursive factorial', recurseFactorial(3));
console.log('Recursive factorial', recurseFactorial(4));

// helper function recursion
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // here, the recursion happens inside the helper function and shrinks the array each time
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// purely recursive function
function collectOddValuesRecurse(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  // at the end, all the arrays are concatenated together at the very end
  newArr = newArr.concat(collectOddValuesRecurse(arr.slice(1)));
  return newArr;
}

console.log(collectOddValuesRecurse([1, 2, 3, 4, 5]));

/* recursion tips:
- for arrays, use methods like slice, the spread operator and concat so you
don't mutate the arrays

- strings are immutable, so you need to use methods like slice,
substr, or substring to make copies

- to make copies of objects, use Object.assign, or the spread
operator
 */
