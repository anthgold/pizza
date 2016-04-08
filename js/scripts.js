// Business Logic

function Score() {       // model
  this.turnScore = 0;
  this.totalScore = 0
}

function Pizza(pieSize, toppings, price) { // this could also be blank?!
  this.pieSize = pieSize;
  this.toppings = toppings; // this could also be a function
  this.price; // and this could definitely be a function
}



Pizza.prototype.addTotal = function(turnScore) { // model
  return this.totalScore + turnScore;
}

Pizza.prototype.totalPrice = function(something) { // this needs help
  return this.price ~the operation~ ;
}



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
