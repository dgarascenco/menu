////////////
const fs = require('fs');
let dir = fs.readdirSync('./food'); 
dir.filter(file => !file.endsWith('.json') && file != 'index.js').map( file => module.exports[file.split('.')[0]] = require( `./${file}`)  ) 

