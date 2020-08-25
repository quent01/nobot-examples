const querystring = require('querystring');

const url = "https://test.fr?name=Shaun&age=28&comment=I+am+getting+old";

const parsedUrl = querystring.parse(url.substring(url.indexOf('?') + 1));

console.log(`name : ${parsedUrl.name}`);
console.log(`age : ${parsedUrl.age}`);
console.log(`comment : ${parsedUrl.comment}`);