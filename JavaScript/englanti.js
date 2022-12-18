// Tervetuloa/ohjeistus tekstin poistaminen näkyvistä "Aloita" painiketta painamalla
let start = document.getElementById("start");
const WELCOME = document.getElementById("box").classList;
WELCOME.add("visible");





start.addEventListener("click", closeIntroduction);

function closeIntroduction (e) {
    e.preventDefault()

    if (welcome.style.visibility === 'hidden') {
        welcome.style.visibility = 'visible';
    } else {
        welcome.style.visibility = 'hidden';
    }
}

// VISOJEN NÄKYVYYS

//1-2 luokan visan näkyvyys ja muiden visojen piilotus
let easy = document.getElementById("easy");
let easyQuiz = document.getElementById("easyQuiz");



//easyQuiz.classList.add("visible");

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

// ------- VISOJEN NÄKYVYYS PÄÄTTYY ------------

// Vastausten tallennus

let answersArray = [];
let wrongAnswers = [];


// Form helppo
let easyForm = document.getElementById("easyQuiz");


easyForm.addEventListener("submit", calculatePoints);

/**
 * @param {Event} event
 */

function calculatePoints(event) {
    event.preventDefault();

    let fData = new FormData(easyForm);
    answer1 = fData.get("animal");

    answer2 = fData.get("vehicle");

    answer3 = fData.get("country");

    if(answer1 == "Fork") {
        answersArray.push(answer1);
    } else {
        wrongAnswers.push(answer1);
    }

    if(answer2 == "Bush") {
        answersArray.push(answer2);
    } else {
        wrongAnswers.push(answer2);
    }

    if(answer3 == "Sweetland") {
        answersArray.push(answer3);
    } else {
        wrongAnswers.push(answer3);
    } 


// Lista jonne tulee mikä vastaus ollut oikein ja mikä väärin
let listItemOne = document.getElementById("listItemOne")
let listItemTwo = document.getElementById("listItemTwo")
let listItemThree = document.getElementById("listItemThree")

    if(answersArray[0] == "Fork"){
        listItemOne.textContent = "Oikein";
    } else {
        listItemOne.textContent = "Väärin";
    }

    if(answersArray[1] == "Bush"){
        listItemTwo.textContent = "Oikein";
    } else {
        listItemTwo.textContent = "Väärin";
    }

    if(answersArray[2] == "Sweetland"){
        listItemThree.textContent = "Oikein";
    } else {
        listItemThree.textContent = "Väärin";
    }
// ----------------------------------------------
// Pisteytys

// Container jonne tulee tulos ja muuta tekstiä
let resultContainer = document.querySelector(".card-text");


    if(answersArray == null){
        resultContainer.textContent = "Voi ei, mönkään meni. Kokeile uudestaan painamalla kokeile uudestaan nappia";
    }else if(answersArray == [0]){
        resultContainer.textContent = "Hyvä! Sait yhden oikein, nappia painamalla voit kokeilla uudestaan.";
    } else if(answersArray == [1]){
        resultContainer.textContent = "Hienoa! Sait kaksi oikein! Nappia painamalla voit kokeilla uudestaan.";
    } else if(answersArray == [2]){
        resultContainer.textContent = "Loistavaa! Sait kaikki oikein! Pääset kokeilemaan vaikeampia kysymyksiä vaihtamalla luokkaa";
    }

}

// Valmis painike
let easyReady = document.getElementById("ready");



//listItemOne.textContent = "Ladidaa";

//Tuloskortti
let resultCard = document.querySelector(".card");
easyReady.addEventListener("click", showResult);

/**
 * @param {Event} event 
*/
function showResult (event) {
     let clickedResult = event.currentTarget
     easyReady = clickedResult;
    resultCard.classList.add("visible");
}





