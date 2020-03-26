let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

class Ball {
    constructor(x, y, radius, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
    }

    drawBall = function () {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
        context.closePath();
    };
    moveBall = function () {
        this.x += this.dx;
        this.y += this.dy;
    };
    hitsWall = function () {
        if (this.x < this.radius || this.x > canvas.width - this.radius) {
            this.dx = -this.dx;
            console.log(this.dx)
        }
        if (this.y < this.radius) {
            this.dy = -this.dy;
        }
    }
}

class Bars {
    constructor(width, height, x, y, speed) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = speed;
    };

    drawBars = function () {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fill();
        context.closePath();
    };
}

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 37) {
        console.log(event);
        bars.x -= bars.speed;
    }
    if (event.keyCode === 39) {
        console.log(event);
        bars.x += bars.speed;
    }
});

class Brick {
    constructor(width, height, margin, rows, cols) {
        this.width = width;
        this.height = height;
        this.margin = margin;
        this.rows = rows;
        this.cols = cols;
    }
}

let ball = new Ball(20, canvas.height/3, 15, 2, 3);
let bars = new Bars(70, 10, 0, canvas.height - 10, 10);
let brick = new Brick(50, 10, 25, 3, 5);
let isGameOver = false;
let isGameWin = false;
let userScore = 0;

let brickList = [];
for (let i = 0; i < brick.rows; i++) {
    for (let j = 0; j < brick.cols; j++) {
        brickList.push({
            x: brick.margin + j * (brick.width + brick.margin),
            y: brick.margin + i * (brick.height + brick.height),
            isBroken : false
        })
    }
}


function drawBrick() {
    brickList.forEach(function (value) {
        if (!value.isBroken) {
            context.beginPath();
            context.rect(value.x, value.y, brick.width, brick.height);
            context.fillStyle = "orange";
            context.fill();
            context.closePath();
        }
    })
}

function upDateBars() {
    if (bars.x < 0) {
        bars.x = 0;
    }
    if (bars.x > canvas.width - bars.width) {
        bars.x = canvas.width - bars.width;
    }
}

function ballHitsTheBars() {
    if (ball.x + ball.radius >= bars.x && ball.x + ball.radius <= bars.x + bars.width &&
        ball.y + ball.radius >= canvas.height - bars.height) {

        ball.dy = -ball.dy;
    }
}

function ballHitsBrick() {
    brickList.forEach(function (value) {
        if (!value.isBroken) {
            if (ball.x >= value.x && ball.x <= value.x + brick.width &&
                ball.y + ball.radius >= value.y && ball.y - ball.radius <= value.y + brick.height) {
                ball.dy = -ball.dy;
                value.isBroken = true;
                userScore++;
                if (userScore >= 15) {
                    isGameOver = true;
                    isGameWin = true;
                }
            }
        }
    })
}

function checkGameWin() {
    if (isGameWin) {
        alert(" You Win ");
    } else {
        alert("Game Over . " + " Điểm của bạn : " + userScore);
    }
}

function checkGameOver() {
    if (ball.y > canvas.height - ball.radius) {
        isGameOver = true;
    }
}

function main() {
    if (!isGameOver) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        ball.drawBall();
        ball.moveBall();
        ball.hitsWall();

        bars.drawBars();
        drawBrick();
        upDateBars();
        ballHitsTheBars();
        ballHitsBrick();
        checkGameOver();
        requestAnimationFrame(main);
    } else {
        checkGameWin();
    }
}

