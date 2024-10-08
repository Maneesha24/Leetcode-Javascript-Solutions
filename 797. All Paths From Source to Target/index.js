/**
 * @author maneeshavenigalla
 * Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order. 
 * The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = (graph) => {
    let result = [];
    let set = [];

    const dfs = (idx) => {
        set.push(idx);
        if (idx === graph.length - 1) {
            result.push([...set]);
        } else {
            for (const node of graph[idx]) {
                dfs(node);
            }
        }

        set.pop();
    }

    dfs(0);
    return result;
}

module.exports = allPathsSourceTarget;