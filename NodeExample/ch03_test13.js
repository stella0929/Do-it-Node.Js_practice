/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 

var users = [{name: '소녀시대',age:20},{name:'걸스데이',age: 22}, {name:'원더걸스', age:21}];


delete users[1];//배열원소 중간에 있는 거 삭제할때 delete사용안함.

console.dir(users);

users.forEach(function(elem, index){
    console.log('원소 #'+index);
    console.dir(elem);
});



users.splice(1,0,{name:'애프터스쿨',age:24});
//첫번째 파라미터:어디부터, 두번째:0일경우 추가 아닐경우 삭제 개수
console.dir(users);

users.splice(2,1);
console.dir(users);