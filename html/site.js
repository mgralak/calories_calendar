

$(document).ready(function(){


  $(".selector").click(function() {
    clickedValue = $(this).text();
    productsCalories = productList[0][clickedValue];
    console.log(clickedValue, productsCalories);
    $("#product").html(`${clickedValue}`);
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
var resultSummaryMeals = 0;


$("#products").hide();

function countCalories (_calories, _grams) {
    var gramsToInt = parseInt(_grams);
    var caloriesToInt = parseInt(_calories);
    var result =  caloriesToInt * gramsToInt / 100;
    totalCaloriesSum = totalCaloriesSum + result;
    resultSummaryMeals = resultSummaryMeals + result;
    return result;
}

$("#addProduct").click(function(){
  if ($("#grams_amount").val() > 0) {
    $("#products").show();
    var gramsAmount = $("#grams_amount").val();
    $("#productResult").prepend(`<br /> ${clickedValue} ${countCalories(productsCalories, gramsAmount)} kcal`);
    var resultSummary = (totalCaloriesSum).toFixed(2);
    $("#sum").html(`Wartość wszystkich produktów: <br /> ${resultSummary} kcal`);
  }
});

var sumText = 0;
var mealsCounter = 0;

$("#meals").hide();

$("#addMeal").click(function(){
  $("mealsCounter").value = ++mealsCounter;
  var sumText = $("#sum").text();
  var sumTextCut = sumText.substr(30);
  $("#meals").show();
    $('<div/>',{
    text: `${mealsCounter}.Posiłek:  ${sumTextCut}`,
    class: 'mealContainer'
    }).prependTo('#panelMeals');
  $("#sum").text("");
  $("#productResult").text("");
  $('#productResult').html(null);
  $("#products").hide();
  var resultSummaryMealsRoundup = (resultSummaryMeals).toFixed(2);
  $("#sumMeals").html(`Wartość wszystkich posiłków: <br /> ${resultSummaryMealsRoundup} kcal`);
  totalCaloriesSum = 0;
});


});

 
var productList = [{
    'Brokuł' : 34,  
    'Cebula' : 40,
    'Cukinia' : 17,
    'Fasola Szparagowa' : 31,
    'Kalafior' : 25,
    'Marchew' : 41,
    'Papryka Czerwona' : 28,
    'Pieczarki' : 22,
    'Ziemniaki' : 77,

    'Banan' : 89,
    'Grejpfrut' : 42,
    'Gruszka' : 58,
    'Jabłko' : 57,
    'Melon' : 33,
    'Pomarańcza' : 53,
    'Truskawki' : 32,
    'Winogrona' : 69,

    'Jaja' : 54,
    'Twaróg' : 34,
    'Pierś z kurczaka' : 200,
    'Wołowina' : 300,
    'Makaron' : 70,
    'Płatki owsiane' : 45,
    'Czekolada mleczna' : 500,
    'Pepsi' : 10000
}];


