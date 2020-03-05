/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
module.exports = {
	server_port:3000,
	db_url:'mongodb://localhost:27017/local',
	db_schemas: [
		{file:'./user_schema',collection:'users3', schemaName:'UserSchema', modelName:'UserModel'}
	]
};