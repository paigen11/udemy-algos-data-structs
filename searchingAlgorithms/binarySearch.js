/* faster than linear search - eliminate half the remaining elements
BUT binary search only works on SORTED arrays 

basically, you just keep picking the halfway point in the array
narrowing it down each time by half
until you reach the value you're looking for 

dividing and conquering */

// binary search function should accept a sorted array and a value
// create a left pointer at array start, right pointer at end of array
// while left pointer comes before right pointer, keep looping and check the middle value
// between pointers to find value
// if value is too small, move left pointer
// if value is too large, move right pointer
// if value never exists, return -1

function binarySearch(arr, val) {
  // check if array has length greater than 0
  if (arr.length === 0) {
    return -1;
  }

  // beginning of array index
  let start = 0;
  // end of array index
  let end = arr.length - 1;
  // middle of array index
  let middle = Math.floor((start + end) / 2);

  // prevent start index from ever getting bigger than end index
  while (start <= end) {
    if (arr[middle] === val) {
      return middle;
    } else if (val < arr[middle]) {
      // check if value is less than middle, if yes, middle becomes new end
      end = middle - 1;
    } else {
      // check if value is more than middle, if yes, middle becomes new beginning
      start = middle + 1;
    }
    // recalculate new middle of new array
    middle = Math.floor((start + end) / 2);
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
