## Trees
### Trees store data hierarchically, as opposed to linearly
### Trees are abstract data structures containing a series of linked nodes connected together to form a hierarchical representation of information
### They're like a linked list where each node has the option of pointing towards multiple nodes
- Nodes can also be called "vertices"
- The connections between them are "edges"

### Tree terminology
- The "root node" is the topmost node of a tree
- "Child nodes" have an edge connecting it to another node one level above itself
- A "parent node" is any node which has 1 or more child nodes
- A "leaf node" is a node with no child nodes
- "Height" is the number of edges on the longest possible path down towards a leaf
- "Depth" is the number of edges required to get from a particular node to the root node

### Trees are great for storing hierarchical data, but their power increases when you choose how to organize their data

### Tree types
- Binary search trees - variation of the standard tree with 3 restrictions to organize data:
* a node can have at most 2 children
* for any parent node, the left child has a value less than the parent, and the right child has a greater value than the parent
* no 2 nodes have the same value
- The biggest advantage of bst is searching it in logarithmic time
- This makes them popular for storing large quantities of data that's easily searchable and translates to quick accesses, inserts, and deletes

- Tries - a tree only used in specific situations - it's a tree data structure whose nodes store letters of the alphabet in the form of characters
- This tree of characters can be constructed in such a way which allows for quickly retrieving words in the form of Strings, by traversing down a path of the trie in a certain way
- A trie's root node contains an array of references to nodes with letters in them
- Then that child contains an array referencing all the letters that can be associated with that first child letter... repeat for every letter forever
- Flagging is how the end of a word is marked to let the computer know the end of a word has occurred
- Uses: autocomplete, spellcheck, somewhere where the entire English dictionary needs to be stored

