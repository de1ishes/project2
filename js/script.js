"use strict";
let num = 20;
function showFirstMessage(){
    console.log("hello keks");
    console.log(num);
}
showFirstMessage();
console.log(num);

function calc(a,b){
    return (a+b);
}
console.log(calc(4,5));
console.log(calc(10,5));
console.log(calc(20,5));

function ret(){
let num = 50;
return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function(){
    console.log("Hello");

};
logger();