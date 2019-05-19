/* implement a function called areThereDuplicates which accepts a
variable number of arguments, and checks whether there are
any duplicates among the arguments passed in. You can solve this using
the frequencyCounter pattern OR the multiple pointers pattern

examples: areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true

restrictions:
- time o(n)
- space o(n) 
*/

// spread however many arguments there are into an array
function areThereDuplicates(...args) {
  let argsFrequency = {};
  // create a frequency object of valuse occurring in the array
  // a for...of loop can loop through any kind of iterable (string, array, set, map)
  for (let val of args) {
    argsFrequency[val] = (argsFrequency[val] || 0) + 1;
  }
  // loop through the length of the sorted array
  for (var i = 0; i < args.length; i++) {
    let currentVal = args[i];
    // check if the frequency object, by value, ever has a value greater than 1
    if (argsFrequency[currentVal] > 1) {
      return true;
    }
  }
  return false;

  // another solution, loop through the object props
  // and check if any value is greater than 1
  // you can use for...in to loop through object properties
  // for (val in argsFrequency) {
  //   if (argsFrequency[val] > 1) {
  //     return true;
  //   }
  // }
  // return false;
}

console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));

// another frequency counter solution
function areThereDuplicates2() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// multiple pointers solution
function areThereDuplicates3(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// one liner using Set
function areThereDuplicates4() {
  return new Set(arguments).size !== arguments.length;
}
// console.log(areThereDuplicates4(1, 2, 2));
// console.log(areThereDuplicates4(1, 2, 3));
// console.log(areThereDuplicates4('a', 'b', 'c', 'a'));
