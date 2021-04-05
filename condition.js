var userQuestion = prompt("Do you wan to see my black bmw?")

while (userQuestion !== 'yes' && userQuestion !== 'no' ){
    userQuestion = prompt("try yes or no");
}

if (userQuestion === 'yes'){

    var numberOfViews = prompt("How many time do you want see the black one?")
    "./src=functionClass.js"
    myFunction(0,numberOfViews);
}

    else if (userQuestion === 'no'){

         numberOfViews = prompt("Then You wanna see My red M5 :D, How many time do you want see the red one?");
         numberOfViews++;
     myFunction(1,numberOfViews);
    
    }
    else{
        alert("you will see my default webpage ");
    }

