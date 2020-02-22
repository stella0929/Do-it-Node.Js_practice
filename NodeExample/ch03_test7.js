/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var person = {
    name:'소녀시대',
    age:20,
    add: function(a,b){
        return a+b;
    }
};

console.log('더하기: '+person.add(40,40));