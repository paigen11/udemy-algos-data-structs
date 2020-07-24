/* 
  sorting is rearranging items in a collection so they're in some kind of order
  examples: smallest to largest, alphabetically, based on date, etc.

  sort's a common task so it's good to know how it works
  each algorithm has its own pros and cons

  js has a sort method, but it doesn't always work as expected - because it uses unicode point value to sort
  OR you can tell js how to sort - it accepts an optional comparator function, 
  which looks at a pair of elements and returns the order based on the value
  - if number is negative, a is before b
  - if number is positive, b is before a
  - if number is same, it doesn't matter if a or b comes first
*/
