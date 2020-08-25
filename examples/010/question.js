const fs = require('fs');
const readline = require('readline');
const { stdin, stdout } = require('process');
const path = require('path');

const interfaceInstance = readline.createInterface(stdin, stdout);


const onProjectInput = (name) => {
    interfaceInstance.close();
    stdin.destroy();
    createProjectDirectory(name);
};

interfaceInstance.question('What is the name of your project ? : ', onProjectInput);

const createProjectDirectory = (enteredName) => {
    const name = enteredName.trim();
    if(name === ''){
        console.log('cannot create project dir without a name');
        process.exit();
    }
    const projectPath = path.join(__dirname, name);
    if(fs.existsSync(projectPath)){
        console.log(`${name} already exists`);
        process.exit(0);
    }
    console.log(`creating a new project called ${name}`);
    fs.mkdirSync(projectPath);
}