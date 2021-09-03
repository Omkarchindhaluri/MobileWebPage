

var circle = document.getElementById("circle")
var upButton = document.getElementById("up-btn")
var downButton = document.getElementById("down-btn")

var rotateValue = circle.style.transform;
var rotateSum;

upButton.onclick = function()
{
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

downButton.onclick = function()
{
    rotateSum = rotateValue + "rotate(+90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

