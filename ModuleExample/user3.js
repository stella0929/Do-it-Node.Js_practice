/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var user = {
	getUser: function(){
		return {id:'test01',name:'소녀시대'};
	},
	group: {id:'group01', name:'친구'}
};

module.exports = user;