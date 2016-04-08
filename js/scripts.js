








// Business Logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings; // this could also be a function
}







// User Interface Logic
$(document).ready(function() {
  $("form#number-taker").submit(function(event) {
    event.preventDefault();

  });   // Closes take input

  // $("#resubmit").click(function(event) {
  //   event.preventDefault();
  //   location.reload();
  //   $("#resubmit").hide();
  //   $("form#number-taker").show();
  // });   // Closes refresh function

});     // Closes invoke JQuery
