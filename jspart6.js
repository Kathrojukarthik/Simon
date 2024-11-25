function dice(){
    console.log(Math.floor(Math.random()*6)+1);

}
dice();
dice();

function myfamily(age){
    console.log(age)
}
myfamily("21");
myfamily("29");
function avg(a,b,c){
    console.log((a+b+c)/3);
}
avg(10,10,1);
function Table(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}
Table(12);


//methods
const calculator={
    num:55,
    sum:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;

    }
};
let str="abcdabcdefgggh";
function ans(str){
    ans=""
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(ans.indexOf(char)==-1){
            ans+=char;
        }
    }
    return ans;
};
let country=["Australia","Germany","UnitedStatesofAmerica"];
function nameCountry(country){
    let output="";
    for(let i=0;i<country.length;i++){
       
        if(output.length<country[i].length){
            output=country[i];
        }

    }
    return output;
};
let _str1="karthik";
function vowelCount(_str1){
    let count=0;
    for(let i=0;i<str.length;i++){
        if( str.charAt(i)=="a" ||str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="o"||str.charAt(i)=="u"){
            count++;
        }
    }
    return count;
   
};
let arr=[1,4,2,5,6,3,9,10,22,12,3,1,2];
let num=10;
function great(arr,num){
    for(let i=0;i<arr.length;i++){
        if(num<arr[i]){
            num=arr[i];

        }
    }
    return num;
};




