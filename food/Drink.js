const Item = require("./Item");
module.exports = class Drink extends Item {
    constructor(id, name, price, volume) {
        super(id, name, price, volume);
        this.volume = volume
    } 
}
