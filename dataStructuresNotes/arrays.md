## Array basics
### Arrays are lists
### They can store anything, as long as values are of the same type (i.e. no strings mixed with ints)
### Generally they have 3 attributes: 
- A name
- A type
- A size

### An array's size is a set integer that is fixed upon creation of the array
#### Array sizes cannot be changed after they are set
- Every value in an array is stored contiguously in memory as a data structure

### Two ways to create arrays
- Create an array be defining and filling it as soon as it's created (mainly done when you already know the data to insert into the array and size of the array)
- Populate later arrays - set an initial size for the array and slowly populate as the program runs (used for user-entered info)

### To get info stored in an array, use a numerical index (the integer which corresponds to an element within the array - starting at index 0, not 1)
### Referencing an array's index is also how we replace elements within an array

## An array with an array at each index is a 2-dimensional array (a grid)
### Referencing an element here, you need 2 indexes; one for the column and one for the row

## Array big O
- Accessing / reading = o(1) - very quick lookup because arrays have defined sizes and are stored contiguously in memory
- Searching = o(n) - worst case you have to loop through the entire list to find a value
- Inserting / deleting = o(n) - because every element has to shift that's after the index where you want to insert the value (or delete the value and shift back)

## Pros and Cons
### Pros
- Good for storing similar continguous data
- o(1) accessing power
- Basic and easy to learn
### Cons
- Size of array is static and immutable once initialized
- Inserts and deletes aren't efficient
- Can be a waste of storage space
