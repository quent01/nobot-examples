require('colors');
const readLineSync = require('readline-sync');
const path = require('path');
const fse = require('fs-extra');

const GAME_TEMPLATES = 'game-templates';
const NO_CHOICCE_MADE = -1;

// 1. use a game template already build
const templateDir = path.join(__dirname, GAME_TEMPLATES);
const templates = fse.readdirSync(templateDir);

const index = readLineSync.keyInSelect(templates);
if(index === NO_CHOICCE_MADE){
    process.exit(0);
}

const projecName = readLineSync.question(
    'What is the name of your game ? ',
    {
        limit : input => input.trim().length > 0,
        limitMessage : 'The project has to have a name, try again.'
    }
);

const confirmCreateDirectory = readLineSync.keyInYN(`You entered '${projecName}, create directory with this name ?' `);

// 3. if happy to create, copy the template to the name location
if(confirmCreateDirectory){
    const template = templates[index];
    const src = path.join(templateDir, template);
    const destination = path.join(__dirname, projecName);
    fse.copy(src, destination)
        .then(
            () => console.log(`Successfully created ${destination}`.green)
        )
        .catch(
            err => console.error(err)
        );
}
else{
    console.log('Aborted creating a new game');
}
