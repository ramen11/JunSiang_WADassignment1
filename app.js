const cargoMod = require("./junsiang_cargoModule.js");
const data = require("./data.js");


console.log("This is " + module.exports.description);
//fist function 
cargoMod.maxWeightCapacity(weight);
//second function
cargoMod.deliveryCost(weight, deliveryType);

let available = cargoMod.availableDeliveryPersonel(cargo.name, Deliverer.name, Deliverer.company, Deliverer.transportation)
console.log("Available deliverers for", boxA.name, ":", " Deliverer Name: " + 
    available.Deliverer.name + " Company: " + 
    available.Deliverer.company + " Deliverer Transportation: " + 
    available.Deliverer.transportation);
