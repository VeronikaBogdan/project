'use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button'); // получили псевдомассив  //если искать, наапример по тегу, получим коллекцию
console.log(btns);
const btns2 = document.getElementsByTagName('button')[1]; // get the 2nd button
console.log(btns2);
// or
console.log(btns[1]);
//если в DOM только одна кнопка все равно это коллекция

const circles = document.getElementsByClassName('circle');
console.log(circles);


// more modern methods
const hearts = document.querySelectorAll('.heart'); // любой селектор  //todo: тут поставили точку, т.к. работаем с классом 
//! в этом методы появляется ForEach и прототип NodeList
// console.log(hearts); //псевдомассив

hearts.forEach(item => {
    console.log(item);
});


//todo: первый элемент этого селектора
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

