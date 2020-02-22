/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var users = [{name: '소녀시대', age: 20}, {name:'걸스데이', age:22},{name: '원더걸스', age:21}];

for(var i =0; i<users.length;i++){
    console.log('배열 원소 #'+i+':'+users[i].name);
} //효율이 떨어짐. (c스타일 for문)

users.forEach(function(elem, index){
    console.log('배열 원소 #'+index+':'+elem.name);
});//각각 원소마다 함수를 실행해줌. 효율이 좋음. 

