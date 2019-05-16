/* pattern involves creating a window which can either be an array
or number from one position to another

depending on a certain condition, the window either increases
or closes (and a new window is created)

very useful for keeping track of a subset of data in an array/string
etc. */

// example: write a function called maxSubarraySum which accepts
// an array of integers and a number called n
// the function should calculate the max sum of n consecutive
// elements in the array

// maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
// maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
// maxSubarraySum([], 4) // null

// naive solution - time complexity of o(n^2)
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    // console.log(temp, max);
  }
  return max;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// refactor - time complexity of o(n)
function maxSubarraySum2(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  // null check first
  if (arr.length < num) return null;

  // sum together the first three digits
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  // start another loop, start from the next set of n digits
  for (let i = num; i < arr.length; i++) {
    // subtract the first array value, add the last (newest) array value
    tempSum = tempSum - arr[i - num] + arr[i];
    // set the maxSum based on whichever is greater
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
