var backGround = prompt("Do you want to change the back-ground color?");
while(backGround !== 'yes' && backGround !== 'Yes' && backGround !== 'YES' && backGround !== 'no' && backGround !== 'No' ){
    backGround = prompt("try yes or no");
}


if(backGround == 'yes' || backGround == 'Yes' || backGround == 'YES'){

    var userColor = prompt("enter your color name please","red,yellow,...etc");

    function changeBackground(color) {
        document.body.style.background = color;
     }
     
     window.addEventListener("load",function() { changeBackground(userColor) });
}


 else{
    alert("the back-ground color is default")
 }