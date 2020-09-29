## LinkedLists
### Sequential access linear data structure in which every element is a separate object called a Node, which has 2 parts
- The data
- The reference (pointer) which points to the next Node in the list

### Each element in a linked list can be an object with multiple properties stored in it

### Adding or removing elements can be inserted or deleted from anywhere in the linked list (data can flow in and out of any point)
- You can add / remove from head
- Add / remove from middle
- Add / remove from tail

#### Adding to head 
- Make the new Node's pointer point to current head of linked list
#### Removing from head
- Set head Node's pointer to a null value
#### Adding in middle of linked list
- Make pointer of new Node point to Node after location we want to insert at
- Set Node before the location we want to insert at to point towards the new Node
#### Removing in middle of linked list
- Make pointer of Node previous to the one we're removing, to now point to Node after the one we're removing
#### Adding to tail
- Make current tail point towawrds the new Node you want to add
#### Removing from tail
- Set previous tail to point toward a null value instead of current tail

### LinkedList big o
- Accessing = o(n) - have to cycle through all nodes to access element we want
- Searching = o(n) - sequentially search through all nodes to reach the one we want
- Inserting / deleting = o(n) for middle inserts / deletes or o(1) for inserts / deletes at beginning or ending of list

### Uses
- LinkedLists can back other data structures like stacks and queues
- They can be used for lists (like a Spotify playlist or photo carousel too)

### Gotchas
- LinkedLists can only go forward, never backward (that's for doubly linked lists)
