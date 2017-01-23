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
      $(this).addClass("box, painted");
      console.log("hover");
    });
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
