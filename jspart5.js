// let students={
//     name:"karthik",
//     age:21,
//     marks:83,
//     brach:"ece",
//     null:"true",
//     undefined:"null"

// };
const studentsiinfo=[
    {grade:"A+",city:"punjab",},
    {grade:"O",city:"vemulawada"},
    {gade:"B+",city:"kakinada"}
];
const clasrooms={
    ECE:{
     Name:"karthik",
     skills:"full stack",
     
    },
    CSE:{
        Name:"ram",
     skills:"frontend stack",
    },
    CSD:{
        Name:"mani",
     skills:"mi stack",
    }

};
const n=prompt("enter the max value");
let randomgenerated=Math.floor(Math.random()*n)+1;
let guess=prompt("guess the random generated number between 1 to max");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess!=randomgenerated){
        guess=prompt("wrong trt again");
    }else{
        console.log(`congrats your guess is crt `,randomgenerated);
        break;
    }
}
