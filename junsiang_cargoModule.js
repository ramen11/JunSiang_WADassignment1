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

    //
    shippingCost(weight, destination) {
        weight = module.exports.maxWeightCapacity();

        if (weight > 10000){
            cost = 1500;
        }else if(weight <= 10000 && weight >1000){
            cost = 200;
        }
        else if(weight <= 10000 && weight <=1000 && weight > 100){
            cost = 100;
        }
        else if(weight <= 10000 && weight <=1000 && weight <= 100 && weight <=10){
            cost = 1;
        }

   rates = {
    1: { name: "India", rate: 1.5, multiplier: 1.5 },
    2: { name: "Cambodia", rate: 1.49, multiplier: 1.7 },
    3: { name: "Sri Lanka", rate: 1.44, multiplier: 1.6 },
    4: { name: "Syria", rate: 1.41, multiplier: 1.2 },
    5: { name: "Malaysia", rate: 1.24, multiplier: 1.1 },
    6: { name: "Singapore", rate: 1.10, multiplier: 1.0 }
    };



        totalCost = 0;
        if (b == 1) {
            totalCost = cost + (country.India * rates.India);
            console.log("This cargo is going to India");
            console.log("Total shipping cost in SGD is $" + totalCost)
        }
        else if (b == 2) {
            totalCost = cost + (country.Cambodia * rates.Cambodia);
            console.log("This cargo is going to Cambodia");
            console.log("Total shipping cost in SGD is $" + totalCost)
        }
        else if (b == 3) {
            totalCost = cost + (country.Sri_Lanka * rates.Sri_Lanka);
            console.log("This cargo is going to Sri Lanka");
            console.log("Total shipping cost in SGD is $" + totalCost)
        }
        else if (b == 4) {
            totalCost = cost + (country.Syria * rates.Syria);
            console.log("This cargo is going to Syria");
            console.log("Total shipping cost in SGD is $" + totalCost)
        }
        else if (b == 5) {
            totalCost = cost + (country.Malaysia * rates.Malaysia);
            console.log("This cargo is going to Malaysia");
            console.log("Total shipping cost in SGD is $" + totalCost)
        }
        else if (b == 6) {
            totalCost = cost + (country.Singapore * rates.Singapore);
            console.log("This cargo is going to Singapore");
            console.log("Total shipping cost in SGD is $" + totalCost)
        }
        return b ;
    }


console.log("This is " + module.exports.description);
//fist function 
module.exports.maxWeightCapacity(100000);
module.exports.shippingCost(1);
