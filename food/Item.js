const Item = require("./Price");
module.exports = class Item {
    constructor( id, name, price ) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // print(){
    //     let id = this.id.toString().padEnd(2);
    //     let name = this.name.padStart(15 + this.name.length/2).padEnd(30);
    //     let value = this.price.value.toString().padStart(3);
    //     let currency = this.price.currency.toString().padStart(4);
    //     return  `${id}: ${name} : ${value} ${currency}\n` +
    //             `----------------------------------------------`;
    // }
}