/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var person = {};

person.name = '소녀시대';
person['age'] = 20;

person.add= function(a, b){
    return a+ b;
};
console.log('더하기: '+person.add(20, 20));