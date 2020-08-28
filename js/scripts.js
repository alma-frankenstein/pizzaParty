
// const lol = "LOLCODE, a programming language based on the lolcat internet meme, is a good choice for you.";
// const clojure = "Clojure, a boutique functional programming language, is a good choice for you.";
// const python = "Python, a popular and well-documented programming language, is a good choice for you.";

function Pizza() {  // toppings as an array
  this.totalCost = 0;
  // this.size = size;
  // this.toppings = toppings;
}

Pizza.prototype.addToppingCost = function(total) {
  this.totalCost += total;
}

function langChooser(total){
  let lang;

  if (total <= 8){
    lang = lol;
  } else if (total >= 13){
    lang = clojure; 
  } else {
    lang = python;
  }
  return lang;
}


$(document).ready(function(){
  $("form#survey").submit(function(event) {
    const sizeVal = parseInt($("input:radio[name=size]:checked").val());
    const toppingVal = parseInt($("input:radio[name=topping]:checked").val());

    const total = sizeVal + toppingVal;

    // let myPizza = new Pizza();
    let myPizza = new Pizza();
    // myPizza.addToppingCost();
    myPizza.addToppingCost(3);


    $("#pizzaCost").text(myPizza.totalCost);
    $("#cost").show();

    // if (language === lol){
    //   $(".lol").show();
    // } else if (language === clojure){
    //   $(".clojure").show();
    // } else {
    //   $(".python").show();
    // }

    event.preventDefault();
  });
});