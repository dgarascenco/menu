
let { menu, printMenu } = require('./food')

console.log ("\n------------------<< Menu >>------------------\n")

function mainLoop(){
    printMenu( menu, (option) => { 
            if ( option != "" ){
                elementMenu =  getItem(option);
                if (elementMenu == false)
                    console.log( "Sorry, we don't have this item menu!");
                else
                    console.log( "You've chosen: " + elementMenu );
                setTimeout(mainLoop, 500);
            }
        })
}
mainLoop();

function getItem(id){
    let element = false;
     menu.forEach( item =>{ 
            if ( item.id == parseInt(id) )
                element = item.name + " (" + item.price.value + " " + item.price.currency +  ")";       
        })
    return element;
}