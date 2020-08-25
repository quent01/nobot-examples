const { platform } = require('os');
const { exec } = require('child_process');

const WINDOWS_PLATFORM = 'win32';
const LINUX_PLATFORM = 'linux';

const osPlatform = platform();
console.log(`${osPlatform}`);
const args = process.argv.slice(2);

const [url] = args;

if(url === undefined){
    console.error("Please enter a url");
    process.exit(0);
}

let command;

if(osPlatform === WINDOWS_PLATFORM){
    command = `start microsoft-edge:${url}`;
}
else if(osPlatform === LINUX_PLATFORM){
    command = `chromium-browser ${url}`;
}
else{
    command = `open -a "Google Chrome" ${url}`;
}

console.log(`Èxecuting command : ${command}`);
exec(command);