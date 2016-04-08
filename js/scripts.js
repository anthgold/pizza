// Business Logic

  // Creates object Pizza with properties for size and toppings
function Pizza(pieSize, toppings) { // this could also be blank?!
this.pieSize = pieSize;
this.toppings = toppings; // this could also be a function
}

  // Sets the prices for various toppings
var  priceMushrooms = 0.5;
var  priceExtraCheese = 1;
var  pricePepperoni = 2;
      // To do: pass the toppings properties from the object Pizza to here

  // Sets the base price and topping multiplier for various sizes
var priceSmall = 10;
var priceMedium = 15;
var priceLarge = 20;
var multiplierSmall = 1;
var multiplierMedium = 1.5;
var multiplierLarge = 2;
      // To do: pass the size property from the object Pizza to here

  // This prototype will calculate the total price of the pie
Pizza.prototype.totalPrice = function(something) { // this needs help
  //  totalPrice is sumOfToppings * sizeMultiplier + priceOfSize
  return this.price ~the operation~ ;
}

  // This prototype will calculate the price of toppings
Pizza.prototype.addTurn = function(roll1, roll2) { // model
  return this.turnScore + roll1 + roll2;
}
Pizza.prototype.addToppings = function(toppingsArray) { // this needs help
  //  toppingsPrice is priceTopping1 + ... priceTopping(n) -- fracking loop?
  return this.toppings + toppingsArray[0] + ... toppingsArray[n];
}

// User Interface Logic
$(document).ready(function() {
  $("form#choose-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("input#new-size").val();
    var inputtedToppings = $("input#new-toppings").val(); // this is a motherloving array, so it will likely need tweaking

    var newPizza = new Pizza(inputtedSize, inputtedToppings);


  });   // Closes take input

  // $("#resubmit").click(function(event) {
  //   event.preventDefault();
  //   location.reload();
  //   $("#resubmit").hide();
  //   $("form#number-taker").show();
  // });   // Closes refresh function

});     // Closes invoke JQuery
