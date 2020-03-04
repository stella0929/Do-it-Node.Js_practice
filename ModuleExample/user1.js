/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
//exports에 객체 바로 할당할 수 없음. 속성만 넣어줘야함
exports.getUser = function(){
	return {id:'test01', name:'소녀시대'};
};

exports.group = {id:'group01', name:'친구'}; 