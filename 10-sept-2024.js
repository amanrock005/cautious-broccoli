class Solution {
    isCircle(arr) {
        // your code here
        const inDegree = {};
        const outDegree = {};
        const graph = {};
        
        //initialize the degree maps and grap
        for(let i = 0; i<arr.length; i++) {
            const firstChar = arr[i][0];
            const lastChar = arr[i][arr[i].length - 1];
            
            if(!inDegree[firstChar]) inDegree[firstChar] = 0;
            if(!outDegree[firstChar]) outDegree[firstChar] = 0;
            if(!inDegree[lastChar]) inDegree[lastChar] = 0;
            if(!outDegree[lastChar]) outDegree[lastChar] = 0;
            
            outDegree[firstChar]++;
            inDegree[lastChar]++;
            
            if(!graph[firstChar]) graph[firstChar] = [];
            graph[firstChar].push(lastChar);
        }
        
        // check if in-degree matches out-degree for all charcter
        for(let char in inDegree) {
            if(inDegree[char] !== outDegree[char]) {
                return 0;
            }
        }
        
        function dfs(node, visited) {
            visited[node] = true;
            if(graph[node]) {
                for(let neighbor of graph[node]) {
                    if(!visited[neighbor]) {
                        dfs(neighbor, visited);
                    }
                }
            }
        }
        
        const visited = {};
        const startNode = arr[0][0];
        dfs(startNode, visited);
        
        // check if all nodes with an in-degree or out-degree are visited
        
        for(let char in inDegree) {
            if((inDegree[char] > 0 || outDegree[char] > 0) && !visited[char]) {
                return 0;
            }
        }
        return 1;
    }
}
