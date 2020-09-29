## Stacks
### Arrays and arrayLists are considered random access data structures - elements can be accessed independently of each other (like pages in a book)
### Stacks are sequential access data structures - elements cannot be accessed independently without going through other elements (like a tape measure)

### Stacks are sequential access according to the LIFO principle (last in first out)
- Examples: a stack of books one on top of another

### Commons methods
- Push - pushes an object onto the TOP of the stack (from the bottom up)
- Pop - removes an element from top of stack and returned back to user (only removes from top of stack)
- Peek - allows you to get value at top of list without removing it
- Contains - used for searching through stack - returns a boolean about if value is in stack or not

### Stacks big o
- Accessing = o(n) - to reach certain element, every element on top must be popped off
- Searching = o(n) - see reason above
- Inserting / deleting = o(1) - because elements can only be added or removed from top of stack at any time

### Real world stack uses
- Recursion
- Undo/redo functions
- Back paging on web browsers


