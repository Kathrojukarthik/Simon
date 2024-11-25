let arr=[{
    name:"karthik",
    age:21,
},
{
    name:"sathwik",
    age:19,
    
},
{
    name:"manikanth",
    age:21,
}];
arr.forEach((rog)=>{
    console.log(rog.age);
});
let nin=[8,4,3,2,1];
nin.forEach(function(el){
    console.log(el);
});
let double=arr.map((el)=>{
    return el.age+3;
});
    
let even=nin.filter((nin)=>(nin%2==0));
let even1=[12,2,32,4,52,6].every((el)=>{
    return el%2==0;
});
let array=[10,30,12,2,1,0];
let min=array.reduce((res,ele)=>{
    if(res<ele){
        return res;
    }else{
        return ele;
    }
});
console.log(min);
let nums1=[1,2,43,3,2,3,2,3,4,1];
console.log(Math.min(...nums1));
nums1.push(-2);
console.log(Math.min(...nums1));
function sum(...args){
   return  args.reduce((sum,ele)=>sum+ele);

}
let student={
    name:"karthik",

    age:21,
    username:"karthik@12",
    role:"fullstack",
    password:"annjnfwefik",

};
let {name,role}=student;
let names=["karthik","sai","satheik","manikanth","shiva"];
let [winner, ...others]=names;
// let array=[10,30,12,2,1,0];
let sum2=array.reduce((square,ele)=>{
    return square+ele*ele;
})
let square1=array.map((ele)=>{
    return ele*2;
});
let sum1=square1.reduce((res,ele)=>res+ele,0);
let avg=sum1/array.length;
let add5=array.map((ele)=>{
    return ele+5;
})
let strings=["king","queen","bishop","knight"];
console.log(strings.map((strings)=>strings.toUpperCase()));
const doubleAnsReturnArgs=(arr,...args)=>[
    ...arr,
    ...args.map((el)=>el*2),
];
doubleAnsReturnArgs([1,2,3,4,5],2,3,4);