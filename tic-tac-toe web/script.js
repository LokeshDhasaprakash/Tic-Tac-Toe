const cells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('.reset-button');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleCellClick(e) {
  const index = parseInt(e.target.getAttribute('data-cell'));
  if (gameBoard[index] !== '' || checkWinner()) return;
  gameBoard[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  if (checkWinner()) {
    alert(${currentPlayer} wins!);
    resetGame();
    return;
  }
  if (checkDraw()) {
    alert("It's a draw!");
    resetGame();
    return;
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  cells.forEach(cell => {
    cell.textContent = '';
  });
}

function checkWinner() {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return gameBoard[index] === currentPlayer;
    });
  });
}

function checkDraw() {
  return gameBoard.every(cell => {
    return cell !== '';
  });
}

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);