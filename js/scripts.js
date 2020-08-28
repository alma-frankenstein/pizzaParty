function Pizza(size, toppings) { 
  this.totalCost = 0;
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.addToppingCost = function(total) {
  this.totalCost += total;
}

function checkForSize(sizeValue){
  let size;
  if (typeof(sizeValue) === "undefined") {
    size = 12;
  } else {
    size = sizeValue;
  }
  return parseInt(size);
}

function valToSize(numVal){
  let size;
  if (numVal === 12){
    size = "small";
  } else if (numVal === 14){
    size = "medium";
  } else {
    size = "large";
  }
  return size;
}

function valToTopping(numVal){
  let topping;
  if (numVal === 1){
    topping = "eggplant";
  } else if (numVal === 2){
    topping = "Peeps";
  } else if (numVal === 3){
    topping = "anchovies";
  } else {
    topping = "Lucky Charms";
  }
  return topping;
}


$(document).ready(function(){
  $("form#pizzaSelector").submit(function(event) {
    event.preventDefault();

    let toppingTotal = 0;
    let sizeChecked = $("input:radio[name=size]:checked").val(); 
    let sizeVal = checkForSize(sizeChecked);
    let toppingArray = [];

    $.each($("input[name='topping']:checked"), function(){
      let toppingVal = parseInt($(this).val());
      toppingTotal += toppingVal;
      topping = valToTopping(toppingVal);
      toppingArray.push(topping);
    });

    const pizzaSize = valToSize(sizeVal);
    const total = sizeVal + toppingTotal;
    let myPizza = new Pizza(pizzaSize, toppingArray);
    myPizza.addToppingCost(total);

    $("#cost").text("$" + myPizza.totalCost);
    $("#pizzaCost").show();

  })
});