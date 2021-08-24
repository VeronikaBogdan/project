'use strict';

let str = "some";
let strObj = new String(str); //создать строку;  строка => объект => юз метод => возврат обратно (к строке)

console.log(typeof(str));
console.log(typeof(strObj));

// новый экзэмпляр прототипа массив
console.dir([1, 2, 3]);


const soldier = {
    health: 400,//прототип
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};
// const john = {
//     health: 100
// };

const john = Object.create(soldier);


// john.__proto__ = soldier; //!устаревший формат 


Object.setPrototypeOf(john, soldier); // 1 arg -- КОТОРОМУ хочу назначиь прототип , 2 arg -- обект, прототип которого мы устанавливаем 
//! прототип Джона от Солдата (выше строчкой)



console.log(john.armor);
john.sayHello();



