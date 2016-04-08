// Business Logic

  // Creates object pizza with properties for size and toppings

function Pizza(pieSize, toppings) { // this could also be blank?!
  this.pieSize = pieSize;
  this.toppings = toppings; // this could also be a function
}

  // This prototype calculates the total price

Pizza.prototype.totalPrice = function(something) { // this needs help
  return this.price ~the operation~ ;
}

  // It could be a prototype, or it could be a function
  // "In an object, variables become known as properties."
  // "In an object, functions become known as methods."
  // How does a prototype relate to a method?

  // Prototypes are employed by JavaScript to define methods, which is what functions in objects are referred to.

Pizza.prototype.addTurn = function(roll1, roll2) { // model
  return this.turnScore + roll1 + roll2;
}

Pizza.prototype.addToppings = function(toppingsArray) { // this needs help
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
