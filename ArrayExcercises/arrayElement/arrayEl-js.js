let x = 0;
let array = [];
function addToArray() {
    array[x]=document.getElementById("txt_Input").value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("txt_Input").value="";
}
function DisplayArray() {
    let y = "<hr/>";
    for(let i=0 ; i<array.length ;i++){
        y += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML= y;
}