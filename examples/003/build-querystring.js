const querystring = require('querystring');

const apiHost = 'https://toto/rest/api/latest/search?jql=';

const jqlParams = {
    assignee: 'shaun.stone',
    startAt: 2,
    maxResults: 2
};

const apiUrl = `${apiHost}"${querystring.stringify(jqlParams)}"`

console.log(`api call : ${apiUrl}`);