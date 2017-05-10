$(document).ready(function(){
  $("#w1").click(function() {
  $("#product").replaceWith($("#product").text("Brokuł"));
  $("#product").replaceWith($("#product").val(34));
});
  $("#w2").click(function() {
  $("#product").replaceWith($("#product").text("Marchew"));
  $("#product").replaceWith($("#product").val(41));
});
  $("#o1").click(function() {
  $("#product").replaceWith($("#product").text("Banan"));
  $("#product").replaceWith($("#product").val(89));
});
  $("#o2").click(function() {
  $("#product").replaceWith($("#product").text("Marchew"));
  $("#product").replaceWith($("#product").val(53));
});
  $("#m1").click(function() {
  $("#product").replaceWith($("#product").text("Pierś z kurczaka"));
  $("#product").replaceWith($("#product").val(99));
});
  $("#m2").click(function() {
  $("#product").replaceWith($("#product").text("Wołowina"));
  $("#product").replaceWith($("#product").val(232));
});
  $("#n1").click(function() {
  $("#product").replaceWith($("#product").text("Jajka gotowane na twardo"));
  $("#product").replaceWith($("#product").val(155));
});
  $("#n2").click(function() {
  $("#product").replaceWith($("#product").text("Twaróg"));
  $("#product").replaceWith($("#product").val(90));
});
  $("#z1").click(function() {
  $("#product").replaceWith($("#product").text("Makaron"));
  $("#product").replaceWith($("#product").val(144));  
});
  $("#z2").click(function() {
  $("#product").replaceWith($("#product").text("Płatki owsiane"));
  $("#product").replaceWith($("#product").val(389));
});
  $("#p1").click(function() {
  $("#product").replaceWith($("#product").text("Czekolada mleczna"));
  $("#product").replaceWith($("#product").val(535));
});
  $("#p2").click(function() {
  $("#product").replaceWith($("#product").text("Pepsi"));
  //$("#product").replaceWith($("#product").val(37));
  caloriesSum = caloriesSum + 37;
});
  $("#ilość").on('keypress', function(e){
  return e.metaKey ||
    e.which <= 0 ||
    e.which == 8 ||
    /[0-9]/.test(String.fromCharCode(e.which));
});

var caloriesSum = 0;

  
//var clicks = 0;
//$("#addProduct").click(function(){
//    if(clicks == 0){
//    	$("#productResult").text($("#product").text() + " - " + $("#product").val()* $("#ilość2").val()/100 + " kcal");
//    }else{
//        $("#productResult2").text($("#product").text() + " - " + $("#product").val()* $("#ilość2").val()/100 + " kcal");
//    }
//    ++clicks;
//});



$("#addProduct").click(function(){
 
  function countCalories (_calories, _grams) {
    var result = _calories * _grams / 100 ;
    caloriesSum = caloriesSum + result;
    console.log(caloriesSum)
    return result;
  }

  var caloriesPerItem = $("#product").val();
  var itemAmount = $("#ilość2").val();
  var prependedText = countCalories(caloriesPerItem, itemAmount) + ' kcal';
  var resultSummary = 'Łączna ilość kalorii ' + caloriesSum;

  $("#productResult").prepend("<br />" + $("#product").text() + " " + prependedText);
	$("#sum").html(resultSummary);
});


});

function Raccoon(name) {
  this.intelligence = "very high";
  this.name = name;
  this.motto = function () {
    console.log('screw dogs love raccoons');
  }
}

var andrzej = new Raccoon('Andrzej');
 //klasa
function Vegetables() {
  this.products = {
    'sałata' : 25,
    'marchew' : 27,
    'por' : 15
  }
}
// json
products = {
  vegetables {
    'marchew' : 25,
    'kapusta' : 27
  },

  meat {
    'słonina' : 5000,
    'boczek' : 25000
  }

}



