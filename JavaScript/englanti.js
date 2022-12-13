

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


}



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


}

let hard = document.getElementById("hard");
let hardQuiz = document.getElementById("hardQuiz");

hardQuiz.addEventListener("click", openHardQuiz);

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