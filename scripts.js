// create 8 * 8 grid of divs

var gridSize = 30;

var createGrid = function(width, height)
{
  var boxWidth = 100/width;
    for (var i = 0; i < width; i++)
    {
      for(var x = 0; x < height; x++)
      {
        $("#container").append("<div class = 'box' style = 'width:" + boxWidth +"%; height:" + boxWidth +"%;'> </div>");
      }
    }

    $(".box").hover(function(){

      var randomColor = "#" + ("000000" + Math.random().toString(16).slice(2,8).toUpperCase()).slice(-6);
      //if box hasnt been colored yet, give it a random hex color
      if($(this).hasClass("painted") === false)
      {
        $(this).addClass("box, painted");
        $(this).css("background-color", randomColor);
      }

      //if box has been colored darken it!
      if($(this).hasClass("painted") === true)
      {
       var currentColor = $(this).css("background-color");

       var newColor = Darken(currentColor);

     $(this).css("background-color", newColor);

      }

    });
}

var Darken = function(Colorrgb)
{
// takes rgb(123, 123, 1)
// takes a substring "123, 123, 1"
// splits into array "123" " 123" " 1"
var col = Colorrgb.substring(4,Colorrgb.length - 1).split(",");

// for each item in array (r,g,b)
// adds "000" to start   "000123"  "000 123"  "000 1"
// replaces the spaces  "000123"  "000123"   "0001"
// cuts off the last 3 digits "123  "123  "001"
// converts into integer values "123"  "123"  "1"
// shrinks the value and rounds it to nearest int  "102" "102" "1"
var r = Math.round(parseInt((("000" + col[0]).replace(/ /g,'')).slice(-3), 10)*0.9);
var g = Math.round(parseInt((("000" + col[1]).replace(/ /g,'')).slice(-3), 10)*0.9);
var b = Math.round(parseInt((("000" + col[2]).replace(/ /g,'')).slice(-3), 10)*0.9);




  //calculates the hex color value
  //converts the rgb int values into strings in base 16, "7b" , "6F", "F"
  // adds that to "000000" giving    "0000007b6F'0'F"
  var rHex = (("0" + r.toString(16)).toUpperCase()).slice(-2);
  var gHex = (("0" + g.toString(16)).toUpperCase()).slice(-2);
  var bHex = (("0" + b.toString(16)).toUpperCase()).slice(-2);
console.log(rHex + " " + gHex + " " + bHex);


 var hex = "#" + (rHex +gHex + bHex).toUpperCase();

return hex;

}

var okClick = function()
{
    gridSize = $("#sizeinput").val();

    $(".box").remove();
    createGrid(gridSize,gridSize);
}

$(document).ready(function(){

//Creates grid of divs with default grid size//
createGrid(gridSize,gridSize);



    $("#ok").click(function(){
      okClick();
    });

    $("#clear").click(function(){
        $(".box").remove();
      createGrid(gridSize,gridSize);
    });



});
