// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

let inventory=require('./DataForInventory');
function bmwaudi(data){
    let empty=[]
    for (let index = 0; index < data.length; index++) {
       if(data[index].car_make==="BMW" || data[index].car_make==="Audi"){
        empty.push(data[index])
       }
        
    }
    return empty;
}
let cars=bmwaudi(inventory);
console.log(cars);