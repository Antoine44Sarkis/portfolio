const paragraphs = document.querySelectorAll("p");
let isActive = false;

function toggleBoolean() {
    isActive = !isActive;
    console.log(isActive);
}

paragraphs.forEach(paragraph => {
const text = paragraph.textContent;
let index = 0;
let typing = false;

function typeWriter() {
    if (index < text.length) {
        paragraph.textContent += text[index];
        index++;
        setTimeout(typeWriter, 1);
    } else {
        typing = false;
        if (isActive == false)
            paragraph.style.color = 'rgb(147, 225, 247)';
        else
            paragraph.style.color = 'black';
    }
}

paragraph.addEventListener("mouseover", () => {
    if (!typing) {
        typing = true;
        index = 0;
        paragraph.textContent = "";
        if (isActive == false)
            paragraph.style.color = 'cyan';
        else
            paragraph.style.color = 'lightgrey';
        typeWriter();
    }
});
});

let infor = document.getElementById('inform');
let click_me = document.getElementById('click-button');

click_me.addEventListener('click', () => {
    if (infor.style.display === 'none' || infor.style.display === '') {
        infor.style.display = 'block';
    } else {
        infor.style.display = 'none';
    }
});

var inf = document.querySelector(".info");
const h2 = document.querySelector("h2");
const h3 = document.querySelectorAll("h3");
const para = document.querySelector("p");
const ul = document.querySelectorAll("ul");
const sec = document.querySelectorAll("section");
const span = document.querySelectorAll("span");
const a = document.querySelectorAll("a");
var body = document.body;
color.addEventListener('click', ()=>{
    body.classList.toggle("white-mode");
    h2.classList.toggle("grey-mode");
    para.classList.toggle("grey-mode");
    inf.classList.toggle("grey-mode");
    toggleBoolean();
    span.forEach(function(span)
    {
        span.classList.toggle("special");
    });
    a.forEach(function(a)
    {
        a.classList.toggle("special");
    });
    ul.forEach(function(ul)
    {
        ul.classList.toggle("grey-mode");
    });
    h3.forEach(function(h3)
    {
        h3.classList.toggle("grey-mode");
    });
});

const homepage = document.getElementById('home');
const x_o = document.getElementById('xo');
const play = document.getElementById('play');
const allCells = document.querySelectorAll('table td');
const game = document.getElementById('game');
x_o.addEventListener('click', () => {
    homepage.style.display = 'none';
    game.style.display = 'flex';
    let isGameOver = false; // Track game state

    // Initialize cell styles
    allCells.forEach((cell, index) => {
        cell.style.color = 'black';
        cell.textContent = ''; // Clear any existing text
        cell.style.backgroundColor = index % 2 === 0 ? 'lightgrey' : 'lightcyan';
    });

    // Add click listeners to cells
    allCells.forEach((cell) => {
        cell.addEventListener('click', (event) => {
            if (isGameOver) return; // Stop further moves if the game is over

            let clickedCell = event.target;
            if (clickedCell.textContent === '') {
                // Player 'x' move
                clickedCell.textContent = 'x';

                let win = checkWinner();

                // Check if the player has won
                if (win) {
                    handleGameEnd(win);
                    return;
                }

                // AI move (Player 'o')
                makeAIMove();

                // Check if the AI has won
                win = checkWinner();
                if (win) {
                    handleGameEnd(win);
                }
            }
        });
    });

    // Reset the board on "Play" button click
    play.addEventListener('click', resetBoard);

    // Function to reset the board
    function resetBoard() {
        isGameOver = false;
        allCells.forEach((cell, index) => {
            cell.textContent = '';
            cell.style.color = 'black';
            cell.style.backgroundColor = index % 2 === 0 ? 'lightgrey' : 'lightcyan';
        });
    }

    // Function to handle game end
    function handleGameEnd(winner) {
        isGameOver = true; // Stop further moves
        if (winner === 'x') {
            alert('YOU WIN!');
        } else if (winner === 'o') {
            alert('YOU LOST!');
        }
        resetBoard(); // Clear the board after the game ends
    }
});

