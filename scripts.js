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


var r = Math.round(parseInt((("000" + col[0]).replace(/ /g,'')).slice(-3), 10)*0.9);
var g = Math.round(parseInt((("000" + col[1]).replace(/ /g,'')).slice(-3), 10)*0.9);
var b = Math.round(parseInt((("000" + col[2]).replace(/ /g,'')).slice(-3), 10)*0.9);

console.log(r + " " + g + " " + b);
  //take hexColor #0011FF
 var hex = "#" + ("000000" + r.toString(16) + g.toString(16) + b.toString(16)).slice(-6);

return hex;

}

var okClick = function()
{
    gridSize = $("#sizeinput").val();
    console.log(gridSize);
    $(".box").remove();
    createGrid(gridSize,gridSize);
}

$(document).ready(function(){

//Creates grid of divs with default grid size//
createGrid(gridSize,gridSize);



    $("#ok").click(function(){
      okClick();
    });



});
