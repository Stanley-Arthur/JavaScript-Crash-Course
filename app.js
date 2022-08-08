let num1 = 10;
let num2 = 20;
let num3 = "10"
let word1 = "Hello";
let word2 = "hello";

console.log(num1<num2);
console.log(num1>num2)
console.log(num1<=num2)
console.log(num1>=num2)
console.log(!true)
console.log(!false)
console.log(num1==num3);
console.log(num1===num3);//equality check
console.log(word1===word2)
console.log(word1!==word2)


//controll flow

//let item = "GD";
//let item = "A1";
//let item ="Annapurna"
//if(item==="Annapurna"){
  //  console.log("buy Annapurna");
//}else if(item ==="U2"){
  //  console.log("buy U2")
//}else if(item==="A1"){
  //  console.log("buy A1")
//}else{
 //   console.log("buy rocky salt")
//}

let score =90;
if (score >=0 && score <=100){
    if(score>=90){
        console.log("Excellent")
    }else if (score >=80){
        console.log("very good")
    }else if (score>=70){
        console.log("Good")
    }else if(score>=60){
        console.log("Average")
    }else if(score>=50){
        console.log("Credit")
    }else if(score>=40){
        console.log("pass")
    }else if(score>=0){
        console.log("fail")
    }
}else{
    console.log("enter a valid score")
}

//FUNCTION

function sum(x,y){
    let total = x+y;
    return total
    
}
let eleven=sum(5,6)
console.log(eleven)
let fifteen=sum(7,8)
let nineteen=sum(9,10)




function multiply(x,y){
    let total = x*y;
    return total
}
let first=multiply(5,6)
console.log(first)
let second=multiply(7,8)
let third=multiply(9,10)

//loops
//fpr loop
for(let i =1;i<=10;i++){
    console.log(i)
}

//while loop
let num=1;
while(num<=10){
    console.log(num) 

    num=num +1;
}



//Array methods
let ages=[19,26,24,18,22,35,30,33,31,29]
for(let age of ages){
    console.log(Math.pow(age,2));
}

let marriage = ages.filter(function(num){
    return num >25

})
console.log(marriage)

//map
let squares =ages.map((age) => age*age)
console.log(squares)

//FIND
let eighteen = ages.find((age) => age ===18)
console.log(eighteen)
