function getRHex() {
    return Math.floor(Math.random() * 200);
}

function getRColor() {
    let red = getRHex();
    let blue = getRHex();
    let green = getRHex();
    let orange = getRHex();
    return "rgb(" + red + "," + blue + "," + green + "," + orange + ")";
}

let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
let r = Math.floor(Math.random() * 80);
let dx = 6, dy = 3;
let cxt = document.getElementById("myCanvas").getContext("2d");

function creatCircle() {

    let color = getRColor();
    cxt.beginPath();
    cxt.arc(x, y, r, 0, 2 * Math.PI, true);
    cxt.closePath();
    cxt.fillStyle = color;
    cxt.fill();

}

// function replicationCircle() {
//     for (let i = 0; i < 10; i++)
//         creatCircle();
// }


function init() {
    cxt.clearRect(0,0,750,350);
    creatCircle();
    if (x<0 || x > 750){
        dx = -dx ;
    }
    if (y <0 || y > 350){
        dy = -dy ;
    }

    x += dx;
    y += dy;

    requestAnimationFrame(init);
}
init();
creatCircle();