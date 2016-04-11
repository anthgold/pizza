// Business Logic

  // Creates object Pizza with properties for size and toppings
function Pizza(pieSize, toppings, price) { // this could also be blank?!
this.pieSize = pieSize;
this.toppings = toppings; // this could also be a function
this.price = price; // adds third element for total price
}

  // This prototype will calculate the total price of the pie
Pizza.prototype.totalPrice = function(something) { // this needs help
  //  totalPrice is sumOfToppings * sizeMultiplier + priceOfSize
  var priceSmall = 10;
  var priceMedium = 15;
  var priceLarge = 20;
  return this.price ~the operation~ ;
}

  // This prototype will calculate the price of toppings
Pizza.prototype.addTurn = function(roll1, roll2) { // model
  return this.turnScore + roll1 + roll2;
}
Pizza.prototype.addToppings = function(toppingsArray) { // this needs help
  //  toppingsPrice is priceTopping1 + ... priceTopping(n) -- fracking loop?
  var  priceMushrooms = 0.5;
  var  priceExtraCheese = 1;
  var  pricePepperoni = 2;
  var multiplierSmall = 1;
  var multiplierMedium = 1.5;
  var multiplierLarge = 2;
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
