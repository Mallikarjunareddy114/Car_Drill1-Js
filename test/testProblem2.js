// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
"Last car is a *car make goes here* *car model goes here*"

const inventory=require('../DataForInventory');
let findoutlastCar=require('../problem2');

let result=findoutlastCar(inventory);
console.log(result);