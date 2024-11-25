let p=document.createElement('p');
p.innerText="hey i'm red";
document.querySelector('body').append(p);
p.classList.add("red");
let h3=document.createElement('h3');
h3.innerText="hey i'm blue";
document.querySelector('body').append(h3);
h3.classList.add("blue");

let div=document.createElement('div');
let h1=createElement('h1');
let para=document.createElement('para');
h1.innerText="i'm a div";
para.innerText="me too";
div.append(h1);
div.append(para);
div.classList.add("box");
document.querySelector("body").append(div);




