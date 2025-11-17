module.exports = {
    description: "The Cargo Modulation Report",
    
    //
    maxWeightCapacity(a) {
        b = 10000;
        c = 500;
        d = 250;
        e = 5;

        console.log("This cargo is " + a +"kg");

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
             console.log("Deny on hand carry!!! Overweight by: " + (a-e) + "kg");
        }
        else if (a <= b && a <= c && a <= d && a <= e) {
            console.log("Acceptable on ship");
            console.log("Acceptable on plane");
            console.log("Acceptable on Truck");
            console.log("Acceptable on hand carry");
        }
        return a;
    },
}

console.log ("This is " + module.exports.description);
//fist function 
module.exports.maxWeightCapacity(100000);