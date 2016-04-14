// Business Logic

function Pizza(pieSize, toppings) {
this.pieSize = pieSize;
this.toppings = toppings;
}

Pizza.prototype.price = function () {
  var totalPrice = 0;
  if (this.pieSize === "small") {
    totalPrice = 10;
  } else if (this.pieSize === "medium") {
    totalPrice = 15;
  } else if (this.pieSize === "large") {
      totalPrice = 20;
    } else {
    totalPrice = " Free!"; // this is an alert of sorts
  }
  if (this.toppings === "mushrooms") {
    totalPrice += 1;
  } else {
  totalPrice += 2;
  }
  return totalPrice
};

// User Interface Logic
$(document).ready(function() {
  $("form#choose-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $('input[name="size"]:checked', '#choose-pizza').val();
    console.log(inputtedSize); // this works

    var inputtedTopping = $('input[name="topping"]:checked', '#choose-pizza').val();
    console.log(inputtedTopping); // does this work?

    var newPizza = new Pizza(inputtedSize, inputtedTopping);
    var price = newPizza.price();
    console.log(newPizza); // this doesn't appear to
    console.log(price); // this is getting size price but not toppings

    $(".total").text(price);
    $(".output").show();

  });
});
