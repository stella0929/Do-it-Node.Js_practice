/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var crypto = require('crypto');
var Schema = {};
var UserSchema;

Schema.createSchema = function(mongoose){
	console.log('createSchema 호출됨');
	UserSchema = mongoose.Schema({
		id: {type:String, required:true, unique:true,'default':''},
		hashed_password: {type:String, required: true,'default':''},
		salt:{type:String, required:true},
		name: {type: String,index:'hashed', 'default':''}//name으로 검색을 하겠다.(index)
		,age: {type:Number,'default':-1},//값을 넣지 않았을때 -1
		created_at: {type:Date, index:{unique:false}, 'default':Date.now()},
		updated_at:{type:Date, index:{unique:false}, 'default':Date.now()}
	});
	console.log('UserSchema 정의함.');

	UserSchema
	.virtual('password')
	.set(function(password){
		this.salt = this.makeSalt();
		this.hashed_password = this.encryptPassword(password);
		console.log('virtual password 저장됨: '+this.hashed_password);
	});

	//모델 인스턴스 객체에서 사용할 수 있는 함수등록
	UserSchema.method('encryptPassword', function(plainText,inSalt){
		if(inSalt){
			return crypto.createHmac('sha1', inSalt).update(plainText).digest('hex'); 
		}else{
			return crypto.createHmac('sha1', this.salt).update(plainText).digest('hex');
		}
	});

	//랜덤한 값 생성
	UserSchema.method('makeSalt', function(){
		return Math.round((new Date().valueOf()*Math.random()))+'';
	});

	UserSchema.method('authenticate', function(plainText, inSalt, hashed_password){
		if(inSalt){
			console.log('authenticate 호출됨');
			return this.encryptPassword(plainText, inSalt) == hashed_password;
		}else{	
			console.log('authenticate 호출됨');
			return this.encryptPassword(plainText) == hashed_password;}
	});

	//모델 객체에서 사용할 수 있는 함수 등록.
	UserSchema.static('findById',function(id, callback){
		return this.find({id:id},callback);

	});


	UserSchema.static('findAll',function(callback){
		return this.find({},callback);
	});
		
	return UserSchema;
}
module.exports = Schema;