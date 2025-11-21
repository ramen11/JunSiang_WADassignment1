# Cargo Checking System

To run the code, press: nodemon junsiang_cargoModule.js or node junsiang_cargoModule.js

The only parameters required is cargo1, because the functions are made to determine the cargo1 details 


(The Databases):

Cargo             
-name                //The cargo name
-weight              //cargo weight 
-deliveryType        //Standards of delivery
-cargoId             //cargo id

Customer 
-name                //Customer name
-address             //Customer address
-orderId             //Customer's order id

Deliverer
-name                 //Deliverer name
-company              //Deliverer company
-transportation       //Transportation that deliverer use to transport items

Transportation Capacity          //each transportation has a limit of how heavy it can carry
-ship
-plane
-van
-byhand


(Functions):

Function 1: This function will display the details of the cargo, such as cargo name, weight and its delivery type.
<br>

Function 2: This function will determine which transport is possible to carry and alsi calculate the overweight.
I use the weight of the cargo and minus off from the max weight capacity of each transportation to determine the overweight.
Only if the weight exceeded the capacity of the transportation, it will then do the minus and deny. Else it is acceptable.
<br>
Function 3: This function will calculate the total price of the delivery, the price will varies by the weight of the 
cargo, and the delivery type. 3 kinds of delivery type starting from the cheapest "budget", "pro", "max". 
<br>
buget is $10;
pro is $40;
max is $50;
<br>
weight that is above 1000kg will cost $100 if not it will cost $50.
<br>
Total cost will be the weight plus the delivery type.
<br>
Function 4: This function will refer to the suggested delivery personel.
The weight of the cargo will varies the type of transportation and only if the 
delivery personel have the transport, the system will recommend the delivery job to them.
<br>
Function 5: This function will determine the customer's cargo.
Since the cargo id is same as order id. If the cargo is link to the order id, the cargo will 
belong to that customer. It will show the cargo name, the cargo id, the customer name and the 
address of the customer.
<br>

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
