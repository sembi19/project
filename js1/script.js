"use strict";

//alert('Hello');

//const result = confirm("Are you here?");
//console.log(result);

// const answer = +prompt("Are you over 18?", "18");
// console.log(answer +5);

// const answer = [];
// answer[0] = prompt("Whats your name?", '');
// answer[1] = prompt("Whats your surname?", '');
// answer[2] = prompt("How old are you?", '');

// document.write(answer);

// console.log(typeof(answer));

// const category = 'toys';

// console.log(`https:://someurl.com/${category}/5`);

// const user = 'Ivan';

// alert(`Hello, ${user}`);



// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("How many a films are you watch?", '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("How many a films are you watch?", '');
//     }

// }

// start();

// console.log(numberOfFilms);

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// function rememberMyFilms() {
//     for(let i=0; i<2; i++){
//         var a = prompt("What is  the last movie you have watched?", ''),
//             b = prompt("How do you rate it?", '');
    
//         if (a != null && a.length < 50 && b != null && b.length < 50 && a != '' && b != ''){
//             personalMovieDB.movies[a] = b;
//         } else {
//             console.log('error');
//             i--;
//         }
    
//     }
// }

// rememberMyFilms();

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }

// writeYourGenres();
// showMyDB();

// function writeYourGenres() {
//     for(let i = 0; i<3; i++) {
//         personalMovieDB.genres[i] = prompt(`What is your ${i+1} favorite a genre of movie?`, '');
//     }
// }

// const a = prompt("What is  the last movie you have watched?", ''),
//       b = prompt("How do you rate it?", ''),
//       c = prompt("What is  the last movie you have watched?", ''),
//       d = prompt("How do you rate it?", '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// const num = 50;

// (num === 50) ? console.log('OK!') : console.log("Error");




// console.log(personalMovieDB);

// for(let i=0; i<2; i++){
//     const a = prompt("What is  the last movie you have watched?", ''),
//           b = prompt("How do you rate it?", '');
//     personalMovieDB.movies[a] = b;

// }

// function showFirstMessage(){
//     console.log("Hello World");
// }

// showFirstMessage();
//  const str = "Hello World";

//  console.log(str.toUpperCase());
//  console.log(str.indexOf("World"));
//  console.log(str.slice(6, 11));
//  console.log(str.substr(6, 5));

//  const num = 12.2;
//  console.log(Math.round(num));

//  const test = '12.2 px';
//  console.log(parseInt(test));

// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`I learn: ${lang}`);
//     callback();
// }

// learnJS("JS", function(){
//     console.log("I passed it");
// } );

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("test");
//     }
// };

// options.makeTest();

// for(let key in options) {
//     if(typeof(options[key]) === 'object'){
//         for(let i in options[key]) {
//             console.log(`${i} property have value as ${options[key][i]}`);
//         }
//     } else {
//         console.log(`${key} property have value as ${options[key]}`);
//     }
// }

// console.log(Object.keys(options).length);

// const arr = [2, 10, 1, 6, 7];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} into in array ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products.join('; '));

function copy(mainOB) {
    let key;
    let objCopy = {};
    for(key in mainOB) {
        objCopy[key] = mainOB[key];
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

const newNumbers = copy(numbers);
newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 10,
    e: 20
};

const newObj = {...add};
console.log(newObj);

// console.log(Object.assign(numbers , add));

const clone = Object.assign({}, add);
clone.d = 17;

console.log(clone);
console.log(add);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'dasasdas';

console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
       blogs = ['wordpres', 'livejournal', 'blogger'],
       internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 3, 5];
log(...num);



