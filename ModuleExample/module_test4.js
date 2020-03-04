/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 

var user = require('./user4');
function showUser(){
	return user().name+','+'No Group';
}

console.log('사용자 정보: '+showUser());