const Item = require("./Item");
module.exports = class Food extends Item {
    constructor(id, name, price, weight) {
        super(id, name, price, weight);
        this.weight = weight
    } 

    print(){
        let text = `${this.name} (${this.weight.value} ${this.weight.unit})`
        let id = this.id.toString().padEnd(2);
        let name = text.padStart(15 + text.length/2).padEnd(30);
        let value = this.price.value.toString().padStart(3);
        let currency = this.price.currency.toString().padStart(4);
        return  `${id}: ${name} : ${value} ${currency}\n` +
                `----------------------------------------------`;
    }
}