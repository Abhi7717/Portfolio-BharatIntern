let ty=document.querySelector('.change-txt');
let de=['Front End Developer','Back End Developer','Problem Solver'];

let arr=1;
function changtxt() {
    if(arr<de.length)
    {
        ty.innerHTML=de[arr];
        arr=arr+1;

    }
    else{
        arr=0;
        ty.innerHTML=de[arr];
        arr=arr+1;
    }
}
changtxt(); 
setInterval(changtxt,5000);