/* write a function called averagePair. Given a sorted array of integers
and a target average, determine if there is a pair of values in the
array where the average of the pair equals the target average. There may be more than 
one pair that matches the average

time: o(n)
space: o(1)

sample input:
- averagePair([1,2,3], 2.5); // true
- averagePair([1,3,3,5,6,7,10,12,19], 8) // true
- averagePair([-1,0,3,4,5,6], 4.1) // false
- averagePair([], 4) // false
*/

function averagePair(arr, targetAverage) {
  let start = 0;
  let end = arr.length - 1;

  // check array has any items
  if (arr.length === 0) {
    return false;
  }

  while (end < arr.length) {
    let average = arr[start] + arr[end] / 2;
    // console.log(average);
    if (average === targetAverage) {
      return true;
    } else if (average < targetAverage) {
      start++;
    } else if (average > targetAverage) {
      end--;
    } else {
      return false;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
