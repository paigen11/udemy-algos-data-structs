/* creating pointers or values that correspond to an 
index or position and move towards the beginning, end
or middle based on a certain condition

very efficient for solving problems with minimal space 
complexity as well */

// write a function called sumZero, which accepts a SORTED array of integers (array must be sorted for this to work)
// the function should find the first pair where the sum is 0
// return an array that includes both values that sum to 0 or undefined if a pair does not exist

// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
// sumZero([-2, 0, 1, 3]) // undefined
// sumZero([1, 2, 3]) // undefined

// naive solution - o(n^2) time complexity
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

// refactored solution - time complexity = o(n) and space complexity is o(1)

function sumZero2(arr) {
  // first index in the array
  let left = 0;
  // last index in the array
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    // if the two numbers summed equal 0, you're done
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      // if the sum is over 0, subtract 1 index from the high end of the array
      right--;
    } else {
      // if the sum is negative, add 1 index to the low end of the sorted array
      left++;
    }
  }
}

console.log(sumZero2([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero2([-5, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero2([-4, -3, -2, -1, 0, 6, 7, 11]));
