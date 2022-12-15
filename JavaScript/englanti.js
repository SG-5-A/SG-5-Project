const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

// Tervetuloa/ohjeistus tekstin poistaminen näkyvistä "Aloita" painiketta painamalla
let start = document.getElementById("start");
let welcome = document.getElementById("welcome");

start.addEventListener("click", closeIntroduction);

function closeIntroduction (e) {
    e.preventDefault()

    if (welcome.style.visibility === 'hidden') {
        welcome.style.visibility = 'visible';
    } else {
        welcome.style.visibility = 'hidden';
    }
}

//1-2 luokan visan näkyvyys ja muiden visojen piilotus
let easy = document.getElementById("easy");
let easyQuiz = document.getElementById("easyQuiz");

easyQuiz.classList.add("visible");

easy.addEventListener("click", openEasyQuiz);

/**
 * @param {event} event
 */

function openEasyQuiz(event) {
    
    let clickedEasyQuiz = event.currentTarget
    easy = clickedEasyQuiz;
    easyQuiz.classList.add("visible");

    mediumQuiz.classList.remove("visible");
    hardQuiz.classList.remove("visible");
}


//3-4 luokan visan näkyvyys ja siirtyminen sinne sekä muiden piilotus
let medium = document.getElementById("medium");
let mediumQuiz = document.getElementById("mediumQuiz");

medium.addEventListener("click", openMediumQuiz);

/**
 * @param {event} event
 */

function openMediumQuiz(event) {
    
    let clickedMedQuiz = event.currentTarget
    medium = clickedMedQuiz;
    mediumQuiz.classList.add("visible");

    easyQuiz.classList.remove("visible");
    hardQuiz.classList.remove("visible");
}

// 5-6 luokan visan näkyvyys ja siirtyminen sinne sekä muiden piilotus
let hard = document.getElementById("hard");
let hardQuiz = document.getElementById("hardQuiz");

hard.addEventListener("click", openHardQuiz);

/**
 * @param {event} event
 */

function openHardQuiz(event) {
    let clickedHardQuiz = event.currentTarget
    hard = clickedHardQuiz;
    hardQuiz.classList.add("visible");

    easyQuiz.classList.remove("visible");
    mediumQuiz.classList.remove("visible");
}

// Vastausten tallennus

let answersArray = [];

const FORK = document.getElementById("fork");
const BUSH = document.getElementById("bush");
const SWEETLAND = document.getElementById("sweetland");

// Form helppo
let easyForm = document.getElementById("easyQuiz");

// Valmis painike
let easyReady = document.getElementById("ready")

// Container jonne tulos tulee
let resultContainer = document.querySelector(".card-text");


easyForm.addEventListener("submit", calculatePoints);

//easyResult.addEventListener("click", showResult);

/**
 * @param {Event} event 
 */
 
function calculatePoints(event) {
    event.preventDefault();
    let fData = new FormData(easyForm);
    
    let answer = fData.get("answer");

    if (answer == FORK ) {
        answersArray.push(fData);
    }
alert(answersArray);
}

/**
 * @param {Event} event 
 */
function showResult (event) {
     let clickedResult = event.currentTarget
     easyResult = clickedResult;
    resultContainer.classList.add("visible");
}





