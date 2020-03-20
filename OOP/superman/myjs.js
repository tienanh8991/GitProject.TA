let hero = {
    img : 'superman.png',
    size : 100,
    x : 50 ,
    y : 50 ,

};

function getHero (){
    return '<img width="'+ hero.size + '"' +
        ' height="'+ hero.size + '"' +
        ' src="' + hero.img +'"' +
        ' style="top: '+hero.x +'px; left:'+hero.y+'px;position:absolute;" />';
}
//

document.addEventListener("keydown", function (event) {

    if (event.keyCode === 37) {
        hero.y -= 20 ;
    }else if (event.keyCode === 39){
        hero.y += 20 ;
    }else if (event.keyCode === 40){
        hero.x += 20;
    }else if (event.keyCode === 38){
        hero.x -= 20;

    }
});


function draw(){

    document.getElementById("game").innerHTML = getHero();

    requestAnimationFrame(draw);
}

draw();