/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); // чтобы было число
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if ( personalMovieDB.count < 10 ) {
    console.log("Просмотрено довольно мало фильмов");
} else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){ 
    console.log("Вы классический зритель");
} else if ( personalMovieDB.count >= 30 ) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

/*const a = prompt('Один из последних просмотренных фильмов?', ''), 
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''), 
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;*/

for (let i=1; i<3; i++) {
    const q = prompt('Один из последних просмотренных фильмов?', "film"),
          w = +prompt('На сколько оцените его?', "result number");

    if (q != null && w != null && q != '' && w != '' && q.length < 50) {
        personalMovieDB.movies[q] = w;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

console.log(personalMovieDB);