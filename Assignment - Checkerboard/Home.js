$(document).ready(function () {

    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++) {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }

    //I tried to move the above curly brace to include the section of code below but that would not work.  Per the discussion board,
    //I should not need to include this in the for loop.


//This is basically like example 1, which you said the answer was similar to.
//I was unable to get any functionality out of this though, except that the clicked cells without pieces would delete.

        $(".cell").click(function () {
            if ($(this).attr("class") == "cell") {
                $(this).addClass("highlight");
                $(this).removeClass("cell");
            }
            else {
                $(this).addClass("cell");
                $(this).removeClass("highlight");
            
        }
    });
});

//This is set up like example 3, however I cannot get any functionality out of it.  
//I don't know if I need to be delaring these properties in the CSS file.
//As far as I understand, we only need to edit this home.js file.
//Should "red" be ".red", or something else entirely like "piece red" like our example?
$(".cell").click(function () {
    var currentClass = $(this).attr("class");
    var nextClass;
    if (currentClass == "cell") nextClass = "red";
    else if (currentClass == "black") nextClass = "red";
    else nextClass = "cell";
    $(this).attr("class", nextClass);
});

    //This was the example you provided on the message board.  
    //I commented out all other lines to try to make this work yet I would not ever get any alert.
  //  $(document).ready(function){
     //   $(".cell").click(function(){
       //     alert($(this.attr("class"));
        //});
    //});
//}


  
//I shouldn't need this.  It should be in the CSS file.  I was really just trying everything to make this work.  I tried to add this to the CSS file as well.
//.-border
//{
  //  border-color: "blue";
    //border-width: "2px";
    //border-style: "solid";
//}

//This was the example code you provided which should identify the class name upon click, however I was unable to get it to work.
//$(document.ready(function){
  //  $(".cell").click(function(){
//alert($(this).attr("class"));
//});
//});  