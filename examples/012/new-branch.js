const shell = require('shelljs');
const readLineSync = require('readline-sync');
const path = require('path');
const { repository } = require('./config');

const {delivery, baseBranch} = repository;
const repoName = delivery.substring(delivery.lastIndexOf('/'));

const repoPath = path.join(__dirname, repoName);
shell.cd(repoPath);

shell.exec(`git checkout ${baseBranch}`);
shell.exec(`git pull origin ${baseBranch}`);

const ticketId = readLineSync.question('What is the ticket ID ? ', {
    limit : input => input.trim().length > 0,
    limitMessage : 'Please enter a ticket ID (exple : GOT-123)'
});

shell.exec(`git checkout -b feature/${ticketId}`);
