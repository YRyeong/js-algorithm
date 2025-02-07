function solveNqueens(n) {
    let board = Array(n).fill().map(() => Array(n).fill(false)); // n x n matrix
    let solutions = []; // store all solutions

    function isValid(row, col) { // check if the current position is valid to place a queen
        for (let i = 0; i < row; i++) { // check the same column
            if (board[i][col]) { // if there is a queen in the same column
                return false; // return false
            }
        }

        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) { // check the left diagonal
            if (board[i][j]) { // if there is a queen in the left diagonal
                return false; // return false
            }
        }

        for (let i = row, j = col; i >= 0 && j < n; i--, j++) { // check the right diagonal
            if (board[i][j]) { // if there is a queen in the right diagonal
                return false; // return false
            }
        }
    
        return true; // if there is no queen in the same column, left diagonal, and right diagonal, return true
    }

    function placeQueen(row) { // place a queen in the current row
        if (row === n) { // if all queens are placed
            solutions.push(board.map(row => row.map(col => (col ? 'Q' : '.')).join(''))); // store the solution
            return;
        }

        for (let col = 0; col < n; col++) { // iterate through each column
            if (isValid(row, col)) { // if the current position is valid to place a queen
                board[row][col] = true; // place a queen
                placeQueen(row + 1); // move to the next row
                board[row][col] = false; // backtrack
            }
        }
    }

    placeQueen(0); // start from the first row
    return solutions; // return all solutions
}

console.log(solveNqueens(4)); // [['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']]