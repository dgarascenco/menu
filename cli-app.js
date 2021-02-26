
const p = require('./food');
let{menu}=p.menu;
console.log ("main", p);
console.log ("\n------------------<< Menu >>------------------\n");

function mainLoop(){
    p.helpers.printMenu( menu, (option) => { 
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
                if (item instanceof p.Food)
                    element = `${item.name} ( ${item.weight.value} ${item.weight.unit}) = ${item.price.value} ${item.price.currency}` ;
                else if (item instanceof p.Drink)
                    element = `${item.name} ( ${item.volume.value} ${item.volume.unit}) = ${item.price.value} ${item.price.currency}` ;              
        })
    return element;
}