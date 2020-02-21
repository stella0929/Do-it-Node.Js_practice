/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var path = require('path');

var directories = ['Users','Enjoy','docs'];
var dirstr = directories.join();//3개의 정보가 같이 문자열로 붙어 리턴
console.log('dir: '+dirstr);

var dirStr2 = directories.join(path.sep/*구분자 지정*/);
console.log('dir2: '+ dirStr2);

var filepath = path.join('/Users/enjoy','notepad.exe');
console.log('dir3 : '+ filepath);//가장 많이 쓰는 방법
//path라는 모듈과 join이라는 함수 사용
//파일 경로 지정할때 유용


var dirname = path.dirname(filepath); //dirname은 폴더 패스의미
console.log('dirname: '+dirname);
var basename = path.basename(filepath);
console.log('basename: '+ basename);//파일 이름
var extname = path.extname(filepath);
console.log('extname: ',extname);//확장자
