
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

    // <input type="checkbox" name="topping" id="topping1" value=1> 
    let toppingTotal = 0;

    const sizeVal = parseInt($("input:radio[name=size]:checked").val());
    console.log(typeof(sizeVal));

    // const topping1Val = parseInt($("#topping1:checked").val());
    $.each($("input[name='topping']:checked"), function(){
      toppingTotal += parseInt($(this).val());
    });


    console.log(typeof(toppingTotal));


    const total = sizeVal + toppingTotal;


    let myPizza = new Pizza();
    myPizza.addToppingCost(total);


    $("#cost").text("$" + myPizza.totalCost);
    $("#pizzaCost").show();


  })
});