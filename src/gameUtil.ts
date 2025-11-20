/**
 * helper funcs for 
 *      easy, medium, hard, ai moves
 *      checking for a win
 *          
 */

// =========================================
// WINNING COMBOS
// =========================================
export const WINNING_COMBOS = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Col 1
    [1, 4, 7], // Col 2
    [2, 5, 8], // Col 3
    [0, 4, 8], // Diag 1
    [2, 4, 6], // Diag 2
  ];
  
  // =========================================
  // Flatten board into a 1D array
  // =========================================
  export const flattenBoard = (board: ("X" | "O" | null)[][]): ("X" | "O" | null)[] => {
    return board.flat();
  };
  
  // =========================================
  // Check for a win using WINNING_COMBOS
  // =========================================
  export const checkForAWin = (board: ("X" | "O" | null)[][]): "X" | "O" | null => {
    const flat = flattenBoard(board);
  
    for (const combo of WINNING_COMBOS) {
      const [a, b, c] = combo;
      if (flat[a] && flat[a] === flat[b] && flat[a] === flat[c]) {
        return flat[a];
      }
    }
    return null;
  };
  
  // =========================================
  // Get index positions of all empty cells
  // =========================================
  export const getEmptyCells = (board: ("X" | "O" | null)[][]): number[] => {
    const flat = flattenBoard(board);
    return flat
      .map((val, idx) => (val === null ? idx : null))
      .filter((v) => v !== null) as number[];
  };
  
  // =========================================
  // Create a new board with a move applied
  // =========================================
  export const simulateMove = (
    board: ("X" | "O" | null)[][],
    index: number,
    player: "X" | "O"
  ): ("X" | "O" | null)[][] => {
    const newBoard = board.map((row) => [...row]); // deep copy
    const row = Math.floor(index / 3);
    const col = index % 3;
    newBoard[row][col] = player;
    return newBoard;
  };
  
  // =========================================
  // Easy AI — pick a random empty cell
  // =========================================
  export const easyMove = (board: ("X" | "O" | null)[][]): number => {
    const empty = getEmptyCells(board);
    return empty[Math.floor(Math.random() * empty.length)];
  };
  
  // =========================================
  // Medium AI — try to win, else random
  // =========================================
  export const mediumMove = (board: ("X" | "O" | null)[][], aiPlayer: "X" | "O"): number => {
    const empty = getEmptyCells(board);
  
    for (const index of empty) {
      const testBoard = simulateMove(board, index, aiPlayer);
      if (checkForAWin(testBoard) === aiPlayer) return index;
    }
  
    return easyMove(board);
  };
  
  // =========================================
  // Hard AI — try to win, block, else random
  // =========================================
  export const hardMove = (
    board: ("X" | "O" | null)[][],
    aiPlayer: "X" | "O",
    userPlayer: "X" | "O"
  ): number => {
    const empty = getEmptyCells(board);
  
    // 1) Try to win
    for (const index of empty) {
      const testBoard = simulateMove(board, index, aiPlayer);
      if (checkForAWin(testBoard) === aiPlayer) return index;
    }
  
    // 2) Try to block
    for (const index of empty) {
      const testBoard = simulateMove(board, index, userPlayer);
      if (checkForAWin(testBoard) === userPlayer) return index;
    }
  
    // 3) Otherwise random
    return easyMove(board);
  };
  