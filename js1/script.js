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

var numberOfFilms;

numberOfFilms = +prompt("How many a films are you watch?", '');

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt("What is  the last movie you have watched?", ''),
      b = prompt("How do you rate it?", ''),
      c = prompt("What is  the last movie you have watched?", ''),
      d = prompt("How do you rate it?", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);