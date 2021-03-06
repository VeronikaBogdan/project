/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

let numberOfFilms; 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while ( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if ( personalMovieDB.count < 10 ) {
            console.log("Просмотрено довольно мало фильмов");
        } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){ 
            console.log("Вы классический зритель");
        } else if ( personalMovieDB.count >= 30 ) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if ( !hidden ) {
            console.log(personalMovieDB);   
        } 
    },
    writeYourGenres: function() {
        for ( let i = 1; i <= 3; i++ ) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        
            while ( personalMovieDB.genres[i - 1] == '' || personalMovieDB.genres[i - 1] == null) {
                personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            }
        } 

        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });




        //! There are 2 other ways to write the function according to the task:

        // 1 way: 
        // ------

        // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

        // if (genre === '' || genre == null) {
        //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
        //     i--;
        // } else {
        //     personalMovieDB.genres[i - 1] = genre;
        // } 
        



        // 2 way:
        // ------
        
        // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

        // if (genres === '' || genres == null) {
        //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
        //     i--;
        // } else {
        //     personalMovieDB.genres = genres.split(', ');
        //     personalMovieDB.genres.sort();
        // } 


    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};

personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();

console.log(personalMovieDB.privat);


personalMovieDB.writeYourGenres();