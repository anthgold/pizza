



// Business Logic

function Pizza(size, toppings) { // this could also be blank?!
  this.size = size;
  this.toppings = toppings; // this could also be a function
}

Pizza.prototype.addTotal = function(turnScore) { // this needs tailored
  return this.totalScore + turnScore;
}

Pizza.prototype.addTurn = function(roll1, roll2) { // this needs tailored
  return this.turnScore + roll1 + roll2;
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
