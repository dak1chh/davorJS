function vehicleCreator(vehicleType, vehicleMake, vehicleModel,  vehicleYear, vehicleFuel)
{
this.type= vehicleType;
this.make= vehicleMake;
this.year= vehicleYear;
this.fuel= vehicleFuel;
this.model= vehicleModel;
this.getInfo = function() {
return `The vehicle of type ${vehicleType}, make ${vehicleMake}, model ${vehicleModel}, production ${vehicleYear} uses fuel ${vehicleFuel}`;
}
this.getVehicle = function() {
    console.log(this);
}
}

let fico = new vehicleCreator("Car","Zastava", "Fico", 1965, "Petrol");
console.log(fico.getInfo());

let BMW = new vehicleCreator("Car","BMW", "M5CS", 2023, "Gas");
console.log(BMW.getInfo());

console.log(this);


// let firstName = `Bob`;
// let person2 = (firstName `Jull`);

// function printName() {
//     console.log(this.firstName);
// }
// printName();
// person2.printName = printName();
// printName();
// person2.printName();
//  nekade gresham PROVERI DOMA!!!!!