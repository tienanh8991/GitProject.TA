let a = new Array();
let n = "";
a[1] = "A";
a[2] = "H";
a[3] = "I";
a[4] = "H";
a[5] = "I";
a[6] = " ";
a[7] = "Đ";
a[8] = "Ồ";
a[9] = " ";
a[10] = "N";
a[11] = "G";
a[12] = "Ố";
a[13] = "C";
a[14] = " ";
a[15] = "!";
a[16] = "!";
a[17] = "!";

function troll() {
    let t = document.fk.txt.value;
     if (t.length > 0){
         for (let i =1 ; i<= t.length ; i++){
             n += a[i];
             if (i === 17){
                 t = "" ;
                 n = "" ;
             }
         }
     }
     document.fk.txt.value = n ;
     n = "";
     setTimeout('troll()' , 1);
}