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



let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many a films are you watch?", '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many a films are you watch?", '');
    }

}

start();

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for(let i=0; i<2; i++){
        var a = prompt("What is  the last movie you have watched?", ''),
            b = prompt("How do you rate it?", '');
    
        if (a != null && a.length < 50 && b != null && b.length < 50 && a != '' && b != ''){
            personalMovieDB.movies[a] = b;
        } else {
            console.log('error');
            i--;
        }
    
    }
}

rememberMyFilms();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

writeYourGenres();
showMyDB();

function writeYourGenres() {
    for(let i = 0; i<3; i++) {
        personalMovieDB.genres[i] = prompt(`What is your ${i+1} favorite a genre of movie?`, '');
    }
}

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

 