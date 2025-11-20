//Functions
module.exports = {
    description: "the Cargo Report: ",

    //first function (Cargo description)
    cargoDescription(cargoId) {
        const findCargo = cargo.find(cargo => cargo.cargoId === cargoId);

        if (!findCargo) {
            console.log("Invalid cargo Id!");
            return null
        }
        else {
            console.log("This cargo name is: " + findCargo.name +
                " and this cargo is " + findCargo.weight + "kg. And the delivery type is " + "["+findCargo.deliveryType+"]");
        }
        return findCargo;
    },

    //second function
    maxWeightCapacity(cargoId) {
        let findCargo = cargo.find(cargo => cargo.cargoId === cargoId);
        let cap = transportationCapacity;

        if (!findCargo) {
            console.log("Invalid cargo Id!");
            weight = null;
            return null
        }
        else {
            weight = findCargo.weight;

            if (weight > cap.Ship) {
                console.log("Deny on ship!!! Overweight by: " + (weight - cap.Ship) + "kg");
                console.log("Deny on plane!!! Overweight by: " + (weight - cap.Plane) + "kg");
                console.log("Deny on truck!!! Overweight by: " + (weight - cap.Van) + "kg");
                console.log("Deny on hand carry!!! Overweight by: " + (weight - cap.ByHand) + "kg");
            }
            else if (weight <= cap.Ship && weight > cap.Plane) {
                console.log("Acceptable on ship");
                console.log("Deny on plane!!! Overweight by: " + (weight - cap.Plane) + "kg");
                console.log("Deny on truck!!! Overweight by: " + (weight - cap.Van) + "kg");
                console.log("Deny on hand carry!!! Overweight by: " + (weight - cap.ByHand) + "kg");
            }
            else if (weight <= cap.Ship && weight <= cap.Plane
                && weight > cap.Van) {
                console.log("Acceptable on ship");
                console.log("Acceptable on plane");
                console.log("Deny on truck!!! Overweight by: " + (weight - cap.Van) + "kg");
                console.log("Deny on hand carry!!! Overweight by: " + (weight - cap.ByHand) + "kg");
            }
            else if (weight <= cap.Ship && weight <= cap.Plane
                && weight <= cap.Van && weight > cap.ByHand) {
                console.log("Acceptable on ship");
                console.log("Acceptable on plane");
                console.log("Acceptable on Truck");
                console.log("Deny on hand carry!!! Overweight by: " + (weight - cap.ByHand) + "kg");
            }
            else if (weight <= cap.Ship && weight <= cap.Plane
                && weight <= cap.Van && weight <= cap.ByHand) {
                console.log("Acceptable on ship");
                console.log("Acceptable on plane");
                console.log("Acceptable on Truck");
                console.log("Acceptable on hand carry");
            }
        }


        return weight;
    },

    //Third Function: Different delivery cost in budget level, pro level and max level. the weight from original cargo  
    //will determine the cost, and then the total cost is the orignial cost plus the delivary fee
    //invalid delivery type will not be accepted and will throw weight null 
    deliveryCost(cargoId) {
        let findCargo = cargo.find(cargo => cargo.cargoId === cargoId);
        // option = cargo.deliveryType
        if (!findCargo) {
            console.log("Invalid cargo Id!");
            weight = null;
            return null
        }
        else {
            weight = findCargo.weight;
            if (findCargo.weight >= 1000) {
                cost = 100;
            }
            else if (findCargo.weight <= 1000) {
                cost = 50;
            }

            deliveryFee = {
                budget: 10,
                pro: 40,
                max: 50
            };

            let findDeliveryType = findCargo.deliveryType;
            if (!findDeliveryType) {
                console.log("Please choose budget, pro, or max only!");
                totalCost = null;
                return null;
            } else {
                totalCost = cost + deliveryFee[findDeliveryType];
            }

            if (totalCost != null) {
                console.log("The total delivery cost is $" + totalCost);
            }
        }
        return totalCost;
    },

    suggestedDeliveryPersonel(cargoId) {

        let findCargo = cargo.find(c => c.cargoId === cargoId);

        if (!findCargo) {
            console.log("Invalid cargo Id!");
            return null;
        }
        else {
            let weight = findCargo.weight;
            let cap = transportationCapacity;

            let suggested = Deliverer.filter(Deliverer => {
                let deliveryCap = cap[Deliverer.transportation];
                return weight <= deliveryCap;
            });
            suggested.forEach(Deliverer => {
                console.log(`Suggested delivery person: ${Deliverer.name}, the transportation is ${Deliverer.transportation})`);
            });

            return suggested;
        }
    },
    //fifth function
    getCustomer(cargoId) {

    let findCargo = cargo.find(cargo => cargo.cargoId === cargoId);

    if (!findCargo) {
        console.log("Invalid cargo ID!");
        return null;
    }

    let findCustomer = Customer.find(customer => customer.orderId === findCargo.cargoId);

    if (!findCustomer) {
        console.log("No customer found for this cargo!");
        return null;
    }
    else {
        console.log(`Customer for cargo [${findCargo.name}] [Box ID: ${cargoId}], Customer's name: ${findCustomer.name}, address: ${findCustomer.address}`);
    }
    return findCustomer;
}

}


//=============================================================================================================================================================
//Data
const cargo = [
    { name: "Box A", weight: 5000, deliveryType: "max", cargoId: "001" },
    { name: "Box B", weight: 500, deliveryType: "pro", cargoId: "002" },
    { name: "Box C", weight: 100, deliveryType: "budget", cargoId: "003" },
    { name: "Box D", weight: 1, deliveryType: "budget", cargoId: "004" },
];
const Customer = [
    { name: "Jason Wong", address: "abc street", orderId: "001" },
    { name: "Benjamin Teo", address: "xyz drive", orderId: "002" },
    { name: "Stephen Chow", address: "41st street", orderId: "003" },
    { name: "Jun Siang", address: "21st road", orderId: "004" }
];
const Deliverer = [
    { name: "Alex Tan", company: "Long co Pte Ltd", transportation: "Plane" },
    { name: "Alan Liao", company: "Sea co Pte Ltd", transportation: "Ship" },
    { name: "Lebron", company: "Short co pte Ltd", transportation: "Van" },
    { name: "Darren Low", company: "VeryShort co pte Ltd", transportation: "ByHand" },
];

const transportationCapacity =
{
    Ship: 10000,
    Plane: 500,
    Van: 250,
    ByHand: 5
};

//=============================================================================================================================================================
//Output
//description
console.log("This is " + module.exports.description);

//Declare cargo
let cargo1 = cargo[3].cargoId;

//call function 1
module.exports.cargoDescription(cargo1);
//call function 2
module.exports.maxWeightCapacity(cargo1);
//call function 3
module.exports.deliveryCost(cargo1);
// console.log(transportationCapacity.Plane);
//call function 4
module.exports.suggestedDeliveryPersonel(cargo1);
//call function 5
module.exports.getCustomer(cargo1);
