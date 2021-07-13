'use strict';

/* 5 урок -- */
let number = 5;              
const leftBorderWidth = 1;  //Camel Case

number = 10;
console.log(number);

const Obj = {
    a: 50
};

Obj.a = 100;
console.log(Obj); 


console.log(name);
var name = 'Ivan';

{
    var result = 9;
}
console.log(result);




/* 6 урок -- Классификация типов данных в JavaScript*/

let numder = 4;
let NUmber = 4.6;
//infinity  0
//NaN  -- когда проводим какую-то операцию

console.log(4/0);
console.log(-4/0);
console.log('string'*9);

const person = "Alex";
const Person = 'Ivan';
const pErSon = `5`;

const bool = true; // or false

//console.log(something);

const obj = {
    name: "Jahn",
    age: 25,
    isMarried: false
};
//console.log(obj.name);
console.log(obj["name"]);


let arr = [ 'plum.png', 'orange.jpg', 9, 'apple.bmp', {}, [] ];
console.log(arr[1]);




/* 7 урок -- Простое общение с пользователем */

//alert('Hello!');
//alert("asdfg");
//alert(' ... ');

//const res = confirm('Are you here?');
//console.log(res);

//const answer = prompt('Вам есть 18?', "18");
//console.log(typeof(answer));
//console.log(answer + 5);

//const Answer = +prompt('Вам есть 18?', "18");
//console.log(typeof(Answer));
//console.log(Answer + 5);

//let answers = []; //пустой массив

//answers[0] = prompt('Как Ваше имя?', '');
//answers[1] = prompt('Как Ваша фамилия?', '');
//answers[2] = prompt('Сколько Вам лет?', '');

//console.log(typeof(answers));


//console.log(typeof(null));



/* урок 7 -- Интерполяция ES6*/

const category = 'toys';
console.log(`https://someurl.com/${category}/5`); 

const user = 'Veronika';
alert(`Привет, ${user}`);



/* Урок 8 -- Операторы в JS */

console.log('arr' + ' - object');
console.log(4 + +' - object');
console.log(4 + +'5');

let incr = 10, 
    decr = 10;

//++incr;
//--decr;

console.log(incr++, decr--);

console.log(5%2);

console.log(2*4 == 8, 2*4 == '8');
console.log(2*4 === 8, 2*4 === '8');


const isChecked = true, 
      isClose = true;

console.log(isChecked && isClose);
