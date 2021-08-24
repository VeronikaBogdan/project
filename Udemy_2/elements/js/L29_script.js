'use strict';

const box = document.getElementById('box'), 
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'), //позволяет получить только первый селектор, удобно, когда он единственый
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');

console.dir(box); //получили элемент в качестве объекта
// div#box.box

box.style.backgroundColor = 'blue';
box.style.width = '500px';
// box.style.width = 500 + 'px';

const num = 900;
box.style.cssText = `background-color: yellow; width: ${num}px; `;



btns[1].style.borderRadius = '100%';

// circles.style.backgroundColor = 'red';  //! НЕЛЬЗЯ обращаться сразу ко всему массиву -- ERROR
circles[0].style.backgroundColor = 'red';


//todo: для нескольких элементов
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}
// ИЛИ
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});





//! СОЗДАНИЕ
const div = document.createElement('div'); //соществует только внутри js скрипта
const text = document.createTextNode('Дарова!');

div.classList.add('black'); // назначаем элементу класс black

//! СОВРЕМЕННЫЕ СПОСОБЫ: 
// document.body.append(div); //добавим див в конец родителя

// document.querySelector('.wrapper').append(div); // если не прописан сразу в констатах
wrapper.append(div); // в конец враппера ставим
wrapper.appendChild(div); // the same
wrapper.prepend(div); // в начало враппера ставим
hearts[1].before(div); // ПЕРЕД каким элементом
hearts[1].after(div); // ПОСЛЕ какого элементом


//! УДАЛЕНИЕ
// circles[0].remove();


//! ЗАМЕНА ЧЕГО-ТО НА ЧТО-ТО
// hearts[0].replaceWith(circles[0]);



//! раньше: 
wrapper.insertBefore(div, hearts[2]);  //вставляем что-то куда-то



