// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

let inventory=require('./DataForInventory');
function getCarYears(data) {
    if(Array.isArray(data)){
    let carYears = [];
    for (let i = 0; i < data.length; i++) {
        carYears.push(data[i].car_year);
    }
    return carYears;
}
}
// let yearsArray = getCarYears(inventory);
// console.log(yearsArray);
module.exports=getCarYears;