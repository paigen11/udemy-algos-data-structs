// divide and conquer
/* the pattern involves dividing a data set into smaller chunks
and then repeating a process with a subset of data

this pattern can tremendously decrease time complexity */

// example: given a SORTED array of integers, write a function
// called search, that accepts a value and returns the index
// where the value passed to the function is located
// if the value's not found, return -1
// search([1,2,3,4,5,6,], 4) // 3
// search([1,2,3,4,5,6], 6) // 5
// search([1,2,3,4,5,6], 11) // -1

// naive solution = time complexity o(n)
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// refactored binary search solution - time complexity log(n)
function search2(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search2([1, 2, 3, 4, 5, 6], 4));
