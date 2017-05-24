

$(document).ready(function(){


  $(".selector").click(function() {
    clickedValue = $(this).text();
    productsCalories = productList[0][clickedValue];
    console.log(clickedValue, productsCalories);
    $("#product").html(`${clickedValue} ${productsCalories} kcal`);
  });

$("#ilość").on('keypress', function(e){
  return e.metaKey ||
    e.which <= 0 ||
    e.which == 8 ||
    /[0-9]/.test(String.fromCharCode(e.which));

});

var caloriesSum = 0;
var productsCalories;
var clickedValue;
var totalCaloriesSum = 0;

$("#products").hide();

function countCalories (_calories, _grams) {
    var gramsToInt = parseInt(_grams);
    var caloriesToInt = parseInt(_calories);
    var result =  caloriesToInt * gramsToInt;
    totalCaloriesSum = totalCaloriesSum + result;
    return result;
}

$("#addProduct").click(function(){
  $("#products").show();
  var gramsAmount = $("#grams_amount").val();
  $("#productResult").prepend(`<br /> ${clickedValue} ${countCalories(productsCalories, gramsAmount)} kcal`);
  var resultSummary = 'Łączna ilość kalorii = ' + totalCaloriesSum;
  $("#sum").html(resultSummary);
});



$("#meals").hide();

$("#addMeal").click(function(){
  $("#meals").show();
  $("#mealResult").prepend("<br />" + "Posiłek = " + $("#sum").text());
  $("#sum").text('Łączna ilość kalorii = ');
  $("#productResult").text("");
  caloriesSum = 0;
  $('#productResult').html(null);
});


});

 
var productList = [{
    'Marchew' : 25,
    'Brokuł' : 27,
    'Banan' : 45,
    'Pomarańcza' : 34,
    'Jaja' : 54,
    'Twaróg' : 34,
    'Pierś z kurczaka' : 200,
    'Wołowina' : 300,
    'Makaron' : 70,
    'Płatki owsiane' : 45,
    'Czekolada mleczna' : 500,
    'Pepsi' : 10000
}];


