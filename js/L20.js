"use strict";

const options = {
    name: 'test',
    width: 1024, 
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { //создание метода обьекта
        console.log("Test"); 
    }    
};

options.makeTest();

//todo: массив с ключами
console.log(Object.keys(options));
console.log(Object.keys(options).length);

// console.log(options.name);

// console.log(options["color"]["border"]);
// black



// delete options.name;
// console.log(options);





//todo: перебрать все свойства объекта
// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }


//? let counter = 0; // счётчик свойств
//? for (let key in options) { // все свойства называем ключами
//?     if (typeof(options[key]) === 'object') {
//?         for (let i in options[key]){
//?            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//?            counter++;
//?        }
//?     } else {
//?         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//?         counter++;
//?     }
//? }
//? console.log(counter);




//todo: Деструктуризация объекта
const {border, bg} = options.color; //вытаскиваем кусочки свойства, которые находятся во вложенном объекте, в качестве отдельной переменной
console.log(border);
// black



