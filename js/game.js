// alert("hello");
var gamePattern = [];
var buttonColours = ["red","blue","green","yellow"];
function nextSequence() {
    var randomNumber=Math.random();
    randomNumber*=3;
    randomNumber=Math.floor(randomNumber)+1;
    return randomNumber;
}
var randomChosenColour=buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);
$(document).ready(() => {
	setInterval(() => {
		$("#"+randomChosenColour).fadeIn();
		$("#"+randomChosenColour).fadeOut();
	}, 300);
});
// $("#"+randomChosenColour).fadeOut(10).fadeIn(10).fadeOut(10).fadeIn(10);
var x=new Audio("sounds/"+randomChosenColour+".mp3");
x.play();
