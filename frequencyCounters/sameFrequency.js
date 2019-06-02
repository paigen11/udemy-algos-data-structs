/* write a function called sameFrequency. given two positive integers
find out if the two numbers have the same frequency of digits

the solution must have the following complexities
- time o(n) 

sample input: sameFrequency(182, 281)  // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222)  // false
*/

function sameFrequency(num1, num2) {
  let arr1 = num1.toString().split('');
  let arr2 = num2.toString().split('');
  let numberFrequency = {};

  // check if numbers have same amount of digits
  if (arr1.length !== arr2.length) {
    return false;
  }

  // create an object of counts of numbers for one of the arrays
  for (let val of arr1) {
    numberFrequency[val] = (numberFrequency[val] || 0) + 1;
  }
  console.log(numberFrequency);

  // loop over the second array
  for (let i = 0; i < arr2.length; i++) {
    let val2 = arr2[i];

    // check if the values in the second array exist in the numberFrequency object
    if (!numberFrequency[val2]) {
      return false;
    } else {
      // if it does exist in the object, remove one from the value
      numberFrequency[val2] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(22, 222));
console.log(sameFrequency(3589578, 5879385));
