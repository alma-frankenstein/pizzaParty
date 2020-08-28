
function Pizza() { 
  this.totalCost = 0;
  // this.size = size;
  // this.toppings = toppings;
}

Pizza.prototype.addToppingCost = function(total) {
  this.totalCost += total;
}

// function langChooser(total){
//   let lang;

//   if (total <= 8){
//     lang = lol;
//   } else if (total >= 13){
//     lang = clojure; 
//   } else {
//     lang = python;
//   }
//   return lang;
// }


$(document).ready(function(){
  $("form#pizzaSelector").submit(function(event) {
    // const sizeVal = parseInt($("input:radio[name=size]:checked").val());
    // const toppingVal = parseInt($("input:radio[name=topping]:checked").val());


    const sizeVal = parseInt($("input:radio[name=size]:checked").val());
    // const topping1Val = parseInt(document.getElementById("topping1").value);
    const topping1Val = document.getElementById("topping1").value;
    const topping1ValInt = parent(topping1Val);


    // const topping2Val = parseInt(document.getElementById("topping2").value);
    console.log(topping1ValInt);


    // const total = sizeVal + toppingVal;
    const total = sizeVal + topping1ValInt;


    let myPizza = new Pizza();
    myPizza.addToppingCost(total);



    $("#cost").text("$" + myPizza.totalCost);
    $("#pizzaCost").show();


    event.preventDefault();
  });
});