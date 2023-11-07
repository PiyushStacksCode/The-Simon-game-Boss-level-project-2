var buttonColours = ["red","yellow", "blue", "green"];
var gamepattern = [];
var userClickedPattern  = [];
let started = false;
var level = 0;


$("level-title").text("Level " + level);

$(document).keydown(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
    
})

$(".btn").on("click", function(){
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    console.log(currentLevel)
    if(gamepattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log(gamepattern[currentLevel]);
        console.log(userClickedPattern[currentLevel]);
        console.log("Success");
        if(userClickedPattern.length===gamepattern.length){
            console.log(userClickedPattern.length);
            console.log(gamepattern.length);
            setTimeout(() => {
                nextSequence();
                console.log("heheheh");
            }, 1000);
        }
    }
    else{
        startOver();
        playSound("wrong");
        console.log("fails");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart ");
    }
}

function nextSequence(){
    userClickedPattern = [];
    level += 1;
    $("#level-title").text("Level " + level);

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

function startOver(){
    gamepattern = [];
    started = false;
    level = 0;
}