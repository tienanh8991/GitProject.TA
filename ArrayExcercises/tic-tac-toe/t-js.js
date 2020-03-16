const COlS = 3;
const ROWS = 3;
let isGameOver = false;
let arr = [];
let s = "<table>";
for (let i = 0; i < ROWS; i++) {
    arr[i] = [];
    s += "<tr>";
    for (let j = 0; j < COlS; j++) {
        arr[i][j] = "*";
        s += "<td onclick='playGame(this , " + i + " , " + j + ")'></td>";
    }
    s += "</tr>";
}
s += "</table>";
document.write(s);

let turn = 1;

function playGame(cell, x, y) {
    if (isGameOver) {
        return;
    }
    if (turn === 1 && !cell.innerHTML) {
        cell.innerHTML = 'X';
        turn = 2;
        arr[x][y] = "X";
    } else if (turn === 2 && !cell.innerHTML) {
        cell.innerHTML = 'O';
        turn = 1;
        arr[x][y] = "O";
    }
    checkWin(cell, x, y)
}

function checkWin(cell, x, y) {
    let i = 1;
    let count = 1;
    while ((y + i) < COlS && arr[x][y + i] === cell.innerHTML) {
        i++;
        count++;
    }

    while (y - i >= 0 && arr[x][y - i] === cell.innerHTML) {
        i++;
        count++;
    }
    gameOver(count);

    while ((x + i) < ROWS && arr[x + i][y] === cell.innerHTML) {
        i++;
        count++;
    }
    while (x - i >= 0 && arr[x - i][y] === cell.innerHTML) {
        i++;
        count++;
    }
    gameOver(count);

    let i2 = 1;
    let count2 = 1;
    let j = 1;

    while ((y + j < COlS) && (x + i2 < ROWS) && (arr[x + i2][y + j] === cell.innerHTML)) {
        i2++;
        j++;
        count2++;
    }

    while ((y - j >= 0) && (x - i2 >= 0) && (arr[x - i2][y - j] === cell.innerHTML)) {
        i2++;
        j++;
        count2++;
    }
    gameOver(count2);

    while ((y - j >= 0) && (x + i2 < ROWS) && (arr[x + i2][y - j] === cell.innerHTML)) {
        i2++;
        j++;
        count2++;
    }

    while ((y + j < COlS) && (x - i2 >= 0) && (arr[x - i2][y + j] === cell.innerHTML)) {
        i2++;
        j++;
        count2++;
    }
    gameOver(count2);

    return true;
}

function gameOver(count) {
    if (count === 3) {
        alert("You Win !");
        isGameOver = true;
    }
}
