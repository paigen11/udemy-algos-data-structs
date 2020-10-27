## Heaps
### A special tree where all parent nodes compare to their children nodes in some specific way by being more extreme or less extreme
- Either greater than or less than
- Determines where the data is stored
- Usually dependent on the parent node's value

### Heap types
- Min heaps
* The value at the root node is the minimum amongst all its children
* This must be the same recursively for all parent nodes contained within the heap

- Max heaps
* Value of root node is the maximum of all its children
* This must be the same recursively for all parent nodes contained within the heap

### Heap implementations
- HeapSort is a sorting algorithm which takes a list of elements, builds them into a  min or max heap, and removes the root Node continuously to make a sorted list
- Priority queues are an advanced data structure used to designate tasks and assign computer powers based on how urgent a matter is