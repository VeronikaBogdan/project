'use strict';

//! To String

// 1) 
console.log(typeof(String(null))); // string
console.log(typeof(String(4))); // string
console.log(String(null)); // null

// 2) Конкотинация -- сложение строк (строки с чем-то)
console.log(typeof(5 + '')); // string

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';




//! To Number 
// 1)
console.log(typeof(Number('3'))); // number
// 2)
console.log(typeof(+'5')); // number
// 3)
console.log(typeof(parseInt("15px", 10))); // number  //! преобразовывает в другую систему счисления
//! но в реальности (используется для работы с размерми в CSS)

let answer = +prompt("Hello", "");



//? CSS
const testCss = '9.9px';
console.log(parseInt(testCss, 10)); // 9
console.log(parseFloat(testCss, 10)); // 9.9




//! To boolean

// 0, '', null, undefined, NaN --- false

// 1) Нативный способ

let switcher = null;
if (switcher) { // false
    console.log('Working...');
}
switcher = 1;
if (switcher) { // true
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

//! 3)
console.log(typeof(!!'4444')); //перобразует к булиновому, но почти не используется