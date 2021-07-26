'use strict';

const str = "Test";
const arr = [1, 2, 4];
console.log(str.length); // подсчет количества символов в строке
console.log(arr.length); 


console.log(str[2]);

//Методы изменения регистра
console.log(str.toUpperCase()); //новое значение
console.log(str.toLowerCase()); //новое значение
console.log(str);

// поиск номера символа, с которого начинается искомое слово
// Поиск подстроки
const fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); 


//Modify string
const logg = "Hello world";
console.log(logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(-5,-1));
// 2 аргумента: 1ый -- с какой части строки надо что-то вернуть, 2ой -- где заканчивать вырезание кусочка

//похож на предыдущий метод
console.log(logg.substring(6,11)); //no negative values

//1ый -- номер позиции, 2ой -- сколько символов необходимо вырезать
console.log(logg.substr(6,3));


//Math
const num = 12.2;
console.log(Math.round(num)); //округление
//12
const test = "12.2px";
console.log(parseInt(test)); // перевод числа в другую систему счисления
//12
console.log(parseFloat(test));

