'use strict';

let a = 5, 
    b = a;

b += 5;
console.log(b);
console.log(a);


const obj = {
    a: 5, 
    b: 1
};

const Copy = obj; // create Copy // передаёт ссылку, т.е. в Copy кладётся ссылка на obj
Copy.a = 10;

console.log(Copy);
console.log(obj);
//! изменили копию -- изменили исходник  (т.к. работаем с ссылкой на исходник)







//todo: КАК СОЗДАТЬ КОПИЮ, А  НЕ ССЫЛКУ?  (объекты)
//* 1 способ (созания копий)

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {  //пройдёмся по объекту, скопируемся все свойства и поместим точно также в новую копию
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}
const numbers = {
    a: 2, 
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
const newNumbers = copy(numbers); // create copy -- клонирование
newNumbers.a = 10;
newNumbers.c.x = 10;  // ссылка

console.log(newNumbers);
console.log(numbers);
//! создали поверхностную копию 





//* 2 способ (создания копий): Object asaign
 
const add = {
    d: 17,
    e: 20
};

//! создали НЕЗАВИСИМУЮ ПОВЕРХНОСТНУЮ СТРУКТУРУ
// console.log(Object.assign(numbers, add));  //! 1 arg -- КУДА помещаем, 2 arg -- ЧТО помещаем

const clone = Object.assign({}, add); // в клоне лежит поверхностная копия нашего объекта
clone.d = 20;
console.log(add);
console.log(clone);






//* 3 способ (создания копий)

//todo: СОЗДАТЬ КОПИЮ МАССИВА  (массивы)
const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray; //!link
const newArray = oldArray.slice(); //copy old array

newArray[1] = 'asdfadf';
console.log(newArray);
console.log(oldArray);






//* 4 способ (создания пов-ых копий) spread

const video = ['youtube', 'vimeo', 'rutube'], 
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

// ----------------------

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7]; // например: источник, заглушка , автор

console.log(...num);

// --------------------------
//* создание копий

const array = ["a", "b"];
const newAaarray = [...array];

newAaarray[0] = 'Excellent!';
newAaarray[1] = 'Great!';

console.log(array); // [ 'a', 'b' ]
console.log(newAaarray); // [ 'Excellent!', 'Great!' ]


// ---------------------
//* создание копий

const q = {
    one: 1,
    two: 2
};
const newObj = {...q}
