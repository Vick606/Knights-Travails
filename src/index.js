import { ChessBoard } from './knightMoves';
import { createChessboard, highlightPath } from './chessboard';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    createChessboard();
    const board = new ChessBoard();

    document.getElementById('visualize').addEventListener('click', () => {
        const start = document.getElementById('start').value.split(',').map(Number);
        const end = document.getElementById('end').value.split(',').map(Number);
        const path = board.knightMoves(start, end);
        highlightPath(path);
        
        const output = document.getElementById('output');
        output.innerHTML = `<i class="fas fa-check-circle"></i> You made it in ${path.length - 1} moves! Here's your path:<br>`;
        path.forEach(position => {
            output.innerHTML += `<i class="fas fa-chevron-right"></i> [${position[0]},${position[1]}]<br>`;
        });
    });
});