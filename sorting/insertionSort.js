/* 
  builds up the sort by gradually creating a larger left half of the array which is always sorted

  starting array:
    [5,3,4,1,2]
  -> [3,5,4,1,2]
  -> [3,4,5,1,2]
  -> [1,3,4,5,2]
  -> [1,2,3,4,5]

  pick 2nd element in array (first element's already sorted)
  compare 2nd element to one before it and swap if needed
  continue to next elem and if it's in incorrect order, iterate through sorted portion (left side) to place element in correct place
  repeat until array is sorted

  time complexity: o n^2 worst case scenario
  space complexity: o(1)
  
*/

function insertionSort(arr) {
  // start iterating from second item
  for (var i = 1; i < arr.length; i++) {
    // this is our temp variable
    var currentVal = arr[i];
    // start iterating the inner loop from the element before and continue
    // WHILE arr[j] is a bigger value than the current being compared to it
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // compare arr[j] to current val and move it forward if current val is less than arr[j]
      arr[j + 1] = arr[j];
      // console.log(arr);
    }
    // at this point, j has decremented so you need to still do j + 1 to replace the current val in j's old position
    arr[j + 1] = currentVal;
    // console.log(arr);
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
