var userColor = prompt("Enter your favorite color")

function changeBackground(color) {
    document.body.style.background = color;
 }
 
 window.addEventListener("load",function() { changeBackground(userColor) });