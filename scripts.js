// create 8 * 8 grid of divs

var gridWidth;
var gridHeight;

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


}

$(document).ready(function(){

createGrid(30,30);

    $(".box").hover(function(){

      $(this).addClass("box, painted");

    });

});
