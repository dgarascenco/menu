// menu functionality
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports.printMenu = ( menu, cb ) => {   
    menu.forEach( element => console.log(element.print()) );
    rl.question("Choose >>", (option)=>{
        cb( option );
    });
}
