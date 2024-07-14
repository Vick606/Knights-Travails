export function createChessboard() {
    const board = document.getElementById('chessboard');
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.dataset.x = i;
            square.dataset.y = j;
            if ((i + j) % 2 === 0) {
                square.classList.add('white');
            } else {
                square.classList.add('black');
            }
            board.appendChild(square);
        }
    }
}

export function highlightPath(path) {
    clearHighlights();
    path.forEach((position, index) => {
        const [x, y] = position;
        const square = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
        setTimeout(() => {
            square.textContent = index;
            square.classList.add('highlight');
        }, index * 500); // Delay each highlight for a nice animation effect
    });
}

function clearHighlights() {
    document.querySelectorAll('.square').forEach(square => {
        square.textContent = '';
        square.classList.remove('highlight');
    });
}