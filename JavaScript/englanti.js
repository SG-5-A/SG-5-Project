

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
