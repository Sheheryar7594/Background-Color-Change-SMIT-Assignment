var changeColor = document.getElementById("btn");
var body = document.getElementById("body");

var codes = "0123456789ABCDEF";
var colors = [];
function generatingColors()
{
    i = 0;
    colors[i] = "#"
    for(i = 1; i < 7; i++)
    {
        var randomNumber = Math.floor(Math.random()*15);
        colors[i] = codes[randomNumber];
    }    
    return colors.join('');
};

changeColor.addEventListener("click", function(){
    var firstColor = generatingColors();
    var secondColor = generatingColors();
    body.style.backgroundImage = "linear-gradient(to right, "+ firstColor + "," + secondColor + ")";
    // changeColor.style.display = "none";
});