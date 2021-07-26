"use strict";

//создали функцию
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}
// Вызываем функцию, обращаемся к имени функции
showFirstMessage("Hello World!"); 
console.log(num);


function calc(a, b) {
    return (a+b);
}
console.log(calc(4,3));
console.log(calc(5,6));
console.log(calc(10,6));



// возвращение значения наружу
function ret() {
    let num = 50;

    //

    return num;
}
const anotherNum = ret();
console.log(anotherNum);





const logger = function() {
    console.log('Hello!');
};
logger();




const Calc = (a,b) => {
    console.log('1');
    return (a+b);
};


