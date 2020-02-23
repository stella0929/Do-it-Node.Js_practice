/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var winston = require('winston');
var winstonDaily = require('winston-daily-rotate-file');
var moment = require('moment');


function timeStampFormat(){
	return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
}

var logger = winston.createLogger({ //winston.Logger ->구버전
	transports: [
		new (winstonDaily)({//파일
			name: 'info-file',
			filename:'./log/server' //.log 뺌
			,datePattern: '_YYYY-MM-DD'
			,colorize:false,
			maxsize:50000000,
			maxFiles:1000,
			level:'info',
			showLevel:true,
			json:false,
			timestamp:timeStampFormat //timeStampFormat이 찍히지 않음.
		}), new (winston.transports.Console)({ //콘솔창
			name:'debug-console',
			colorize:true,
			level:'debug',
			showLevel:true,
			json:false,
			timestamp:timeStampFormat
		})
	]
});//logger를 이용해서 출력

logger.debug('this is debugging message.');
logger.error('this is error message.');


