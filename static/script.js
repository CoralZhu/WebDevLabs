let x=5;
let y=7;
let z=x+y;
console.log(z);
let A="Hello";
let B="World!";
let C=A+B;
console.log(C);
function SumNPrint(x1,x2){
    let x3=x1+x2;
    console.log(x3);
}
SumNPrint(x,y);
SumNPrint(A,B);
if (C.length>z.length){
    console.log(C);
}
else if (C.length<z.length){
    console.log(z);
}
else{
    console.log("good job!");
}
let L1=["Watermelon","Pineapple","Pear","Banana"];
let L2=["Apple","Banana","Kiwi","Orange"];
function findTheBanana(arr,name){
    arr.forEach(function(item,index){
        if (item =="Banana"){
            alert(`Found Banana in ${name} at index ${index}`);
        }
    });
}
findTheBanana(L1,"L1");
findTheBanana(L2,"L2");
function greetingFunc(){
    let d=new Date;
    let h=d.getHours();
    if (h<12){
        greetingMessage="Good morning";
    }
    else if (h<18){
        greetingMessage="Good afternoon";
    }
    else if (h<20){
        greetingMessage="Good evening";
    }
    else if ((h>20 && h<24) || (h>0 && h<5)){
        greetingMessage="Good night";
    }
    let E=document.getElementById("greeting");
    if (E){
        E.innerHTML=`${greetingMessage}, I am Coral Zhu`;
    }
}
greetingFunc();
window.onload=greetingFunc;
if (window.location.pathname.endsWith("index.html") || window.location.pathname == "/"){
    window.onload=greetingFunc;
}