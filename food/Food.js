const Item = require("./Item");
module.exports = class Food extends Item {
    constructor(id, name, price, weight) {
        super(id, name, price, weight);
        this.weight = weight
    } 
}