// arrays - ordered lists

let names = ['Michael', 'Melissa', 'Andrea'];

let values = [true, {}, [], 2, 'awesome'];

// when to use them
/* when you need order
  when you need fast access / insertion and removal
*/

// big O of arrays
/* insertion - it depends,
  removal - it depends,
  searching - o(n),
  access - o(1)
  */

// access - if you have a valid index, you can jump straight to that index in the array - constant time
/* adding -  adding to the end is constant time 
BUT adding to the beginning is o(n) because every other element must be re-indexed after it */
/* removal - same thing happens when you remove from the beginning of an array */
/* searching - the best you can do is o(n) because potentially every element must be checked */
