let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0;i<arr.length;i++){
    if(num==arr[i]){
        arr.splice(i,1);
    }
    
}
console.log(arr);
// let number=287152;
// sum=0;
// while(number>1){
//     sum=sum+number%10;
//     number.pop();
// }
// console.log(sum);
let n=prompt("enter number");
let mul=1;
for(let i=n;i>=0;i--){
    if(i==0){
        console.log(1);
    }else{
        mul=mul*i;
    }
    
}
console.log(mul);
