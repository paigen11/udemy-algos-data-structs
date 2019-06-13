/* write a function called power which accepts a base and an exponent.
the function should return the power of the base to the exponent
this function should mimic the functionality of Math.pow() - do not worry about negative
bases and exponents
*/

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp) {
  // check if the exponent is 0
  if (exp === 0) {
    return 1;
  }

  // if exp is 1 or more,
  // multiply base by the next number from power
  // before it returns 1 until it reaches 1, then go back up the stack
  else {
    // console.log(base);
    return base * power(base, exp - 1);
  }
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
