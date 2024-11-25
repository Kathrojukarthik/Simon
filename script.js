// let day=8;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//      case 3:
//         console.log("wednessday");
//         break;
//      case 4:
//         console.log("thursday");
//         break;
//      case 5:
//         console.log("friday");
//         break;
//      case 6:
//         console.log("saturday");
//         break;
//      case 7:
//         console.log("Sunday"); 
//         break;
//     default:
//         console.log("enter day between 1 to 7");
// }
// let num=50;
// if(num%10==0){
//     console.log("good")
// }else{
//     console.log("bad")
// }
// // let firstName=prompt("enter you name");
// // let age=prompt("enter your age");
// // let result=  `${firstName} is ${age} years old`;
// // alert( result);
// // let month=3;
// // switch(months){
// //     case 1:
// //         console.log("jan");
// //         console.log("feb");
// //         console.log("mar");
// //         break;
// //     case 2:
// //         console.log("apr");
// //         console.log("may");
// //         console.log("jun");
// //         break;
// //     case 3:
// //         console.log("jul");
// //         console.log("aug");
// //         console.log("sep");
// //         break;        
// //     default:
// //         console.log("oct");
// //         console.log("nov");
// //         console.log("dec");
        
// // }
// let num1=32;
// let num2=2568521;

// if(num1%10==num2%10){
//     console.log("both have same last digit ");

// }else{
//     console.log("no last digit same");
// }
// let msg="hello!";
// msg=console.log(msg.trim().toLowerCase());
// let str="ApnaCollege";

// console.log(str.slice(4,9));
// console.log(str.indexOf("na"));
// console.log(str.replace("Apna","Our"));

// let cars=["bmw","creata","porshe"];
// let nums=[2,4,6,8];
// let months=["jan","jul","mar","aug"];

// let array=[['x',null,'o'],[null,'x',null],['o',null,'x']];

let array=[1,2,3,4,5,6,7,8,9];


let n=3;
let arr=[7,9,0,-2];
let ans=arr.slice(0,n);
console.log(ans);
let str=prompt("enter the string");
console.log(`orginal string= ${str}`);
console.log(`without spaces ${str.trim()}`);

if(str.length==0){
    console.log("the string is empty");

}else{
    console.log("string is not empty");
}
let ar=["hello",23,'a',78,90];
let item=78;
if(ar.indexOf(item)!=-1){
    console.log("element is exists in array");

}else{
    console.log("element is not exists in array");

}
