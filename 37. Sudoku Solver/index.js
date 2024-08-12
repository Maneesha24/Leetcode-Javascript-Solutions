/**
 * @author maneeshavenigalla
 * Write a program to solve a Sudoku puzzle by filling the empty cells. A sudoku solution must satisfy all of the following rules:
 * Each of the digits 1-9 must occur exactly once in each row
 * Each of the digits 1-9 must occur exactly once in each column
 * Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid
 * The '.' character indicates empty cells.
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {

      if (board[i][j] === ".") {

        for (let l = 1; l < 10; l++) {
          if (isValid(board, i, j, l.toString())) {
            board[i][j] = l.toString();
            let solved = solveSudoku(board);

            if (solved !== false) {
              return solved;
            }

            board[i][j] = ".";
            
          }
        }

        return false;
      }
    }
  }
  return board;
};

const isValid = (board, i, j, letter) => {
  for (let p = 0; p < board.length; p++) {
    if (board[i][p] === letter) {
      return false;
    }
    if (board[p][j] === letter) {
      return false;
    }

    let gridVal =
      board[3 * Math.floor(i / 3) + Math.floor(p / 3)][
        3 * Math.floor(j / 3) + (p % 3)
      ];
    if (gridVal === letter) {
      return false;
    }
  }

  return true;
};

module.exports = solveSudoku;
