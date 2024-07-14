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
        document.getElementById('output').textContent = `Path: ${JSON.stringify(path)}`;
    });
});