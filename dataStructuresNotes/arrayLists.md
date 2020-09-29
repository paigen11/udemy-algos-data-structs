## ArrayLists
### This is the growing array

### The arrayList is backed by an array in memory, so it has a lot of similar functionality to an array
- Some languages (like Python and JavaScript) mash arrays and arrayLists together, but others (Java and C#) consider them to be two different array types

### ArrayLists cannot be immediately populated with data upon instantiation like arrays can
### And because it belongs to the array class, it has pre-built methods alreay at our disposal (methods vary by language)
### Common methods
- Add - two types: one just takes an object and appends to end of list, second takes object and index and inserts at particular index in arrayList
- Remove - also two types: takes integer and removes object at index provided, second takes object and removes first instance of object passed into array list
- Get - same as referencing index for an array
- Set - how we replace elements within an arrayList (takes index, then object)
- Clear - wipes out every element in the arrayList
- toArray - used to convert an arrayList to an array (for when you need strengths of one array type object or another)

## ArrayList big O
- Accessing / reading = o(1) - arrayList stores pointers / references to the locations of objects contiguously in memory instead of actual elements stored contiguously like arrays
- Searching = o(n) - same reason as arrays are o(n)
- Inserting / deleting = o(n) - same as arrays too - everything else has to shift to accommodate the new insert or delete

## Comparing / Contrasting with Arrays
### Arrays
- Fixed size
- Can store all data types
- Methods need to be created
- Doesn't require much memory use or upkeep
### ArrayList
- Dynamic size
- Can only store objects
- Methods are created for you
- Requires more memory use and upkeep

