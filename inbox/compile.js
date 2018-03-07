// require('./contracts/Inbox.sol')
const path = require('path'); // cross platform compatibility valid path
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

// Assigning values to 'module.exports' allows us to import that value into other files in our project.
module.exports = solc.compile(source, 1).contracts[':Inbox'];