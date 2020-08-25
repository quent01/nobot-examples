const argv = require('minimist')(process.argv.slice(2));
const readLineSync = require('readline-sync');
const NO_CHOICE_MADE = -1;

let {name, template, ticket} = argv;
const templates = [
    'pick-of-three',
    'tic-tac',
    'spin-the-wheel'
];

if(name === undefined){
    name = readLineSync.question(
        'What is the name of the new game ? ',
        {
            limit : input => input.trim().length > 0,
            limitMessage : 'The game must have a name'
        }
    );
}

if(template === undefined || !templates.includes(template)){
    const templateIndex = readLineSync.keyInSelect(
        templates,
        'Choose yout template'
    );
    if(templates === NO_CHOICE_MADE){
        console.log('No tmeplate chosen, stopping execution');
        process.exit(0);
    }
    template = templates[templateIndex];
}

if(ticket === undefined || ticket.indexOf('GS-')){
    ticket = `GS-${readLineSync.question(
        'Enter ticket number, GS-',
        {
            limit : input => input.trim().length > 0,
            limitMessage : 'Cannot continu without a ticket number'
        }
    )}`;
}

console.log(`Creating game '${name}' with template '${template}' on branch '${ticket}'`);
