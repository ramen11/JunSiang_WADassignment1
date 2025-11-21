# Cargo Checking System

To run the code, press: nodemon junsiang_cargoModule.js or node junsiang_cargoModule.js

The only parameters required is cargo1, because the functions are made to determine the cargo1 details 


📚 Database Structure
Cargo

name – Cargo name

weight – Cargo weight

deliveryType – Delivery standard (budget, pro, max)

cargoId – Unique cargo ID

Customer

name – Customer name

address – Customer address

orderId – Customer order ID

Deliverer

name – Deliverer name

company – Delivery company

transportation – Type of transport used (ship, plane, van, by hand)

Transportation Capacity

Each transport has a maximum weight it can carry:

Ship

Plane

Van

ByHand

⚙️ Function Descriptions
1. Cargo Description

Displays cargo details:

Cargo name

Weight

Delivery type

2. Transportation Capacity Check

Determines which transport can carry the cargo by:

Comparing cargo weight against transport limits

Showing overweight calculation

Showing whether each transport is acceptable or denied

3. Delivery Cost Calculation

Delivery cost is based on:

Weight

Above 1000kg → $100

Below 1000kg → $50

Delivery type

budget → $10

pro → $40

max → $50

Final price = weight cost + delivery type fee

4. Suggested Delivery Personnel

Suggests deliverers based on:

Cargo weight

Transportation capacity of each deliverer

5. Customer Lookup

Links cargo to the correct customer:

If cargoId matches orderId, the system displays:

Cargo name

Cargo ID

Customer name

Customer address
Outputs:
Function 1:
This cargo name is: Box D and this cargo is 1kg. And the delivery type is [budget]

Function 2:
Acceptable on ship
Acceptable on plane
Acceptable on Truck
Acceptable on hand carry

Function 3:
The total delivery cost is $60

Function 4:
Suggested delivery person: Alex Tan, the transportation is Plane)
Suggested delivery person: Alan Liao, the transportation is Ship)

Function 5:
Customer for cargo [Box D] [Box ID: 004], Customer's name: Jun Siang, address: 21st road
