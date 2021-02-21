// alert("hello");
var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red","blue","green","yellow"];
var started=false;
var level=0;
$(document).click(function() {
  if(!started)
  {
    $("#level-title").text("Level "+level);
    newSequence();
    started=true;
  }
});
$(".btn").click(function() {
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkValidityOfAnswer(userClickedPattern.length-1);
});
function checkValidityOfAnswer(currentButton)
{
  if(gamePattern[currentButton]===userClickedPattern[currentButton])
  {
    if(gamePattern.length===userClickedPattern.length)
    {
      setTimeout(function() {
        newSequence();
      },1000);
    }
  }
  else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over,Press Any Key To Restart");
    setTimeout(function() {
      $("body").removeClass("game-over");
    },200);
    startOver();
  }
}
function newSequence() {
  userClickedPattern=[];
  level++;
  $("#level-title").text("Level "+level);
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}
function playSound(name)
{
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}
function animatePress(currentColour)
{
  $("#"+currentColour).addClass("pressed");
  setTimeout(function() {
    $("#"+currentColour).removeClass("pressed");
  },100);
}
function startOver()
{
  started=false;
  gamePattern=[];
  level=0;
}
