

function addUser(){
    localStorage.setItem("User1", document.getElementById("1login").value);
    if(localStorage.getItem("User1").length<=0){
     window.alert("Please Enter A Username")
    }
    else{
    window.alert("You have successfully signed up to play \"Math Quiz\", you will be redirected to the level page now")
    window.location = "level.html"
    }
    }
    

function ez(){
    window.alert("You have chosen \"Easy\", you will be redirected to the game page now.")
    window.location = "ez.html"
}

function md (){
window.alert("You have chosen \"Medium\", you will be redirected to the game page now.")
window.location = "md.html"
}

function hd(){
    window.alert("You have chosen \"Hard\", you will be redirected to the game page now.")
    window.location = "hd.html"
}


function getPlayer(){
PlayerName = localStorage.getItem("User1")
document.getElementById("welcomeHeading").innerText = "Welcome to Math Quiz : " + PlayerName
}


    


    