## Doubly Linked Lists
### Sequential access data structure which stores data in the form of Nodes
- Able to traverse both forwards and backwards using pointers

### Adding and removing nodes from doubly linked lists
- Add / remove from head
- Add / remove from middle
- Add / remove from tail

#### Adding to head
- Set new Node's next to point towards current head of list
- Take new Node to insert, and set its prev to null
- Set current head's prev to point towards new Node
#### Removing from head
- Set head Node's next to point towards null value
- Set second Node's prev to also point towards null value
#### Inserting into middle of doubly linked list
- Set new Node's prev to point towards Node prev to position you want to insert at
- Set new Node's next to point towards Node after position you want to insert at
- Set next and prev on the Nodes before and after the one you're inserting to point towards new node
#### Removing from middle of doubly linked list
- Set Node before one to remove's next to point towards Node after one to remove
- Set Node after the one to remove's prev to point towards Node before one we want to remove
- Set both pointers of Node to remove to point towards null
#### Add to tail
- Set next pointer of curr tail to point towards new Node to become tail
- Set prev of new Node being added to point towards current tail of list
- Make new Node's next point to null
#### Remove from tail
- Set tail Node's prev to point towards null
- Set second to last Node's next to also point towards null

### Doubly linked lists big o (same as linked lists)
- Accessing = o(n) - have to cycle through all nodes to access element we want
- Searching = o(n) - sequentially search through all nodes to reach the one we want
- Inserting / deleting = o(n) for middle inserts / deletes or o(1) for inserts / deletes at beginning or ending of list

### Uses
- Browser caches
- Undo / redo functionality