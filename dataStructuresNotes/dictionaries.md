## Dictionaries
### Abstract data structure which stores data in the form of key / value pairs (maps)

### Dictionaries are indexed using these keys instead of a numerical index
- Keys can be pretty much an primitive data type you can think of
- Values can be anything (strings, ints, more dictionaries)

### Restrictions
- Every key can only appear once in the dictionary (like a set)
- Each key can only have one value 
- There can HOWEVER be duplicates as values

### Dictionaries big o
- They are often implemented as hash tables
- Hash tables cut down the amount of nil values, while also allowing for the info to be stored in a way that's easily accessible (hash functions)
### Hash functions
- A function that takes all the keys for a given dictionary and strategically maps them to certain index locations in an array so they can be easily retrieved
- A good hashing function will take a key and reliably place it somewhere in the table so it can be accessed later by the computer
#### Hash collisions can happen though - so open addressing happens, which means putting one key in some other index location separate from the one returned to us by the hash function
### Closed addressing uses linked lists to chain together keys which result in the same hash value (with the drawback being looking through however many items are stored in linked lists under one hashed index)

- Because of hash functions, all functions (accessing, searching, inserting and deleting) are all o(1) because of hash tables, which make look up very fast


