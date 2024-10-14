let playc=document.querySelector(".playc");
let playicon=document.querySelector(".playicon");
playc.addEventListener("mouseenter",()=>{
    playicon.style.opacity="1";
})
playc.addEventListener("mouseout",()=>{
    playicon.style.opacity="0";
})