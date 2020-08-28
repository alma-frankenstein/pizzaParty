
function Pizza() { 
  this.totalCost = 0;
}

Pizza.prototype.addToppingCost = function(total) {
  this.totalCost += total;
}

$(document).ready(function(){
  $("form#pizzaSelector").submit(function(event) {
    event.preventDefault();

    let toppingTotal = 0;
    sizeVal = parseInt($("input:radio[name=size]:checked").val());
    console.log(sizeVal);

    $.each($("input[name='topping']:checked"), function(){
      toppingTotal += parseInt($(this).val());
    });

    const total = sizeVal + toppingTotal;

    let myPizza = new Pizza();
    myPizza.addToppingCost(total);

    $("#cost").text("$" + myPizza.totalCost);
    $("#pizzaCost").show();

  })
});