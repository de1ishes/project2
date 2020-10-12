"use strict";
//1
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
console.log(numberOfFilms);
//2
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
//3
const onequestion = prompt("Один из последних просмотренных фильмов?",""),
      twoquestion = prompt("На сколько оцените его",""),
      threequestion = prompt("Один из последних просмотренных фильмов?",""),
      fourquestion = prompt("На сколько оцените его","");

    personalMovieDB.movies[onequestion] = twoquestion;
    personalMovieDB.movies[threequestion] = fourquestion;
    console.log(personalMovieDB);
      