function checkWinner() {
    if (cell1.textContent === cell2.textContent && cell2.textContent === cell3.textContent && cell1.textContent !== '') {
        return cell1.textContent;
    }
    if (cell4.textContent === cell5.textContent && cell5.textContent === cell6.textContent && cell4.textContent !== '') {
        return cell4.textContent;
    }
    if (cell7.textContent === cell8.textContent && cell8.textContent === cell9.textContent && cell7.textContent !== '') {
        return cell7.textContent;
    }
    if (cell1.textContent === cell5.textContent && cell5.textContent === cell9.textContent && cell1.textContent !== '') {
        return cell1.textContent;
    }
    if (cell3.textContent === cell5.textContent && cell5.textContent === cell7.textContent && cell3.textContent !== '') {
        return cell3.textContent;
    }
    if (cell1.textContent === cell4.textContent && cell4.textContent === cell7.textContent && cell1.textContent !== '') {
        return cell7.textContent;
    }
    if (cell2.textContent === cell5.textContent && cell5.textContent === cell8.textContent && cell2.textContent !== '') {
        return cell8.textContent;
    }
    if (cell3.textContent === cell6.textContent && cell6.textContent === cell9.textContent && cell3.textContent !== '') {
        return cell9.textContent;
    }
    return null; // No winner
}


