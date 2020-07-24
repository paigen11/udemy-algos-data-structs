/* a sorting algo where largest value bubble to the top

the two elements in an array are compared and if the first element is larger than the second, swap
if it's not, don't swap and keep checking until you get through the array

and repeat again from the beginning comparing each two set of numbers in the array

swap function
function swap(arr, idx1, idx2){
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

bubblesort takes array
start looping from var i at end of array towards beginning
start inner loop var j from beginning until i - 1
if arr j is greater than arr j + 1, swap
return sorted array
 */

function bubbleSort(arr) {
  // start looping array at end
  for (var i = arr.length; i >= 0; i--) {
    // start inner loop from beginning
    // and each time remove the newest end number from being compared in the next pass
    for (var j = 0; j < i - 1; j++) {
      // console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([4, 3, 1, 2, 5])); // [1,2,3,4,5]

/* bubble sort's not so great if an array is semi-sorted already 
because it will still try to go through the whole thing, let's optimize this */

function optimalBubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i >= 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      // console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
