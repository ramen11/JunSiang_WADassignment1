module.exports = {
    description: "The Cargo Modulation Report",

    //
    maxWeightCapacity(a) {
        b = 10000;
        c = 500;
        d = 250;
        e = 5;

        console.log("This cargo is " + a + "kg");

        if (a > b) {
            console.log("Deny on ship!!! Overweight by: " + (a - b) + "kg");
            console.log("Deny on plane!!! Overweight by: " + (a - c) + "kg");
            console.log("Deny on truck!!! Overweight by: " + (a - d) + "kg");
            console.log("Deny on hand carry!!! Overweight by: " + (a - e) + "kg");
        }
        else if (a <= b && a > c) {
            console.log("Acceptable on ship");
            console.log("Deny on plane!!! Overweight by: " + (a - c) + "kg");
            console.log("Deny on truck!!! Overweight by: " + (a - d) + "kg");
            console.log("Deny on hand carry!!! Overweight by: " + (a - e) + "kg");
        }
        else if (a <= b && a <= c && a > d) {
            console.log("Acceptable on ship");
            console.log("Acceptable on plane");
            console.log("Deny on truck!!! Overweight by: " + (a - d) + "kg");
            console.log("Deny on hand carry!!! Overweight by: " + (a - e) + "kg");
        }
        else if (a <= b && a <= c && a <= d && a > e) {
            console.log("Acceptable on ship");
            console.log("Acceptable on plane");
            console.log("Acceptable on Truck");
            console.log("Deny on hand carry!!! Overweight by: " + (a - e) + "kg");
        }
        else if (a <= b && a <= c && a <= d && a <= e) {
            console.log("Acceptable on ship");
            console.log("Acceptable on plane");
            console.log("Acceptable on Truck");
            console.log("Acceptable on hand carry");
        }
        return a;
    },

    //Second Function: Different delivery cost in entry level, pro level and max level. the weight from original cargo  
    //will determine the cost, and then the total cost is the orignial cost plus the delivary fee
    //invalid delivery type will not be accepted and will throw a null 
    deliveryCost(a, option) {

        if (this.maxWeightCapacity(a) >= 1000) {
            cost = 100;
        }
        else if (this.maxWeightCapacity(a) <= 1000) {
            cost = 50;
        }

        deliveryFee = {
            entry: 10,
            pro: 40,
            max: 50
        };

        if (!["entry", "pro", "max"].includes(option)) {
            console.log("Please choose entry, pro, or max only!");
            return null;
        }
        
        totalCost = cost + deliveryFee[option];

        if (totalCost != null) {
            console.log("The total delivery cost is $" + totalCost);
        }
        return totalCost;
    },
    //third function
}
const cargo = 5000;
const deliveryType = "max";
console.log("This is " + module.exports.description);
//fist function 
module.exports.maxWeightCapacity(cargo);
//second function
module.exports.deliveryCost(cargo, deliveryType);