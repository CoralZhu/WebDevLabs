$(document).ready(function(){
    $("#longIntro").hide();
    $("#readMore").click(function(){
        $("#longIntro").slideDown();
        $("#readMore").hide();
    });
    $("#readLess").click(function(){
        $("#longIntro").slideUp();
        $("#readMore").show();
    });
});

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
/* let L1=["Watermelon","Pineapple","Pear","Banana"];
let L2=["Apple","Banana","Kiwi","Orange"];
function findTheBanana(arr,name){
    arr.forEach(function(item,index){
        if (item =="Banana"){
            alert(`Found Banana in ${name} at index ${index}`);
        }
    });
}
findTheBanana(L1,"L1");
findTheBanana(L2,"L2"); */
function greetingFunc(){
    let d=new Date;
    let h=d.getHours();
    if (h>=5 && h<12){
        greetingMessage="Good morning";
    }
    else if (h>=12 && h<18){
        greetingMessage="Good afternoon";
    }
    else if (h>=18 && h<20){
        greetingMessage="Good evening";
    }
    else if ((h>20 && h<24) || (h>=0 && h<5)){
        greetingMessage="Good night";
    }
    let E=document.getElementById("greeting");
    if (E){
        E.innerHTML=`${greetingMessage}, I am Coral Zhu`;
    }
}
/* greetingFunc();
window.onload=greetingFunc;
if (window.location.pathname.endsWith("index.html") || window.location.pathname == "/"){
    window.onload=greetingFunc;
} */
function addYear(){
    const currentYear = new Date().getFullYear();
    document.getElementById("copyYear").textContent = currentYear;
}
// function showList(){
//     const list=document.getElementById('funList');
//     const button=document.getElementById('showListButton');
//     list.style.display='block';
//     button.style.display='none';
// }

function validate() {
    const form=document.getElementById("contactForm");

    const errorMessage=document.getElementById("errorMessage");
    // errorMessage.innerHTML="Please fill out the form correctly so I can get back to you :)";
    
        
    if (!form.checkValidity()) {
        // event.preventDefault();
        /* form.reportValidity(); */
        errorMessage.innerHTML="Please fill out the form correctly so I can get back to you :)";
    }

}

document.addEventListener("DOMContentLoaded", () => {
    const form=document.getElementById("contactForm");
    const errorMessage=document.getElementById("errorMessage");
    errorMessage.innerHTML="Please fill out the form correctly so I can get back to you :)";
    // form.addEventListener("submit",function(event) {
    //     errorMessage.textContent= "";
    //     if (!form.checkValidity()) {
    //         event.preventDefault();
    //         /* form.reportValidity(); */
    //         errorMessage.innerHTML="Please fill out the form correctly so I can get back to you :)";
    //     }
    // });
});
function getAdvice(){
    fetch("https://api.adviceslip.com/advice").then(response => response.json()).then(data => {
        document.getElementById("adviceText").innerText=data.slip.advice;
    })
    .catch(error => {
        console.error("Error fetching advice:",error);
        document.getElementById("adviceText").innerText="Oops, something went wrong. Please try again later.";
    })
}