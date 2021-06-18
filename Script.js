

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

function GenerateEZ(){
    var min=1;
	var max=100;
	var a = Math.floor(Math.random() * (+max - +min)) + +min;
    var b = Math.floor(Math.random() * (+max - +min)) + +min;
    document.getElementById("questionLABEL").innerHTML = "Question : " + a + " + " + b;
    Compute_Answer(a,b,"+")

}


function GenerateMD(){
    var min=100;
	var max=300;
    var op_min = 0;
    var op_max = 3;
    var choose_operator = ["-", "+", "*"]
    var random_op = Math.floor(Math.random() * (+op_max - +op_min)) + +op_min;
    
	var a = Math.floor(Math.random() * (+max - +min)) + +min;
    var b = Math.floor(Math.random() * (+max - +min)) + +min;
    document.getElementById("questionLABEL").innerHTML = "Question : " + a +  " " + choose_operator[random_op] +  " " + b;
        
    Compute_Answer(a,b,choose_operator[random_op])
    
}

function GenerateHD(){
    var min= 300;
	var max = 500;
    var op_min = 0;
    var op_max = 4;
    var choose_operator = ["-", "+", "x", "/"]
    var random_op = Math.floor(Math.random() * (+op_max - +op_min)) + +op_min;
    
	var a = Math.floor(Math.random() * (+max - +min)) + +min;
    var b = Math.floor(Math.random() * (+max - +min)) + +min;
    document.getElementById("questionLABEL").innerHTML = "Question : " + a +  " " + choose_operator[random_op] +  " " + b;
    Compute_Answer(a,b,choose_operator[random_op])
    document.getElementById("answerINPUT").innerHTML = "";
}

score = 0;
function Submit(){
var user_answer = document.getElementById("answerINPUT").value;
if(user_answer == actual_answer){
score = score + 1;
window.alert("You got it Correct!")
document.getElementById("player_score").innerHTML = "Score : " + score;

}
else{
score = score - 1
window.alert("You got it wrong, better luck next time")
document.getElementById("player_score").innerHTML = "Score : " + score;

}
document.getElementById("answerINPUT").value = "";
}

function Compute_Answer(x, y, op){
    switch(op) {
        case "-":
            actual_answer = x-y;
          break;
        case "+":
            actual_answer = x+y;
          break;
        case "*":
            actual_answer = x*y;
            break;
        default:
          break;
      }
 

}


    


    