const url = require('url');

const args = process.argv.slice(2);

const [urlEntered] = args;

if(urlEntered === undefined){
    console.error("Please pass a url, e.g. https://www.google.com/search?q=toto&t=tata");
    process.exit(0);
}

const {
    protocol,
    slashes,
    host,
    query,
    href
} = url.parse(urlEntered);

console.log(`protocol : ${protocol}`);
console.log(`slashes : ${slashes}`);
console.log(`host : ${host}`);
console.log(`query : ${query}`);
console.log(`href : ${href}`);
