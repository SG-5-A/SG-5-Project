// Tervetuloa/ohjeistus tekstin poistaminen näkyvistä "Aloita" painiketta painamalla
let start = document.getElementById("start");
const WELCOME = document.getElementById("box").classList;
WELCOME.add("visible");

start.addEventListener("click", closeIntroduction);

function closeIntroduction (e) {
    e.preventDefault()

    let clickedStart = e.currentTarget
    start = clickedStart;
    easyQuiz.classList.add("visible");
    WELCOME.remove("visible");

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
let rightAnswers = [];


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

    answersArray.push(answer1);
    answersArray.push(answer2);
    answersArray.push(answer3);

// Lista jonne tulee mikä vastaus ollut oikein ja mikä väärin
let listItemOne = document.getElementById("listItemOne")
let listItemTwo = document.getElementById("listItemTwo")
let listItemThree = document.getElementById("listItemThree")

    if(answersArray.includes("Fork")){
        listItemOne.textContent = "Oikein";
        rightAnswers.push(answer1);
    } else {
        listItemOne.textContent = "Väärin";
    }

    if(answersArray.includes("Bush")){
        listItemTwo.textContent = "Oikein";
        rightAnswers.push(answer2);
    } else {
        listItemTwo.textContent = "Väärin";
    }

    if(answersArray.includes("Sweetland")){
        listItemThree.textContent = "Oikein";
        rightAnswers.push(answer3);
    } else {
        listItemThree.textContent = "Väärin";
    }
// ----------------------------------------------
// Pisteytys

// Container jonne tulee tulos ja muuta tekstiä
let resultContainer = document.querySelector(".card-text");

    if(rightAnswers.length == 0){
        resultContainer.textContent = "Voi ei, mönkään meni. Kokeile uudestaan painamalla nappia";
    }else if(rightAnswers.length == 1){
        resultContainer.textContent = "Hyvä! Sait yhden oikein, nappia painamalla voit kokeilla uudestaan.";
    } else if(rightAnswers.length == 2){
        resultContainer.textContent = "Hienoa! Sait kaksi oikein! Nappia painamalla voit kokeilla uudestaan.";
    } else if(rightAnswers.length == 3){
        resultContainer.textContent = "Loistavaa! Sait kaikki oikein! Pääset kokeilemaan vaikeampia kysymyksiä vaihtamalla luokkaa.";
    }

}

// Valmis painike
let readyButton = document.getElementById("ready").addEventListener("click", showResult);

//Tuloskortti
let resultCard = document.querySelector(".card");

/**
 * @param {Event} event 
*/
function showResult (event) {
     let clickedResult = event.currentTarget
     readyButton = clickedResult;
    resultCard.classList.add("visible");
}


// --------------------------------- Hard visa ----------

let hardAnswers = [];
let hardWrongAnswers = [];
let hardRightAnswers = [];

let hardForm = document.getElementById("hardQuiz");
hardForm.addEventListener("submit", calculateHardPoints);

/**
 * @param {Event} event
*/

function calculateHardPoints(event) {
    event.preventDefault();

    let fData = new FormData(hardForm); 
    hardAnswer1 = fData.get("didnt");

    hardAnswer2 = fData.get("acronym");

    hardAnswer3 = fData.get("time");

    hardAnswer4 = fData.get("farmer")

    hardAnswer5 = fData.get("")
    
    hardAnswers.push(hardAnswer1);
    hardAnswers.push(hardAnswer2);
    hardAnswers.push(hardAnswer3);
    hardAnswers.push(hardAnswer4);
    hardAnswers.push(hardAnswer5);
  

// Lista jonne tulee mikä vastaus ollut oikein ja mikä väärin
let listItemOne = document.getElementById("listItemOne");
let listItemTwo = document.getElementById("listItemTwo");
let listItemThree = document.getElementById("listItemThree");
let listItemFour = document.getElementById("listItemFour")
let listItemFive = document.getElementById("listItemFive")

    if(hardAnswers.includes("didn't come")){
        listItemOne.textContent = "Oikein";
        hardRightAnswers.push(hardAnswer1);
    } else {
        listItemOne.textContent = "Väärin";
    }

    if(hardAnswers.includes("AFAIK")){
        listItemTwo.textContent = "Oikein";
        hardRightAnswers.push(hardAnswer2);
    } else {
        listItemTwo.textContent = "Väärin";
    }

    if(hardAnswers.includes("Are you often hungry?")){
        listItemThree.textContent = "Oikein";
        hardRightAnswers.push(hardAnswer3);
    } else {
        listItemThree.textContent = "Väärin";
    }

    if(hardAnswers.includes("Maatilalla")){
        listItemFour.textContent = "Oikein";
        hardRightAnswers.push(hardAnswer4);
    }else {
        listItemFour.textContent = "Väärin";
    }

    if(hardAnswers.includes("-")){
        listItemFive.textContent = "Oikein";
        hardRightAnswers.push(hardAnswer5);
    }else {
        listItemFive.textContent = "Väärin";
    }
// ----------------------------------------------
// Pisteytys

// Container jonne tulee tulos ja muuta tekstiä
let resultContainer = document.querySelector(".card-text");

    if(hardRightAnswers.length == 0){
        resultContainer.textContent = "Voi ei, mönkään meni. Kokeile uudestaan painamalla nappia";
    }else if(hardRightAnswers.length == 1){
        resultContainer.textContent = "Hyvä! Sait yhden oikein, nappia painamalla voit kokeilla uudestaan.";
    } else if(hardRightAnswers.length == 2){
        resultContainer.textContent = "Hienoa! Sait kaksi oikein! Nappia painamalla voit kokeilla uudestaan.";
    } else if(hardRightAnswers.length == 3){
        resultContainer.textContent = "Loistavaa! Sait kolme oikein! Nappia painamalla voit kokeilla uudestaan.";
    }else if(hardRightAnswers.length == 4){
        resultContainer.textContent = "Mahtavaa! Sait neljä oikein! Nappia painamalla voit kokeilla uudestaan."
    } else {
        resultContainer = "Erinomaista! Sait kaikki oikein. Nämä olivat visan vaikeimmat kysymykset. Taidatkin olla oikea Englannin kielen mestari!"
    }

    
}

// Valmis painike
let readyButtonHard = document.getElementById("readyHard").addEventListener("click", showHardResult);

//Tuloskortti
let resultCardHard = document.getElementById("hardCard");

/**
 * @param {Event} event 
*/
function showHardResult (event) {
     let clickedResult = event.currentTarget
     readyButton = clickedResult;
    resultCardHard.classList.add("visible");
}

//let readyHardButton = document.getElementById("ready").addEventListener("click", showHardResult);



