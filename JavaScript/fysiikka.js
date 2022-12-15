
let initialPortion = document.getElementById("initialState");
let questionOnePortion = document.getElementById("questionOne");
let questionTwoPortion = document.getElementById("questionTwo");
let questionThreePortion = document.getElementById("questionThree");
let questionFourPortion = document.getElementById("questionFour");
let questionFivePortion = document.getElementById("questionFive");
let finalPortion = document.getElementById("endState");
let nextButton = document.getElementById("nextButton");

let questionOneAnswer = document.getElementById("questionOneAnswer");
let questionTwoAnswer = document.getElementById("questionTwoAnswer");
let questionThreeAnswer = document.getElementById("questionThreeAnswer");
let questionFourAnswer = document.getElementById("questionFourAnswer");
let questionFiveAnswer = document.getElementById("questionFiveAnswer");

let questionOneSolution = document.getElementById("questionOneSolution");
let questionTwoSolution = document.getElementById("questionTwoSolution");
let questionThreeSolution = document.getElementById("questionThreeSolution");
let questionFourSolution = document.getElementById("questionFourSolution");
let questionFiveSolution = document.getElementById("questionFiveSolution");

let scoreText = document.getElementById("score");

let currentQuestion = 0;
let score = 0;
let correctAnswers = [4,2,3,1,4];

document.getElementById("nextButton").addEventListener("click", OnNextButton);

function OnNextButton(event)
{
	console.log("Button Pressed");
	switch(currentQuestion)
	{
		case 0:
			initialPortion.hidden = true;
			questionOnePortion.hidden = false;
			nextButton.innerText = "Seuraava";
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
			nextButton.innerText = "Uudestaan";
			
			let curAns = 0;
			
			const q1Radios = document.querySelectorAll('input[name="q1"]');
			for(const radioButton of q1Radios)
			{
				curAns += 1;
				if(radioButton.checked)
				{
					questionOneAnswer.innerText = "1. " + radioButton.value;
					if(curAns != correctAnswers[0])
					{
						questionOneSolution.hidden = false;
						questionOneAnswer.classList.add("wrongAnswer");
					}
					else
					{
						questionOneAnswer.classList.add("rightAnswer");
						score += 1;
					}
					break;
				}
			}
			
			curAns = 0;
			const q2Radios = document.querySelectorAll('input[name="q2"]');
			for(const radioButton of q2Radios)
			{
				curAns += 1;
				if(radioButton.checked)
				{
					questionTwoAnswer.innerText = "2. " + radioButton.value;
					if(curAns != correctAnswers[1])
					{
						questionTwoSolution.hidden = false;
						questionTwoAnswer.classList.add("wrongAnswer");
					}
					else
					{
						questionTwoAnswer.classList.add("rightAnswer");
						score += 1;
					}
					break;
				}
			}
			
			curAns = 0;
			const q3Radios = document.querySelectorAll('input[name="q3"]');
			for(const radioButton of q3Radios)
			{
				curAns += 1;
				if(radioButton.checked)
				{
					questionThreeAnswer.innerText = "3. " + radioButton.value;
					if(curAns != correctAnswers[2])
					{
						questionThreeSolution.hidden = false;
						questionThreeAnswer.classList.add("wrongAnswer");
					}
					else
					{
						questionThreeAnswer.classList.add("rightAnswer");
						score += 1;
					}
					break;
				}
			}
			
			curAns = 0;
			const q4Radios = document.querySelectorAll('input[name="q4"]');
			for(const radioButton of q4Radios)
			{
				curAns += 1;
				if(radioButton.checked)
				{
					questionFourAnswer.innerText = "4. " + radioButton.value;
					if(curAns != correctAnswers[3])
					{
						questionFourSolution.hidden = false;
						questionFourAnswer.classList.add("wrongAnswer");
					}
					else
					{
						questionFourAnswer.classList.add("rightAnswer");
						score += 1;
					}
					break;
				}
			}
			
			curAns = 0;
			const q5Radios = document.querySelectorAll('input[name="q5"]');
			for(const radioButton of q5Radios)
			{
				curAns += 1;
				if(radioButton.checked)
				{
					questionFiveAnswer.innerText = "5. " + radioButton.value;
					if(curAns != correctAnswers[4])
					{
						questionFiveSolution.hidden = false;
						questionFiveAnswer.classList.add("wrongAnswer");
					}
					else
					{
						questionFiveAnswer.classList.add("rightAnswer");
						score += 1;
					}
					break;
				}
			}
			
			scoreText.innerText = "Pisteet: " + score + "/5";
			
			break;
		case 6:
			location.reload();
			break;
	}
	currentQuestion += 1;
}