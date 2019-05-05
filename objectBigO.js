// oject data structures - unordered key / value pairs
// they work well when you don't need order
// when you need fast access / insertion and removal

let instructor = {
  firstName: 'Kelly',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

// big O of objects
/* insertion - o(1)<
  removal - o(1),
  searching - o(n),
  access - o(1)

  - when you don't need ordering, objects are a good choice */

// searching is o(n), you'd have to potentially go through every preperty
// for insert, remove, access or update, it's o(1), because order isn't important in an oject

// big o of object methods
/*  Object.keys - o(n),
  Object.values - o(n),
  Object.entries - o(n),
  hasOwnProperty - o(1)
 */

Object.keys(instructor);
// [ 'firstName', 'isInstructor', 'favoriteNumbers' ]

Object.values(instructor);
// [ 'Kelly', true, [ 1, 2, 3, 4 ] ]

Object.entries(instructor);
/* [ 'firstName', 'Kelly' ],
[ 'isInstructor', true ],
[ 'favoriteNumbers', [ 1, 2, 3, 4 ] ] ] 
*/

instructor.hasOwnProperty('firstName');
// true
