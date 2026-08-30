// Variable to keep track of whose turn it is
let activePlayer = 'X';

// Array to store moves
let selectedSquares = [];

// Gets the body element
const body = document.getElementById('body');


// Function to place X or O in a square
function placeXOrO(squareNumber) {

    // Checks if the square has already been selected
    if (!selectedSquares.some(element => element.includes(squareNumber))) {

        // Gets the selected HTML element
        let select = document.getElementById(squareNumber);

        // Determines the active player and places the icon
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }

        // Adds the square number and player to the array
        selectedSquares.push(squareNumber + activePlayer);

        // Plays the placement sound
        audio('./media/place.mp3');

        // Checks for a win or tie
        if (checkWinConditions()) {
            return true;
        }

        // Changes the active player
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        // Checks if it is the computer's turn
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () {
                computersTurn();
            }, 1000);
        }

        return true;
    }

    return false;
}


// Picks a random square for the computer's turn
function computersTurn() {

    let success = false;
    let pickASquare;

    while (!success) {

        pickASquare = String(Math.floor(Math.random() * 9));

        // Only call the function once
        if (placeXOrO(pickASquare)) {
            success = true;
        }
    }
}


// This function checks for win conditions
function checkWinConditions() {

    if (arrayIncludes('0X', '1X', '2X')) {
        drawWinLine(50, 100, 558, 100);
        return true;
    }

    else if (arrayIncludes('3X', '4X', '5X')) {
        drawWinLine(50, 304, 558, 304);
        return true;
    }

    else if (arrayIncludes('6X', '7X', '8X')) {
        drawWinLine(50, 508, 558, 508);
        return true;
    }

    else if (arrayIncludes('0X', '3X', '6X')) {
        drawWinLine(100, 50, 100, 558);
        return true;
    }

    else if (arrayIncludes('1X', '4X', '7X')) {
        drawWinLine(304, 50, 304, 558);
        return true;
    }

    else if (arrayIncludes('2X', '5X', '8X')) {
        drawWinLine(508, 50, 508, 558);
        return true;
    }

    else if (arrayIncludes('6X', '4X', '2X')) {
        drawWinLine(100, 508, 510, 90);
        return true;
    }

    else if (arrayIncludes('0X', '4X', '8X')) {
        drawWinLine(100, 100, 520, 520);
        return true;
    }

    else if (arrayIncludes('0O', '1O', '2O')) {
        drawWinLine(50, 100, 558, 100);
        return true;
    }

    else if (arrayIncludes('3O', '4O', '5O')) {
        drawWinLine(50, 304, 558, 304);
        return true;
    }

    else if (arrayIncludes('6O', '7O', '8O')) {
        drawWinLine(50, 508, 558, 508);
        return true;
    }

    else if (arrayIncludes('0O', '3O', '6O')) {
        drawWinLine(100, 50, 100, 558);
        return true;
    }

    else if (arrayIncludes('1O', '4O', '7O')) {
        drawWinLine(304, 50, 304, 558);
        return true;
    }

    else if (arrayIncludes('2O', '5O', '8O')) {
        drawWinLine(508, 50, 508, 558);
        return true;
    }

    else if (arrayIncludes('6O', '4O', '2O')) {
        drawWinLine(100, 508, 510, 90);
        return true;
    }

    else if (arrayIncludes('0O', '4O', '8O')) {
        drawWinLine(100, 100, 520, 520);
        return true;
    }

    // Checks for a tie
    else if (selectedSquares.length >= 9) {

        audio('./media/tie.mp3');

        setTimeout(function () {
            resetGame();
        }, 500);

        return true;
    }

    return false;
}


// Checks each win condition
function arrayIncludes(squareA, squareB, squareC) {

    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);

    if (a === true && b === true && c === true) {
        return true;
    }

    return false;
}


// Clears the board and restarts the game
function resetGame() {

    for (let i = 0; i < 9; i++) {

        let square = document.getElementById(String(i));

        square.style.backgroundImage = '';
    }

    selectedSquares = [];
    activePlayer = 'X';
}


// Plays audio files
function audio(audioURL) {

    let audio = new Audio(audioURL);

    audio.play();
}


// Draws the line across the winning coordinates
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {

    const canvas = document.getElementById('win-lines');

    const c = canvas.getContext('2d');

    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;


    function animateLineDrawing() {

        const animationLoop =
            requestAnimationFrame(animateLineDrawing);

        c.clearRect(0, 0, 608, 608);

        c.beginPath();

        c.moveTo(x1, y1);

        c.lineTo(x, y);

        c.lineWidth = 10;

        c.strokeStyle = 'rgba(70, 255, 33, .8)';

        c.stroke();


        if (x1 <= x2 && y1 <= y2) {

            if (x < x2) {
                x += 10;
            }

            if (y < y2) {
                y += 10;
            }

            if (x >= x2 && y >= y2) {
                cancelAnimationFrame(animationLoop);
            }
        }


        if (x1 <= x2 && y1 >= y2) {

            if (x < x2) {
                x += 10;
            }

            if (y > y2) {
                y -= 10;
            }

            if (x >= x2 && y <= y2) {
                cancelAnimationFrame(animationLoop);
            }
        }
    }


    // Clears the board after the animation
    function clear() {

        const animationLoop =
            requestAnimationFrame(clear);

        c.clearRect(0, 0, 608, 608);

        cancelAnimationFrame(animationLoop);
    }


    disableClick();

    audio('./media/winGame.mp3');

    animateLineDrawing();

    setTimeout(function () {

        clear();

        resetGame();

    }, 1000);
}


// Disables clicks during the computer's turn
function disableClick() {

    body.style.pointerEvents = 'none';

    setTimeout(function () {

        body.style.pointerEvents = 'auto';

    }, 1000);
}