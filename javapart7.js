// const str=(str1)=>{
//     console.log(str1);
// };
// const sum=(a,b)=>{
//     console.log(a+b);
// };
// const mul=n=>n*n*n;
// console.log("hi there");
// setTimeout(()=>{
//     console.log("apna college");
// },4000);
// console.log("welcome to");
// setInterval(()=>{
//     console.log("hello");
// },2000);
// let id=setInterval(()=>{
//     console.log("hello world");
// },2000);
// setTimeout(()=>{
//     clearInterval(id);
// },10000);
const arrayAverage=(arr)=>{
    console.log(arr/2);
};
const Even=(n)=>{
    if(n/2!=0){
        return ("Not");
    }else{
        return ("even");
    }
};
const object={
    msg:"hello world",
    logmsg(){
        console.log(this.msg);

    }
};
setTimeout(object.logmsg,1000);