## Graphs
### A nonlinear data structure consisting of nodes and edges
- There's a finite set of nodes (vertices)
- And nodes are connected by edges
- But there's multiple starting points and multiple edges

### Graph basics
- Adjacent nodes are nodes connected by single edge
- Undirected graphs are graphs where the direction you traverse the nodes isn't important (usually indicated by a lack of arrows)
- Directed graphs are graphs in which the direction you traverse the nodes IS important (usually indicated by arrows showing direction from one node to the next)
- Cyclic graphs are graphs which contain at least one node that goes back to itself (all undirected graphs are cyclical)
- An acylic graph contains no path from any one node which leads back to itself
- Weighted graphs associate a numerical value with each edge (cost), and each weight represents some property of info that you're trying to convey

### Types of graphs
- Undirected cyclical heaps with weighted edges - used through Dijkstra's shortest path algorithm (Google maps, telephone networks, etc.)
- Unweighted cyclical graphs are used in the follower system of a majority of social websites (FB, Insta, TW)