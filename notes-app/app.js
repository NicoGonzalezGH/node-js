const chalk = require('chalk');
const getNotes = require('./notes.js');

const message = getNotes();
console.log(message);
console.log(chalk.blue.bgRed.bold.inverse('Success!'));