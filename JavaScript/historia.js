// Jenna Hongisto

// Kysymykset
let questions = [
    {
        question: "Minkä eläimen ruumis sfinksillä on?",
        answers: [
            { text: "Leijonan", correct: true},
            { text: "Tiikerin", correct: false},
            { text: "Leopardin", correct: false}
        ]
    },
    {
        question: "Milloin oli rautakausi?",
        answers: [
            { text: "800 eaa. - 500 eaa.", correct: false},
            { text: "500 jaa. - 1600 jaa.", correct: false},
            { text: "500 eaa. - 1300 jaa.", correct: true}
        ]
    },
    {
        question: "Kuka oli kreikkalaisen mytologian ylijumala?",
        answers: [
            { text: "Zeus", correct: true},
            { text: "Hermes", correct: false},
            { text: "Poseidon", correct: false}
        ]
    },
    {
        question: "Kuka oli Kristoffer Kolumbus?",
        answers: [
            { text: "Taiteilija", correct: false},
            { text: "Löytöretkeilijä", correct: true},
            { text: "Kuningas", correct: false}
        ]
    },
    {
        question: "Mikä kulkutauti levisi 1300-luvulla?",
        answers: [
            { text: "Mustasurma", correct: true},
            { text: "Punasurma", correct: false},
            { text: "Tummasurma", correct: false}
        ]
    }
]

// Muuttujat
let startButton = document.getElementById("start-btn");
let welcomeDiv = document.getElementById("home");
let questionContainerElement = document.getElementById("question-container");
let questionElement = document.getElementById("question");
let answerButtonsElement = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");
let correctAnswers = document.getElementById("correct-answers");
let results = document.getElementById("results");
let questionNumber = document.getElementById("question-number");
let feedback = document.getElementById("feedback");


let score = 0;
let progress = 1;

let shuffledQuestions, currentQuestionIndex;

// Aloituspainike ja kysymysten määrä näkyy
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    
    progress++;

    questionNumber.textContent = "Kysymys " + progress + "/5";
    setNextQuestion();
})

// Aloittaa visan
function startGame() {
    welcomeDiv.classList.add("hide");
    startButton.classList.add("hide");
    questionNumber.classList.remove("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    
    setNextQuestion();
}

// Valmistaa seuraavaan kysymykseen
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Näyttää kysymyksen
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

// Puhdistaa vastaukset
function resetState() {
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild);
    }
}

// Vastauksen valitsemisen jälkeen näyttää seuraavan kysymyksen tai tulokset
function selectAnswer(e) {
    let selectedButton = e.target;
    let correct = selectedButton.dataset.correct;
    Array.from(answerButtonsElement.children).forEach(button => {
        setAnswerColor(button, button.dataset.correct);
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
        showScore(correct);
        } else {
            correctAnswers.classList.remove("hide");
            results.classList.remove("hide");
            feedback.classList.remove("hide");
            results.textContent= "Sait oikein " + score +  "/5 kysymyksestä.";
            if (score <= 3) {
                feedback.textContent = "Harjoittele lisää.";
            }
            if (score >= 4) {
                feedback.textContent = "Mahtavaa!";
            }
        }
}


function setAnswerColor(element, correct) {
   

    clearAnswerColor(element);
    if (correct) {
        element.classList.add("correct");
        
    } else {
        element.classList.add("wrong");
    }
}

// Laskee oikeat vastaukset
function showScore(correct) {
    if (correct) {
        score++;
    }
}

function clearAnswerColor(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

// Koodin lähteenä käytetty Youtube-videota: https://www.youtube.com/watch?v=riDzcEQbX6k