function makeAIMove() {
    const c1 = cell1.textContent;
    const c2 = cell2.textContent;
    const c3 = cell3.textContent;
    const c4 = cell4.textContent;
    const c5 = cell5.textContent;
    const c6 = cell6.textContent;
    const c7 = cell7.textContent;
    const c8 = cell8.textContent;
    const c9 = cell9.textContent;

    if (c1 === 'o' && c2 === 'o' && cell3.textContent === '')
        cell3.textContent = 'o';
    else if (c2 === 'o' && c3 === 'o' && cell1.textContent === '')
        cell1.textContent = 'o';
    else if (c1 === 'o' && c3 === 'o' && cell2.textContent === '')
        cell2.textContent = 'o';

    else if (c4 === 'o' && c5 === 'o' && cell6.textContent === '')
        cell6.textContent = 'o';
    else if (c5 === 'o' && c6 === 'o' && cell4.textContent === '')
        cell4.textContent = 'o';
    else if (c4 === 'o' && c6 === 'o' && cell5.textContent === '')
        cell5.textContent = 'o';

    else if (c7 === 'o' && c8 === 'o' && cell9.textContent === '')
        cell9.textContent = 'o';
    else if (c8 === 'o' && c9 === 'o' && cell7.textContent === '')
        cell7.textContent = 'o';
    else if (c7 === 'o' && c9 === 'o' && cell8.textContent === '')
        cell8.textContent = 'o';

    else if (c1 === 'o' && c4 === 'o' && cell7.textContent === '')
        cell7.textContent = 'o';
    else if (c4 === 'o' && c7 === 'o' && cell1.textContent === '')
        cell1.textContent = 'o';
    else if (c1 === 'o' && c7 === 'o' && cell4.textContent === '')
        cell4.textContent = 'o';

    else if (c2 === 'o' && c5 === 'o' && cell8.textContent === '')
        cell8.textContent = 'o';
    else if (c5 === 'o' && c8 === 'o' && cell2.textContent === '')
        cell2.textContent = 'o';
    else if (c2 === 'o' && c8 === 'o' && cell5.textContent === '')
        cell5.textContent = 'o';

    else if (c3 === 'o' && c6 === 'o' && cell9.textContent === '')
        cell9.textContent = 'o';
    else if (c6 === 'o' && c9 === 'o' && cell3.textContent === '')
        cell3.textContent = 'o';
    else if (c3 === 'o' && c9 === 'o' && cell6.textContent === '')
        cell6.textContent = 'o';

    else if (c1 === 'o' && c5 === 'o' && cell9.textContent === '')
        cell9.textContent = 'o';
    else if (c5 === 'o' && c9 === 'o' && cell1.textContent === '')
        cell1.textContent = 'o';
    else if (c1 === 'o' && c9 === 'o' && cell5.textContent === '')
        cell5.textContent = 'o';

    else if (c3 === 'o' && c5 === 'o' && cell7.textContent === '')
        cell7.textContent = 'o';
    else if (c5 === 'o' && c7 === 'o' && cell3.textContent === '')
        cell3.textContent = 'o';
    else if (c3 === 'o' && c7 === 'o' && cell5.textContent === '')
        cell5.textContent = 'o';
    /////////////////////
    else if (c1 === 'x' && c2 === 'x' && cell3.textContent === '')
        cell3.textContent = 'o';
    else if (c2 === 'x' && c3 === 'x' && cell1.textContent === '')
        cell1.textContent = 'o';
    else if (c1 === 'x' && c3 === 'x' && cell2.textContent === '')
        cell2.textContent = 'o';

    else if (c4 === 'x' && c5 === 'x' && cell6.textContent === '')
        cell6.textContent = 'o';
    else if (c5 === 'x' && c6 === 'x' && cell4.textContent === '')
        cell4.textContent = 'o';
    else if (c4 === 'x' && c6 === 'x' && cell5.textContent === '')
        cell5.textContent = 'o';

    else if (c7 === 'x' && c8 === 'x' && cell9.textContent === '')
        cell9.textContent = 'o';
    else if (c8 === 'x' && c9 === 'x' && cell7.textContent === '')
        cell7.textContent = 'o';
    else if (c7 === 'x' && c9 === 'x' && cell8.textContent === '')
        cell8.textContent = 'o';

    else if (c1 === 'x' && c4 === 'x' && cell7.textContent === '')
        cell7.textContent = 'o';
    else if (c4 === 'x' && c7 === 'x' && cell1.textContent === '')
        cell1.textContent = 'o';
    else if (c1 === 'x' && c7 === 'x' && cell4.textContent === '')
        cell4.textContent = 'o';

    else if (c2 === 'x' && c5 === 'x' && cell8.textContent === '')
        cell8.textContent = 'o';
    else if (c5 === 'x' && c8 === 'x' && cell2.textContent === '')
        cell2.textContent = 'o';
    else if (c2 === 'x' && c8 === 'x' && cell5.textContent === '')
        cell5.textContent = 'o';

    else if (c3 === 'x' && c6 === 'x' && cell9.textContent === '')
        cell9.textContent = 'o';
    else if (c6 === 'x' && c9 === 'x' && cell3.textContent === '')
        cell3.textContent = 'o';
    else if (c3 === 'x' && c9 === 'x' && cell6.textContent === '')
        cell6.textContent = 'o';

    else if (c1 === 'x' && c5 === 'x' && cell9.textContent === '')
        cell9.textContent = 'o';
    else if (c5 === 'x' && c9 === 'x' && cell1.textContent === '')
        cell1.textContent = 'o';
    else if (c1 === 'x' && c9 === 'x' && cell5.textContent === '')
        cell5.textContent = 'o';

    else if (c3 === 'x' && c5 === 'x' && cell7.textContent === '')
        cell7.textContent = 'o';
    else if (c5 === 'x' && c7 === 'x' && cell3.textContent === '')
        cell3.textContent = 'o';
    else if (c3 === 'x' && c7 === 'x' && cell5.textContent === '')
        cell5.textContent = 'o';
    else if (c5 != 'x' && c5 != 'o')
        cell5.textContent = 'o';
    //not winable:
    else if (c1 != 'x' && c1 != 'o')
        cell1.textContent = 'o';
    else if (c3 != 'x' && c3 != 'o')
        cell3.textContent = 'o';
    else if (c7 != 'x' && c7 != 'o')
        cell7.textContent = 'o';
    else if (c9 != 'x' && c9 != 'o')
        cell9.textContent = 'o';
    else {
        // If no winning move, make a random move
        let emptyCells = Array.from(allCells).filter((cell) => cell.textContent === '');
        if (emptyCells.length > 0) {
            let randomIndex = Math.floor(Math.random() * emptyCells.length);
            emptyCells[randomIndex].textContent = 'o';
        }
    }
}

const backpage = document.getElementById('back');
backpage.addEventListener('click', ()=>{
    homepage.style.display = 'block';
    game.style.display = 'none';
});