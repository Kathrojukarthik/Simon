let input=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",()=>{
    let list=document.createElement("li");
    list.innerText=input.value;
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    list.appendChild(delbtn);
    ul.appendChild(list);
    input.value="";

});
ul.addEventListener("click",(event)=>{
    if(event.target.nodeName=="BUTTON"){
        let itemList=event.target.parentElement;
        itemList.remove();
    }
});
// let delbtns=document.querySelectorAll(".button");
// for(del of delbtns){
//     del.addEventListener("click",()=>{
//         let para=this.parentElement;
//         para.remove();
//     });
// };