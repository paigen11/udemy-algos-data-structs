### Best time complexity = 0(1)
#### Regardless of if you're accessing, searching, inserting or deleting, the time to do so remains the same every time. This is the gold standard.

### Next best = O(log n)
#### Still fast to complete, but it gets more efficient as the size of the data set increases. An example would be a binary search function.

### The last OK time comlexity = O(n)
#### This is the last of the 'decent' equations. If there's 1 element it takes 1 operation to complete, if there's 1,000 it takes 1,000 operations to complete. Like any for loop ever written.

### Relatively bad = O(n log n)
#### As the size of the data set increases, so does the time it takes to complete.

### Plain bad = O(n^2) and O(2^n)
#### Exponential in structure. The larger the dataset, the more complex (and inefficient) it becomes.
