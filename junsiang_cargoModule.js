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


    // deliverySpeedCost(a, option) {
    //     const deliveryFee = {
    //         1: 10,  // Enterprise
    //         2: 40,  // Advanced
    //         3: 30   // Pro (corrected from 50 to match your variable)
    //     };

    //     const weight = this.maxWeightCapacity(a);
    //     let cost = weight >= 1000 ? 100 : 50;

    //     if (![1, 2, 3].includes(option)) {
    //         console.log("Please choose 1 to 3 only!");
    //         return null;
    //     }

    //     return cost + deliveryFee[option];
    // }

    //sort out 
    deliveryCost(a, option){

        if (this.maxWeightCapacity(a) >= 1000 ){
             cost = 100;
        }
        else if (this.maxWeightCapacity(a) <= 1000 ){
             cost = 50;
        }

        deliveryFee = {
            entry:10,
            pro:40,
            max:50
        };

        if (!["entry", "pro", "max"].includes(option)) {
            console.log("Please choose entry, pro, or max only!");
            return null;
        }
        else{
            console.log("The total delivery cost is " + module.exports.deliveryCost(this.maxWeightCapacity(a), deliveryFee[option]));
        }

        return cost  + deliveryFee[option];
    },
}
const cargo = 500;
const deliveryType = "entry";
console.log("This is " + module.exports.description);
//fist function 
module.exports.maxWeightCapacity(cargo);
module.exports.deliveryCost(cargo, deliveryType);