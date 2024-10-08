/**
 * @author maneeshavenigalla
 * You are given an integer n, the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1. Each edge is red or blue in this graph, and
 * there could be self-edges and parallel edges. You are given two arrays redEdges and blueEdges where:
 * redEdges[i] = [ai, bi] indicates that there is a directed red edge from node ai to node bi in the graph, an
 * blueEdges[j] = [uj, vj] indicates that there is a directed blue edge from node uj to node vj in the graph
 * Return an array answer of length n, where each answer[x] is the length of the shortest path from node 0 to node x such that the edge colors alternate along the
 * path, or -1 if such a path does not exist.
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
const shortestAlternatingPaths = (n, redEdges, blueEdges) => {
  const graph = {};

  for (let i = 0; i < n; i++) {
    graph[i] = { red: [], blue: [] };
  }

  for (const [i, j] of redEdges) {
    graph[i].red.push(j);
  }

  for (const [i, j] of blueEdges) {
    graph[i].blue.push(j);
  }

  const result = Array(n).fill(-1);

  const visited = {
    red: new Set(),
    blue: new Set(),
  };

  const queue = [
    [0, "red"],
    [0, "blue"],
  ];

  let len = 0;

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      let [currValue, currColor] = queue.shift();

      if (result[currValue] === -1) {
        result[currValue] = len;
      }

      const nextValues = graph[currValue][currColor];
      const nextColor = currColor === "blue" ? "red" : "blue";

      nextValues.forEach((nextValue) => {
        if (!visited[nextColor].has(nextValue)) {
          visited[nextColor].add(nextValue);
          queue.push([nextValue, nextColor]);
        }
      });
    }

    len++;
  }

  return result;
};

module.exports = shortestAlternatingPaths;
