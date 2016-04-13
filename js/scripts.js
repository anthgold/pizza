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
  } else {
    totalPrice = 20;
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

    var inputtedSize = $("input#new-size").val();
    var inputtedToppings = []; $("input#new-toppings:checked").each(function() {
      inputtedToppings.push($(this).val());
    });
    var newPizza = new Pizza(inputtedSize, inputtedToppings);
    var price = newPizza.price();

    $(".total").text(price);
    $(".output").show();

  });
});
