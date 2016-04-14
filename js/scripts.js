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
      totalPrice += this.toppings.length * 1;
    }
  }
  return totalPrice
};

// User Interface Logic
$(document).ready(function() {
  $("form#choose-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $('input[name="size"]:checked', '#choose-pizza').val();
    console.log(inputtedSize); // this works

    var inputtedToppings = []; $('input[name="topping"]:checked', '#choose-pizza').each(function() {
      inputtedToppings.push($(this).val());
    });
    console.log(inputtedToppings); // this works

    var newPizza = new Pizza(inputtedSize, inputtedToppings);
    var price = newPizza.price();
    console.log(newPizza); // this doesn't appear to
    console.log(price); // this is getting size price but not toppings

    $(".total").text(price);
    $(".output").show();

  });
});
