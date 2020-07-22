/*  linear search 

simplest search type: check an input against a list of options 
one at a time to see if it's the value you want until it hits the end

things like indexOf, includes, find, and findIndex do just this in JS already */

// linear search (can start at the beginning moving forward or end moving backwards)

// time complexity: o(n) or linear time

// function that accepts array and a value,
// loop through the entire array and check if the array element is equal to value
// if it is return the index, if it doesn't exist return -1

function linearSearch(arr, numToFind) {
  // check if arr length is greater than 0
  if (arr.length === 0) {
    return -1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === numToFind) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15));
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
console.log(linearSearch([100], 100));
console.log(linearSearch([1, 2, 3, 4, 5], 6));
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10));
console.log(linearSearch([100], 200));
