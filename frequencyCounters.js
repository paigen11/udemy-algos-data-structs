/* this pattern uses objects or sets to collect values/frequencies of values

this can often avoid the need for nested loops or o(n^2) operations with strings */

// example: write a function called same, which accepts two arrays
// the function should return true if every value in the array
// has its corresponding value squared in the second array
// the frequency of values must be the same

// naive solution - o(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// inputs [1,2,3,2] [9,1,4,4]
const input1 = [1, 2, 3, 2];
const input2 = [9, 1, 4, 4];

console.log(same(input1, input2));

// refactored solution - o(n)
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // create two objects that know how many times each number appears in the array
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  // compare if the number in fq1 is even in fq2
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // if it is, does the frequency count match
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

const input3 = [1, 2, 3, 2, 5];
const input4 = [9, 1, 4, 4, 11];
console.log(same2(input3, input4));
