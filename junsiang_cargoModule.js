const {cargo} = require ("./data");

module.exports = {
    description: "The Cargo Modulation Report",
    
    //first function (Product description)


    //second
    maxWeightCapacity(a) {
        ship = 10000;
        plane = 500;
        van = 250;
        hand = 5;

        console.log("This cargo is " + a + "kg");

        if (a > ship) {
            console.log("Deny on ship!!! Overweight by: " + (a - ship) + "kg");
            console.log("Deny on plane!!! Overweight by: " + (a - plane) + "kg");
            console.log("Deny on truck!!! Overweight by: " + (a - van) + "kg");
            console.log("Deny on hand carry!!! Overweight by: " + (a - hand) + "kg");
        }
        else if (a <= ship && a > plane) {
            console.log("Acceptable on ship");
            console.log("Deny on plane!!! Overweight by: " + (a - c) + "kg");
            console.log("Deny on truck!!! Overweight by: " + (a - d) + "kg");
            console.log("Deny on hand carry!!! Overweight by: " + (a - e) + "kg");
        }
        else if (a <= ship && a <= plane && a > van) {
            console.log("Acceptable on ship");
            console.log("Acceptable on plane");
            console.log("Deny on truck!!! Overweight by: " + (a - d) + "kg");
            console.log("Deny on hand carry!!! Overweight by: " + (a - e) + "kg");
        }
        else if (a <= ship && a <= plane && a <= van && a > hand) {
            console.log("Acceptable on ship");
            console.log("Acceptable on plane");
            console.log("Acceptable on Truck");
            console.log("Deny on hand carry!!! Overweight by: " + (a - e) + "kg");
        }
        else if (a <= ship && a <= plane && a <= van && a <= hand) {
            console.log("Acceptable on ship");
            console.log("Acceptable on plane");
            console.log("Acceptable on Truck");
            console.log("Acceptable on hand carry");
        }
        return a;
    },

    //Third Function: Different delivery cost in entry level, pro level and max level. the weight from original cargo  
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
    //fourth function (delivery personel)
    availableDeliveryPersonel(weight, availableOption){
        const  Capacity = [this.ship, this.plane, this.van, this.hand];
        return availableOption.filter(d => {
            this.maxWeightCapacity(weight) = Capacity[d.tranportaion];
            return weight <= this.maxWeightCapacity(weight);
        })
    },

    //fifth function (customer)
    customer(name){
        return name;
    }
}