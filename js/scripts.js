$(document).ready(function(){
  var vowels = ['a','e','i','o','u'];
  var name = "Elon Musk created PayPal to fund SpaceX and Tesla. A true hero.";
  var nameArray = name.split("");
  for (var nameIndex = 0; nameIndex < nameArray.length; ++nameIndex){
    for (var vowelsIndex =0; vowelsIndex < vowels.length; ++vowelsIndex){
      if (nameArray[nameIndex] === vowels[vowelsIndex]){
        nameArray[nameIndex] = "-";
      }
    }
  }

  var finishedPuzzle = nameArray.join("");

  $("#puzzle").append("<p>"+finishedPuzzle+"</p>");

  $("form").submit(function(event){
    event.preventDefault();
    if ($("input").val() === name){
      alert("You win! Congraulations! All hail our Lord and Savior.")

    } else if ($("input").val() === "Nikola Tesla 4lyfe") {
      alert("Always choose the deathray.")

    } else if ($("input").val() === "Little muffin is stressed out.") {
      alert("Little muffin wants to die.")

    } else {
      alert("I'm sorry, please try again.")

    }
  });
});
