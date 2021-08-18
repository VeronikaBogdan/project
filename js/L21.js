'use strict';

const arr = [1, 10,  2, 0, 3, 6, 8];
arr.sort(compareNum);  // быстрая сортировка
console.log(arr);

function compareNum(a,b) {
    return a-b;
}





console.log(arr.length);
//! Как соотносятся arr.length  и  порядковые номера внутри элементов массива
//! ОТВЕТ: arr.length состоит из последнего индекса, что есть в массиве ,  + 1
// массив для порядка служит
 

arr.pop(); // удаляет последний элемент массива
console.log(arr);
// [ 1, 2, 3, 6 ]

arr.push(10); // добавляет элемент в конец массива
console.log(arr);
// [ 1, 2, 3, 6, 10 ]

// вставить элемент в начало  -- неудобные методы
arr.shift();
arr.unshift();  //? ????



//перебор массива
//! 1 способ
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//! 2 способ
for (let value of arr) {
    console.log(value);
}





//todo: метод forEach -- перебор массива с отличием отдругих
arr.forEach(function(item, i, arr) {
     console.log(`${i}: ${item} внутри массива ${arr}`);
});

//item -- аргумент, i -- номер по порядку, arr -- ссылка на тот массив , который перебираем




const str = prompt("", "");  // ввести элементы массива через установленный в след. строке разделитель
const products = str.split(", "); // СТРОКА стала => МАССИВОМ +++ через какой разделитель будут товары в строке
console.log(products); // сформировавшиеся элементы массива

products.sort(); // сортировка массива как строки

console.log(products.join(' ')); // из СТРОКИ сделать => МАССИВ