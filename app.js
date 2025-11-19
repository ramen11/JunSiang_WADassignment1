const cargoMod = require("./junsiang_cargoModule.js");

const weight = 5000;
const deliveryType = "max";

cargo = [
    weight,
    deliveryType,
];


console.log("This is " + module.exports.description);
//fist function 
cargoMod.maxWeightCapacity(weight);
//second function
cargoMod.deliveryCost(weight, deliveryType);
