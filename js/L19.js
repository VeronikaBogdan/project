"use strict";


//функция имеет задержку
function first() {  
    // Do smth  
    setTimeout(function() {
        console.log(1);
    }, 500);
}
// 500 миллисекунд

function second(){
    console.log(2);
}
              
first();
second();
// 2
// 1
// вторая функция раньше первой выполнилась


function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошёл этот урок');
}

learnJS('JavaScript', done);
// функцию done мы не вызываем, а передаём. поэтому без: done()

