// what is an algorithm?
// a process or set of steps to accomplish a certain task

// algorithm problem solving
// 1. UNDERSTAND THE PROBLEM
// ask questions to clarify before you get rolling
// - can you restate the problem in your own words
// - what are the inputs into the problem
// - what are the outputs that should come from the solution to the probblem
// - can outputs be determined from the inputs? do you have enough info to solve it?
// - how to label important pieces of problem

// example: write a function that takes two numbers and returns their sum

// - can you restate the problem in your own words
'implement addition';
// - what are the inputs into the problem
/* ints? floats? what about strings for large numbers? */
// - what are the outputs that should come from the solution to the probblem
/* ints? floats? what about strings for large numbers? */
// - can outputs be determined from the inputs? do you have enough info to solve it?
// - how to label important pieces of problem
/* name function add or sum, name inputs num1, num2, etc. */

// 2. COME UP WITH EXAMPLES
// coming up with examples can help you understand the problem better
// examples provide sanity checks that your eventual solution works how it should
// - start with simple examples, with an input and output
// - progress to more complex examples
// - explore examples with empty inputs
// - explore examples with invalid inputs

// example: write a function, which takes in a string and returns counts of each character in the string

// simple examples
charCount('aaaa'); // {a:4} => question: should every letter already be there set to 0?
charCount('hello'); // {h:1, e:1, l:2, o:1}

// complex examples
('my phone number is 99665'); // do we handle numbers, spaces, special characters?
('hello hi');

// empty examples
// charCount(''); // what happens here?

// invalid examples
// charCount(null); // how to handle these?
// charCount(1234);
// charCount({});

// 3. BREAK IT DOWN
// explicitly write out the steps you need to take
/*- you'll think about the code before you write it,
  catch any lingering issues or misunderstandings before
  you dive in with syntax as well */

// simplified breakdown
function charCount(str) {
  // do something
  // return an object with keys that are lowercase alphanumeric characters in the string
}

// more step by step approach now
function charCount(str) {
  // make object to return at end
  // loop over string (this is where the bulk of the logic happens), for each character...
  // if char is a number/letter and key in object, add one to count
  // if char is a number/letter and not in object, add it and set value to 1
  // if char is anything else, skip it
  // return object at end
}

// 4. SOLVE / SIMPLIFY
// solve the problem if you can, and if you can't solve a simpler probblem
// simpliify
// - find the core difficulty in what you're trying to do
// - temporarily ignore that difficulty
// - write a simplified solution
// - then incorporate theat difficulty back in

function charCount(string) {
  let result = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    // use regex to determine if it's an alphanumeric character :blech:
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}

console.log(charCount('hello'));
console.log(charCount('Hi There!'));

// 5. LOOK BACK & REFACTOR
// refactoring questions
/* - can you check the result?
  - derive the result differently?
  - understand it a glance (readable),
  - use the result or method for another problem?
  - improve the performance of your solution,
  - think of other ways to refactor,
  - how have other people solved it? */

// updates you could make to the function
// replace the for loop with a for...of
// also replace the if else loop with an either or if it's truthy or falsy
// not sure about the performance of regex in JS,
// could be a better way just checking character code numbers to determine it
function charCount2(string) {
  let obj = {};
  for (let char of string) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

console.log(charCount2('hello'));
console.log(charCount2('Hi There!'));
