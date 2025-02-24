
export class ChessBoard {
    constructor() {
      this.board = new Map();
      this.initializeBoard();
    }
  
    initializeBoard() {
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          this.board.set(`${i},${j}`, this.getValidMoves(i, j));
        }
      }
    }
  
    getValidMoves(x, y) {
      const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
      ];
      return moves
        .map(([dx, dy]) => [x + dx, y + dy])
        .filter(([nx, ny]) => nx >= 0 && nx < 8 && ny >= 0 && ny < 8);
    }
  
    knightMoves(start, end) {
      const queue = [[start]];
      const visited = new Set();
      const endKey = end.toString();
  
      while (queue.length > 0) {
        const path = queue.shift();
        const square = path[path.length - 1];
        const squareKey = square.toString();
  
        if (squareKey === endKey) {
          return path;
        }
  
        if (!visited.has(squareKey)) {
          visited.add(squareKey);
          const moves = this.board.get(squareKey);
          for (const move of moves) {
            if (!visited.has(move.toString())) {
              queue.push([...path, move]);
            }
          }
        }
      }
  
      return null; // No path found
    }
  }