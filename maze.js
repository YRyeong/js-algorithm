let maze = [ // 5 x 5 matrix
    ['S', 0, 1, 0, 0], // S: start, E: end, 0: path, 1: wall
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 'E'],
    [1, 1, 1, 0, 1],
];

function dfs(maze, position = [0, 0], path = []) { // [0, 0] -> [0, 1] -> [0, 2] -> [0, 3] -> [0, 4] -> [1, 4] -> [2, 4] -> [3, 4] -> [4, 4] 
    let [x, y] = position; // x: row, y: column
    if (maze[x][y] === 'E') return [...path, position]; // if the current position is the end, return the path
    
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // [x, y], up, right, down, left
    for (let [dx, dy] of directions) { // [0, 1] -> [1, 0] -> [0, -1] -> [-1, 0]
        let newX = x + dx, newY = y + dy;
        if (newX >= 0 && newX < maze.length && newY >= 0 && newY < maze[0].length && (maze[newX][newY] === 0 || maze[newX][newY] === 'E')) {
            // if the new position is valid
            maze[x][y] = 1; // mark the current position as visited
            let result = dfs(maze, [newX, newY], [...path, position]); // move to the new position
            if (result) return result; // if the new position is the end, return the path
        }
    }
    return null; // if there is no path to the end, return null
}

console.log(dfs(maze)); // [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [1, 4], [2, 4], [3, 4], [4, 4]]