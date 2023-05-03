const superheroes = require('superheroes');
superheroes.all;
var myheroname =  superheroes.random();
console.log(myheroname);
//marvel name generator
var names = require('marvel-comics-characters');
var allNames = names.all;
var randomName = names.random();
var threeRandomNames = names.random(3);
console.log(threeRandomNames);
