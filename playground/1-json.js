const fs = require('fs');
//const book = {
//    title: 'Ego is the Enemy',
//    author: 'Nico Gonzalez'
//};
//
//Take and object and convert it to JSON
//const bookJSON = JSON.stringify(book);
//fs.writeFileSync('1-json.json', bookJSON);

//const dataBuffer = fs.readFileSync('1-json.json');
//const dataJSON = dataBuffer.toString();
//const data = JSON.parse(dataJSON);
//console.log(data.title);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data);