let car = {
    make: " BMW",
    model:" M5 CS",
    fuel: "PETROL",
    horsepower: 575,
    productionYear: 2023,
    move: function(){
        console.log(`The car is drifting`);
    },
    start: function(){
        console.log(`The car starts`);
    },
    stop: function(){
        console.log(`The car stops`);
    }
}
console.log(car);
delete car.productionYear;

car.model = `M4 CS`;
car[`fuel`] = `diesel`;
console.log(car);

