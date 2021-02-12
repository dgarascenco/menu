const Drink = require("./Drink")
const Food = require("./Food")
const Price = require("./Price")
const Measurement = require("../physical/Measurement")

module.exports.menu = [
    new Food(1, "Salad", new Price(15.00, "MDL"), new  Measurement(0.3,"Kg")),
    new Drink(25, "Soup", new Price(25.00, "MDL"), new Measurement(0.5,"L")),
    new Food(3, "Bread with meat",new Price(5.00, "MDL"), new  Measurement(50,"g"))
]
