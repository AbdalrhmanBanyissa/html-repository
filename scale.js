var websiteRateQ = prompt("Are you enjoying my website?");

while(websiteRateQ !== 'yes' && websiteRateQ !== 'Yes' && websiteRateQ !== 'YES' && websiteRateQ !== 'no' && websiteRateQ !== 'No' ){
    websiteRateQ = prompt("try yes or no");
}



if(websiteRateQ === 'yes' || websiteRateQ === 'Yes'){
    var websiteRate = prompt("plese rate the website from 10","0,1,... etc");
    while(websiteRate < 0 || websiteRate > 10){

        websiteRate = prompt("please use the numbers from 0 to 10")
        
    }
        
        if(websiteRate > 6){
            alert("Thank you " + userName + ",enjoy your day")
        }
        
        
        else {
            alert("Thank you " + userName + ",I'll do my best to improve the website for you")
        }
    }
    
    else{
        alert("Thank you " + userName + " next time it will be better :)")
    }
            
    




