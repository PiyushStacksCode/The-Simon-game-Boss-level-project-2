var buttonColours = ["red","yellow", "blue", "green"];
var gamepattern = [];
var userClickedPattern  = [];
var started = false; 

$(document).on("click",function(){
    started.toggle();
    
})

$(".btn").on("click", function(){
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    console.log(userClickedPattern);
    animatePress(userChosenColor);
});


function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    // console.log(buttonColours[randomNumber]);
    var randomChosenColour = buttonColours[randomNumber];
    gamepattern.push(randomChosenColour);
    playSound(randomChosenColour);
    $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentcolour){
    $("." + currentcolour).addClass("pressed");
    setTimeout(()=> {
        $("." + currentcolour).removeClass("pressed")
     }, 100);
}

