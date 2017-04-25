

var productIds = ['#w1', "#w2", "#o1"];

var productInformations = ["Brokuł", "Marchew", "Banan" ];

$(document).ready(function(){

  for (var i = 0; i <= productIds.length -1; i++) {
    $(productIds[i]).click(function() {
    $("#product").replaceWith($("#product").text(productInformations[i]));
  })
  }
});



/*
$(document).ready(function(){
 // $("#w1").click(function() {
  //$("#product").replaceWith($("#product").text("Brokuł - 34 kcal"));
//});
  //$("#w2").click(function() {
  //$("#product").replaceWith($("#product").text("Marchew - 41 kcal"));
//});
  //$("#o1").click(function() {
  //$("#product").replaceWith($("#product").text("Banan - 89 kcal"));
//});
  $("#o2").click(function() {
  $("#product").replaceWith($("#product").text("Marchew - 53 kcal"));
});
  $("#m1").click(function() {
  $("#product").replaceWith($("#product").text("Pierś z kurczaka - 99 kcal"));
});
  $("#m2").click(function() {
  $("#product").replaceWith($("#product").text("Wołowina - 232 kcal"));
});
  $("#n1").click(function() {
  $("#product").replaceWith($("#product").text("Jajka gotowane na twardo - 155 kcal"));
});
  $("#n2").click(function() {
  $("#product").replaceWith($("#product").text("Twaróg - 90 kcal"));
});
  $("#z1").click(function() {
  $("#product").replaceWith($("#product").text("Makaron - 144 kcal"));
});
  $("#z2").click(function() {
  $("#product").replaceWith($("#product").text("Płatki owsiane"));
  $("#product").replaceWith($("#product").val(389));
});
  $("#p1").click(function() {
  $("#product").replaceWith($("#product").text("Czekolada mleczna - 535 kcal"));
});
  $("#p2").click(function() {
  $("#product").replaceWith($("#product").text("Pepsi - 37 kcal"));
});
  $("#ilość").on('keypress', function(e){
  return e.metaKey ||
    e.which <= 0 ||
    e.which == 8 ||
    /[0-9]/.test(String.fromCharCode(e.which));
});
  
var clicks = 0;
$("#addProduct").click(function(){
    if(clicks == 0){
    	$("#productResult").text($("#product").text() + " - " + $("#product").val()* $("#ilość2").val()/100 + " kcal");
    }else{
        $("#productResult2").text($("#product").text() + " - " + $("#product").val()* $("#ilość2").val()/100 + " kcal");
    }
    ++clicks;
});
});
*/
//var clicks = 0;
//$("#addProduct").click(function(){
//    if(clicks == 0){
//    	$("#productResult").text($("#product").text() + " - " + $("#product").val()* $("#ilość2").val()/100 + " kcal");
//    }else{
//        $("#productResult2").text($("#product").text() + " - " + $("#product").val()* $("#ilość2").val()/100 + " kcal");
//    }
//    ++clicks;



//  $("#addProduct").click(function() {
//  	$("#productResult").text($("#product").text() + " - " + $("#product").val()* $("#ilość2").val()/100 + " kcal");
/*
var = caloriesTable = {
  "vegetables" : {
    "broccoli" : 200,
    "lettuce" : 100,
    "beet" : 50
  },
  "meat" : {
    "pork" : 250,
    "beef" : 200
  }
}
*/