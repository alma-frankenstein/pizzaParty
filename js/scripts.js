
function Pizza() { 
  this.totalCost = 0;
}

Pizza.prototype.addToppingCost = function(total) {
  this.totalCost += total;
}

function checkForSize(sizeValue){
  let size;
  // if (typeof(sizeValue) != "number") {
  if (typeof(sizeValue) === "undefined") {
    size = 12;
  } else {
    size = sizeValue;
  }
  return parseInt(size);
}


$(document).ready(function(){
  $("form#pizzaSelector").submit(function(event) {
    event.preventDefault();

    let toppingTotal = 0;
    sizeChecked = $("input:radio[name=size]:checked").val();  //remove parseInt
    console.log("checked value " + sizeChecked); //undefined
    console.log("typeof sizeChecked " + typeof(sizeChecked));

    sizeVal = checkForSize(sizeChecked);
    console.log("after function " + sizeVal); //Nan
    console.log(typeof(sizeVal)); //number

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