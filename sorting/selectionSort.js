/* similar to bubble sort but instead of first placing large values into sorted
position, it places small values into sorted position

so sorted data accumulates at the beginning first instead of the end first

store the first element as the smallest value seen so far
compare this item to next item in array until you find a smaller number
if smaller num is found, that number is the new min and continue to end of array
if min is not the value(index) you initially began with, swap the two
repeat this with the next element until the array is sorted

time complexity: not very good overall, it's roughly O n^2 
(if for some reason you want to minimize the number of total swaps i.e avoiding writing to memory, it's better)

loop
loop
swap
*/

function selectionSort(arr) {
  if (!arr.length) {
    return [];
  }

  // loop over whole array
  for (var i = 0; i < arr.length; i++) {
    // set the first element as the smallest value
    let min = i;
    // loop through the inner loop one element ahead of i
    for (var j = i + 1; j < arr.length + 1; j++) {
      // console.log(i, j);
      // check value of arr at min and array of j
      if (arr[j] < arr[min])
        // j becomes the new index of min
        min = j;
    }
    // check if swap is necessary
    if (i !== min) {
      // swap!
      console.log(i, min);
      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
      // console.log(arr);
    }
  }
  return arr;
}

console.log(selectionSort([5, 2, 3, 1, 4])); // [1,2,3,4,5]
console.log(selectionSort([34, 22, 10, 19, 17])); // [10,17,19,22,34]
