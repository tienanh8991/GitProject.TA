function inputb(c) {
    document.getElementById("displaySCR").value += c;
}


function clearOutPut(){
    console.log(1)
    document.getElementById("displaySCR").value = null;
}

function result() {
    let end = document.getElementById("displaySCR").value;
    document.getElementById("displaySCR").value = eval(end);

}
function back() {
let str=document.getElementById("displaySCR").value;
document.getElementById("displaySCR").value=str.substring(0,str.length-1);
}
