let snake = [{ x: 120, y: 120 }]; // Array to track snake segments
let currentDirection = 'right'; // Default direction
let food = document.getElementById('food');
let container = document.getElementById('place');
let moveInterval;
const gridSize = 10; // Snake and food size
const containerSize = 240; // Size of the container

document.getElementById('left').addEventListener('click', () => {
    if (currentDirection !== 'right') currentDirection = 'left';
});
document.getElementById('right').addEventListener('click', () => {
    if (currentDirection !== 'left') currentDirection = 'right';
});
document.getElementById('up').addEventListener('click', () => {
    if (currentDirection !== 'down') currentDirection = 'up';
});
document.getElementById('down').addEventListener('click', () => {
    if (currentDirection !== 'up') currentDirection = 'down';
});

// Initialize food position
let food_posx = Math.floor(Math.random() * (containerSize / gridSize)) * gridSize;
let food_posy = Math.floor(Math.random() * (containerSize / gridSize)) * gridSize;
food.style.left = `${food_posx}px`;
food.style.top = `${food_posy}px`;

function isFoodOnSnake(foodX, foodY) {
    return snake.some(segment => segment.x === foodX && segment.y === foodY);
}

function placeFood() {
    do {
        // Generate random food position (grid size is 10px)
        food_posx = Math.floor(Math.random() * (containerSize / gridSize)) * gridSize;
        food_posy = Math.floor(Math.random() * (containerSize / gridSize)) * gridSize;
    } while (isFoodOnSnake(food_posx, food_posy)); // Check for overlap with the snake

    // Update food's position
    food.style.left = `${food_posx}px`;
    food.style.top = `${food_posy}px`;
}


// Draw the snake
function drawSnake() {
    container.querySelectorAll('.snake-segment').forEach(segment => segment.remove()); // Clear old segments
    snake.forEach((segment, index) => {
        const segmentDiv = document.createElement('div');
        segmentDiv.style.width = `${gridSize}px`;
        segmentDiv.style.height = `${gridSize}px`;
        segmentDiv.style.position = 'absolute';
        segmentDiv.style.left = `${segment.x}px`;
        segmentDiv.style.top = `${segment.y}px`;
        segmentDiv.style.backgroundColor = index === 0 ? '#00ff00' : 'yellow'; // Head is green
        segmentDiv.classList.add('snake-segment');
        container.appendChild(segmentDiv);
    });
}

// Move the snake
function moveSnake() {
    const head = { ...snake[0] }; // Clone the head position
    switch (currentDirection) {
        case 'left': head.x -= gridSize; break;
        case 'right': head.x += gridSize; break;
        case 'up': head.y -= gridSize; break;
        case 'down': head.y += gridSize; break;
    }

    // Check collision with walls or self
    if (
        head.x < 0 || head.x >= containerSize || // Wall collision
        head.y < 0 || head.y >= containerSize || // Wall collision
        snake.some(segment => segment.x === head.x && segment.y === head.y) // Self collision
    ) {
        clearInterval(moveInterval);
        alert('Game Over! The snake collided.');
        return;
    }

    // Add new head to the snake
    snake.unshift(head);

    // Check if the snake eats the food
    if (head.x === food_posx && head.y === food_posy) {
        placeFood();
    } else {
        // Remove the last segment if no food is eaten
        snake.pop();
    }

    drawSnake(); // Redraw the snake
}

// Change direction with arrow keys
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft': if (currentDirection !== 'right') currentDirection = 'left'; break;
        case 'ArrowRight': if (currentDirection !== 'left') currentDirection = 'right'; break;
        case 'ArrowUp': if (currentDirection !== 'down') currentDirection = 'up'; break;
        case 'ArrowDown': if (currentDirection !== 'up') currentDirection = 'down'; break;
    }
});

// Start the game
function startGame() {
    snake = [{ x: 120, y: 120 }]; // Reset snake
    currentDirection = 'right'; // Reset direction
    clearInterval(moveInterval);
    moveInterval = setInterval(moveSnake, 200); // Move the snake every 200ms
    drawSnake(); // Draw initial snake
}

// Play Again Button
document.getElementById('snakeagain').addEventListener('click', startGame);


// Snake game button navigation
const snake_btn = document.getElementById('snake_btn');
snake_btn.addEventListener('click', () => {
    homepage.style.display = 'none';
    game3.style.display = 'flex';
    h.style.display = 'none';
    ab.style.display = 'none';
    p.style.display = 'none';
    // Start the game initially
    startGame();
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
