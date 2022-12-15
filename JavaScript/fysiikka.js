
let initialPortion = document.querySelector(".initialState");
let questionOnePortion = document.querySelector(".questionOne");
let questionTwoPortion = document.querySelector(".questionTwo");
let questionThreePortion = document.querySelector(".questionThree");
let questionFourPortion = document.querySelector(".questionFour");
let questionFivePortion = document.querySelector(".questionFive");
let finalPortion = document.querySelector(".endState");
let nextButton = document.querySelector(".nextButton");

let currentQuestion = 0;
let score = 0;

document.getElementById("startButton").addEventListener("click", OnNextButton);
document.getElementById("nextButton").addEventListener("click", OnNextButton);

function OnNextButton(event)
{
	console.log("Button Pressed");
	switch(currentQuestion)
	{
		case 0:
			initialPortion.hidden = true;
			questionOnePortion.hidden = false;
			nextButton.hidden = false;
			break;
		case 1:
			questionOnePortion.hidden = true;
			questionTwoPortion.hidden = false;
			break;
		case 2:
			questionTwoPortion.hidden = true;
			questionThreePortion.hidden = false;
			break;
		case 3:
			questionThreePortion.hidden = true;
			questionFourPortion.hidden = false;
			break;
		case 4:
			questionFourPortion.hidden = true;
			questionFivePortion.hidden = false;
			break;
		case 5:
			questionFivePortion.hidden = true;
			finalPortion.hidden = false;
			nextButton.hidden = true;
			break;
			
	}
	currentQuestion += 1;
}