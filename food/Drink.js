const Item = require("./Item");
module.exports = class Drink extends Item {
    constructor(id, name, price, volume) {
        super(id, name, price, volume);
        this.volume = volume
    } 
    print(){
        let text = `${this.name} (${this.volume.value} ${this.volume.unit})`
        let id = this.id.toString().padEnd(2);
        let name = text.padStart(15 + text.length/2).padEnd(30);
        let value = this.price.value.toString().padStart(3);
        let currency = this.price.currency.toString().padStart(4);
        return  `${id}: ${name} : ${value} ${currency}\n` +
                `----------------------------------------------`;
    }
}
