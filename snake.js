let snake = document.getElementById('snake');
let currentDirection = 'right'; // Default direction
let previousDirection = 'right'; // To store the previous direction
let moveInterval;
const containerWidth = 240; // Width of #place
const containerHeight = 240; // Height of #place
const snakeSize = 12; // Width and height of the snake
let snak_play = document.getElementById('snakeagain');
let gameover = false;

// Define opposite directions for the snake
const oppositeDirections = {
    'left': 'right',
    'right': 'left',
    'up': 'down',
    'down': 'up'
};

// Change direction on button click, enforce no opposite direction movement
function changeDirection(direction) {
    if (previousDirection && oppositeDirections[previousDirection] === direction) {
        console.log(`${previousDirection}`);
        return; // Prevent changing to the opposite direction immediately
    }
    
    previousDirection = currentDirection; // Update previous direction
    currentDirection = direction;
}

// Move the snake in the current direction
function moveSnake() {
    const currentLeft = parseInt(getComputedStyle(snake).left, 10) || 0;
    const currentTop = parseInt(getComputedStyle(snake).top, 10) || 0;

    // Check boundaries
    if (
        (currentDirection === 'left' && currentLeft <= 0) || // Hits left wall
        (currentDirection === 'right' && currentLeft >= containerWidth - snakeSize) || // Hits right wall
        (currentDirection === 'up' && currentTop <= 0) || // Hits top wall
        (currentDirection === 'down' && currentTop >= containerHeight - snakeSize) // Hits bottom wall
    ) {
        clearInterval(moveInterval); // Stop movement
        alert('Game Over! The snake hit the wall.');
        snak_play.textContent = 'play again';
        gameover = true;
        return;
    }

    // Move the snake based on the current direction
    switch (currentDirection) {
        case 'left':
            snake.style.left = `${currentLeft - snakeSize}px`;
            break;
        case 'right':
            snake.style.left = `${currentLeft + snakeSize}px`;
            break;
        case 'up':
            snake.style.top = `${currentTop - snakeSize}px`;
            break;
        case 'down':
            snake.style.top = `${currentTop + snakeSize}px`;
            break;
    }
}

// Play again button logic
snak_play.addEventListener('click', () => {
    // Start moving the snake every 200ms
    moveInterval = setInterval(moveSnake, 200);
    if (gameover === true) {
        snake.style.top = '120px';
        snake.style.left = '120px';
        gameover = false; // Reset gameover status
        previousDirection = ''; // Reset previous direction
    }
});

// Snake game button navigation
const snake_btn = document.getElementById('snake_btn');
snake_btn.addEventListener('click', () => {
    homepage.style.display = 'none';
    game3.style.display = 'flex';
    h.style.display = 'none';
    ab.style.display = 'none';
    p.style.display = 'none';
});

// Back button to return to homepage
const backpage4 = document.getElementById('back4');
backpage4.addEventListener('click', () => {
    homepage.style.display = 'block';
    game3.style.display = 'none';
    h.style.display = 'block';
    ab.style.display = 'block';
    p.style.display = 'block';
});
