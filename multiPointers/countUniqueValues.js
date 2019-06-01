/* implement a function called countUniqueValues,
which accepts a sorted array, and counts the unique values in 
the array. There can be negative numbers in the array, but 
it will always be sorted */

// countUniqueValues([1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0, 1]) // 4

function countUniqueValues(arr) {
  // check if the array is empty first
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;
  let newArray = [];
  // push the first value in the array into the new index no matter what
  newArray.push(arr[i]);

  // loop through the array starting from the index of 1
  for (let j = arr[1]; j < arr.length; j++) {
    // if they are not equal,
    if (arr[i] !== arr[j]) {
      // add the new value to the array
      newArray.push(arr[j]);
      // increment the value of i by 1
      i++;
      // then make the index at arr[i] equal to arr[j]
      arr[i] = arr[j];
    }
    // console.log(i, j);
  }
  return newArray.length;
}

console.log(countUniqueValues([1, 1, 1, 2, 3, 4, 5, 5, 6, 6, 7]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 5, 5, 5, 6, 6, 7, 7]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
