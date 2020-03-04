/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
function User (id, name){
	this.id = id;
	this.name = name;
}

User.prototype.getUser = function(){
	return {id:this.id, name: this.name};
}
User.prototype.group ={id:'group1', name:'친구'};
User.prototype.printUser = function(){
	console.log('user 이름: '+this.name+', group '+this.group.name);
}
//프로토타입
module.exports = User;