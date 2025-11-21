# Cargo Checking System

To run the code, press: nodemon junsiang_cargoModule.js or node junsiang_cargoModule.js<br>

The only parameters required is cargo1, because the functions are made to determine the cargo1 details <br>


(The Databases):<br>

Cargo      <br>       
-name      <br>        
-weight            <br>
-deliveryType   <br>    
-cargoId  <br>

Customer <br>
-name       <br>         
-address   <br>  
-orderId      <br> 

Deliverer<br>
-name          <br> 
-company      <br>    
-transportation    <br>  

Transportation Capacity       <br>   
-ship<br>
-plane<br>
-van<br>
-byhand<br>


(Functions):

Function 1:<br> This function will display the details of the cargo, such as cargo name, weight and its delivery type.


Function 2:<br> This function will determine which transport is possible to carry and alsi calculate the overweight.
I use the weight of the cargo and minus off from the max weight capacity of each transportation to determine the overweight.
Only if the weight exceeded the capacity of the transportation, it will then do the minus and deny. Else it is acceptable.




Function 3:<br> This function will calculate the total price of the delivery, the price will varies by the weight of the 
cargo, and the delivery type. 3 kinds of delivery type starting from the cheapest "budget", "pro", "max". 

buget is $10;
<br>
pro is $40;
<br>
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
<br>
Function 1:<br>
This cargo name is: Box D and this cargo is 1kg. And the delivery type is [budget]<br>

Function 2:<br>
Acceptable on ship<br>
Acceptable on plane<br>
Acceptable on Truck<br>
Acceptable on hand carry<br>

Function 3:<br>
The total delivery cost is $60<br>

Function 4:<br>
Suggested delivery person: Alex Tan, the transportation is Plane)<br>
Suggested delivery person: Alan Liao, the transportation is Ship)<br>

Function 5:<br>
Customer for cargo [Box D] [Box ID: 004], Customer's name: Jun Siang, address: 21st road<br>
