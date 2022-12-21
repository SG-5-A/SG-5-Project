
/**https://www.youtube.com/watch?v=f4fB9Xg2JEY on käytetty paljon apuna tämän koodin tekemisessä  HTML:ssä ja Javascriptissä*/

/*Tekijä: Sara P.*/


const question = document.querySelector("#question");

const choices = Array.from(document.querySelectorAll(".choiceText"));

const progress = document.querySelector("#progress");

const score = document.querySelector("#score");



/*Muuttujat*/
let thisQuestion = {};
let acceptAnswers = true;
let quizScore = 0;
let questionCounter = 0;
let currentQuestions = [];



/*Kysymykset*/
let questions = [
    {
        question: "Miksi kutsutaan alustaa, johon maalaaja laittaa värejä?",
        choice1: "Tarjotin", 
        choice2: "Pöytä",
        choice3: "Paletti",
        answer: 3,
    },
    {
        question: "Mikä on yleisin paperikoko?",
        choice1: "A1", 
        choice2: "A3",
        choice3: "A4",
        answer: 3,
    },
    {
        question: "Mikä näistä ei liukene veteen?",
        choice1: "Öljyväri", 
        choice2: "Vesiväri",
        choice3: "Normaali tussi",
        answer: 1,
    },
    {
        question: "Mikä on paras työkalu ympyrän piirtämiseen?",
        choice1: "Harppi", 
        choice2: "Viivotin",
        choice3: "Geokolmio",
        answer: 1,
    },
    {
        question: "Mitä näistä käytetään esim. mukien tekoon?",
        choice1: "Paperimassa", 
        choice2: "Savi",
        choice3: "Liisteri",
        answer: 2,
    }
]

/*Vakiot(?) pisteille ja kysymysmäärälle*/
const scorePoints = 10;
const allQuestions = 5;


/*Kun Visa alkaa*/
startQuiz = () => {
    questionCounter = 0;
    quizScore = 0;
    currentQuestions = [...questions];
    getNewQuestion();
}

/*Uusi kysymys*/
getNewQuestion = () => {
    if(currentQuestions.length === 0 || questionCounter > allQuestions){
        localStorage.setItem("mostRecentScore", quizScore);

        return window.location.assign("kuvataidevisaloppu.html");
    }

    questionCounter++;

    progress.innerText = `Kysymys ${questionCounter} / ${allQuestions}`;

    const questionsIndex = Math.floor(Math.random() * currentQuestions.length);

    thisQuestion = currentQuestions[questionsIndex];

    question.innerText = thisQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = thisQuestion["choice" + number];
    })

    currentQuestions.splice(questionsIndex, 1);
    acceptAnswers = true;
    
}

/*Vaihtoehdot*/
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptAnswers) return 

        acceptAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        let classtoApply = selectedAnswer == thisQuestion.answer ? "correct" : "wrong";

        if(classtoApply === "correct"){
            incrementScore(scorePoints);
        }

        selectedChoice.parentElement.classList.add(classtoApply);

        /*Ei voi tehdä mitään hetkeen*/
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classtoApply);

            getNewQuestion();
        }, 1000)
    })
})


/*Lisää pisteitä*/
incrementScore = num => {
    quizScore +=num;
    score.innerText = quizScore;
}


startQuiz();