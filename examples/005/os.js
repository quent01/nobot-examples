const os = require('os');
const cpuCors = os.cpus();
const coreCount = cpuCors.length;
const cpuModel = cpuCors[0].model;

const homeDirectory = os.homedir();
console.log(`Your home dir is : ${homeDirectory}`);
console.log(`your ${cpuModel} has ${coreCount} cores`);