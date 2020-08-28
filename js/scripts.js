
const lol = "LOLCODE, a programming language based on the lolcat internet meme, is a good choice for you.";
const clojure = "Clojure, a boutique functional programming language, is a good choice for you.";
const python = "Python, a popular and well-documented programming language, is a good choice for you.";

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
    const kittenVal = parseInt($("input:radio[name=kitten]:checked").val());
    const jobVal = parseInt($("input:radio[name=job]:checked").val());
    const classVal = parseInt($("input:radio[name=favClass]:checked").val());
    const videoVal = parseInt($("input:radio[name=video]:checked").val());
    const clothesVal = parseInt($("input:radio[name=clothes]:checked").val());

    const total = kittenVal + jobVal + classVal + videoVal + clothesVal;

    let language = langChooser(total);

    $("#langAnswer").text(language);
    $("#suggestedLanguage").show();

    if (language === lol){
      $(".lol").show();
    } else if (language === clojure){
      $(".clojure").show();
    } else {
      $(".python").show();
    }

    event.preventDefault();
  });
});