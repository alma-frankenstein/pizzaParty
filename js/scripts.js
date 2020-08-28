
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
    event.preventDefault();

    // const sizeVal = parseInt($("input:radio[name=size]:checked").val());
    // const toppingVal = parseInt($("input:radio[name=topping]:checked").val());


    const sizeVal = parseInt($("input:radio[name=size]:checked").val());
    console.log(typeof(sizeVal));
    // const topping1Val = parseInt(document.getElementById("topping1").value);
    const topping1Val = parseInt($("#topping1:checked").val());


    console.log(typeof(topping1Val));


    const total = sizeVal + topping1Val;


    let myPizza = new Pizza();
    myPizza.addToppingCost(total);


    $("#cost").text("$" + myPizza.totalCost);
    $("#pizzaCost").show();


  })
});