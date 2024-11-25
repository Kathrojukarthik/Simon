// let btn=document.querySelector("button");

// btn.addEventListener("click",function(){
//     let h2=document.querySelector("h2");
//     let div=document.querySelector("div");
//     console.dir(div);
//     let random=generateRandomColor();
//     h2.innerText=random;
//     div.style.backgroundColor=random;
//     console.log("color updated");
//     console.log(this.innerText);
//     this.style.backgroundColor="blue";
// });
// function generateRandomColor(){
//     let red=Math.floor(Math.random()*225);
//     let green=Math.floor(Math.random()*225);
//     let blue=Math.floor(Math.random()*225);
//     let color=`(rgb${red},${green},${blue})`;
//     return color;
// };
// let inp=document.querySelector("input");
// inp.addEventListener("keydown",(event)=>{
//     console.log("code=",event.code);
//     if(event.code=="keyU"){
//         console.log("character moves up");
//         console.log("character moves up");
//     }else if(event.code=="keyR"){
//         console.log("character moves right");
//     }else if(event.code=="keyD"){
//         console.log("character moves down");
//     }else  if(event.code=="keyL"){
//         console.log("character moves left");
//     }
    
// });
let form=document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
});

// user.addEventListener("input",()=>{
//     console.log("input event");
//     console.log("final=",user.value);
// });
let btn=document.querySelector("button");
btn.addEventListener("mouseenter",()=>{
    btn.style.backgroundColor="green";
});
let pass=document.querySelector("#pass");
pass.addEventListener("keypress",logKey)
function logKey(e) {
        log.textContent += ` ${e.code}`;
};
let btn1=querySelector("button");
btn1=addEventListener("click",()=>{
    btn1.style.backgroundColor="blue";
});