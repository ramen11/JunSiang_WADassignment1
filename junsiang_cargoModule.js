//Functions
module.exports = {
    description: "The Cargo Modulation Report",

    //first function (Cargo description)
    cargoDescription(cargoId) {
        const findCargo = cargo.find(cargo => cargo.cargoId === cargoId);

        if (!findCargo) {
            console.log("Invalid cargo Id!");
            return null
        }
        else {
            console.log("This cargo name is: " + findCargo.name +
                " and this cargo is " + findCargo.weight + "kg. And the delivery type is " + findCargo.deliveryType);
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

    //Third Function: Different delivery cost in entry level, pro level and max level. the weight from original cargo  
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
                entry: 10,
                pro: 40,
                max: 50
            };

            let findDeliveryType = findCargo.deliveryType;
            if (!findDeliveryType) {
                console.log("Please choose entry, pro, or max only!");
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

    //fourth function (delivery personel)
    availableDeliveryPersonel(cargoId) {
        let findCargo = cargo.find(cargo => cargo.cargoId === cargoId);
        if (!findCargo) {
            console.log("Invalid cargo Id!");
            weight = null;
            return null
        }
        else {
            let Capacity = [transportationCapacity.Ship, transportationCapacity.Plane, transportationCapacity.Van, transportationCapacity.ByHand];
            return availableOption.filter(Deliverer => {
                findCargo.weight = Capacity[Deliverer.transportaion];
                return weight <= findCargo.weight;
            });
        }
    },

    // //fifth function (find customer)
    // customer(cargoId, orderId) {
    //     let findcargoId = this.cargoDescription(findCargo);
    //     let findorderId = cargo.Customer.orderId;

    //     if (findcargoId == findorderId) {
    //         console.log("The Customer of this product: " + cargo.name + " belongs to: " + Customer.name + " adress: " + Customer.address);
    //     }
    //     return cargoId, orderId;
    // }
}


//=============================================================================================================================================================
//Data
const cargo = [
    { name: "Box A", weight: 5000, deliveryType: "max", cargoId: "001" },
    { name: "Box B", weight: 500, deliveryType: "pro", cargoId: "002" },
    { name: "Box C", weight: 100, deliveryType: "entry", cargoId: "003" },
    { name: "Box C", weight: 100, deliveryType: "entry", cargoId: "004" },
];
const Customer = [
    { name: "Jason Wong", address: "abc street", orderId: "001" },
    { name: "Benjamin", address: "xyz drive", orderId: "002" },
    { name: "Stephen", address: "41st street", orderId: "003" },
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
console.log("This is " + module.exports.description);


// cargoDescription(cargoId);
let cargo1 = cargo[0].cargoId;

//call function 1
module.exports.cargoDescription(cargo1);
//call function 2
module.exports.maxWeightCapacity(cargo1);
//call function 3
module.exports.deliveryCost(cargo1);
// console.log(transportationCapacity.Plane);