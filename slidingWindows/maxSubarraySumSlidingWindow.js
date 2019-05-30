/* given an array of integers and a number, write a function called maxSubarraySum,
which finds the max sum of a subarray with the length of the number passed
to the function 

note that a subarray must consist of CONSECUTIVE elements from the original array.
in the first example below, [100, 200, 300] is a subarray of the original array
but [100,300] is not

examples
- maxSubarraySum([100,200,300,400], 2) // 700
- maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
- maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
- maxSubarraySum([3,-2,7,-4,1,4,-2,1], 2) // 5
- maxSubarraySum([2,3], 3) // null

time complexity: o(n)
space complexity: o(1)
*/

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  // check for empty array or array shorter than number
  if (arr.length < num) {
    return null;
  }

  // calculate first sum from the beginning of array
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // set the tempSum equal to the maxSum
  tempSum = maxSum;

  // check if each subsequent number addition is greater than the current maxSum
  for (let i = num; i < arr.length; i++) {
    // calculate the next temp sum in the array after the first generated sum
    tempSum = tempSum - arr[i - num] + arr[i];

    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}
console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));
