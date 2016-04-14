// Business Logic

function Pizza(pieSize, toppings) {
this.pieSize = pieSize;
this.toppings = [];
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
    totalPrice = " Free!";
  }
  for (i = 0; i <= this.toppings.length; i++) {
    if (this.toppings.length <= 1) {
      totalPrice
    } else {
      total += this.toppings.length * 1;
    }
  }
  return totalPrice
};

// User Interface Logic
$(document).ready(function() {
  $("form#choose-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("input.size").val();
    var inputtedToppings = []; $("input.topping:checked").each(function() {
      inputtedToppings.push($(this).val());
    });
    var newPizza = new Pizza(inputtedSize, inputtedToppings);
    var price = newPizza.price();

    $(".total").text(price);
    $(".output").show();

  });
});
