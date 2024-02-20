// ==== Problem #3 ====JS Drill: Cars
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

let inventory=require('./DataForInventory');
function carmodel(data){
    let ar=[];
    for (let index = 0; index < data.length; index++) {
        ar.push(data[index].car_model);
    }
    ar.sort();
    return ar;
}
let result=carmodel(inventory);
console.log(result);