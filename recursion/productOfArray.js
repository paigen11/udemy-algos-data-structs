/* write a function called productOfArray which takes in an
array of numbers and returns the product of them all */

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(nums) {
  let result = 1;

  function helper(input) {
    // check if the array length is 0
    if (input.length === 0) {
      return;
    }

    // multiply the result by the first item in the array
    result *= input[0];
    // slice that item off the array
    helper(input.slice(1));
  }
  // call the helper function again with the remaining inputs
  helper(nums);

  // return the final result
  return result;
}

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));
