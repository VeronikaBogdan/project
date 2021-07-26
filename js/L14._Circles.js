'use strict';

let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
} while (num < 60);

for (let i=1; i<8; i++) {
    console.log(num);
    num++;
}

//Бесконечный цикл

/*for (let i=1; i<0; i++) {
    console.log(num);
    num++;
}*/

for (let i=1; i<8; i++) {
    if (i === 6) {
        //break;
        continue;
    }

    console.log(i);
}