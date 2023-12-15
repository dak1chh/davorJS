function weightInChicken(weight, weightInKg = 0.5)
{
  let weightInKg = weight * weightInKg;
  return weightInKg;

}

let weight =prompt("Your weight in kilograms is");

let result =weightInChicken(weight);

let paragraph = document.getElementById("result1");
paragraph.innerText = "You are chickens " + result;
