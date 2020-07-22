/* write a recursive function called fib that accepts a number and returns the nth
number in the Fibonacci sequence. Recall the sequence is 1,1,2,3,5,8... which starts with 1
and 1, and where every number thereafter is equal to the sum of the previous two numbers */

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num){
  // check if num is 2 or less, the answer is always 1 there
  if(num <= 2){
    return 1;
  }

  // otherwise, work backwards from the number given, finding the sum until the num eventually ends up 2
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(4))
console.log(fib(10))
console.log(fib(28))