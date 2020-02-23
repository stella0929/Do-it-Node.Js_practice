/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var url = require('url');

var urlStr = 'https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=Popcorn';

var curUrl = url.parse(urlStr); //객체로 만들어짐
console.dir(curUrl);
//pathname: '/search.naver',
//query: 'sm=top_hty&fbm=1&ie=utf8&query=Popcorn'요청파라미터

console.log('query -> '+ curUrl.query);

var curStr = url.format(curUrl); //문자열
console.log('url -> '+curStr);

var querystring = require('querystring');
var params = querystring.parse(curUrl.query);
console.log('검색어 : '+ params.query);

