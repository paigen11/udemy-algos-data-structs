## Queues
### Sequential access data structure which follows the FIFO principle (first in first out) - like a line for a ride at an amusement park
### For queues, new objects are added to the back and older elements are removed from the front

### Common methods
- Enqueque - adds object to tail end of queue
- Dequeue - removes object from head of queue
- Peek - returns the object that's at the forefront of the queue
- Contains - returns a boolean of whether or not queue contains that object

### Queue big o
- Accessing = o(n) - sequential access
- Searching = o(n) - same reason as above - sequential
- Inserting / deleting = o(1) - we can only ever enqueue or dequeue from the tail or head

### Real world uses
- Job scheduling on a computer
- Printer queueing
- The list goes on