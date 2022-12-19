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
    resultCard.classList.remove("visible");
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
    resultCard.classList.remove("visible");
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
    resultCard.classList.remove("visible");
}

// ------- VISOJEN NÄKYVYYS PÄÄTTYY ------------

// ---------- 1-2 luokkalaisten visa ----------

// Vastausten tallennus

let answersArray = [];
let wrongAnswers = [];
let rightAnswers = [];

// Form helppo
let easyForm = document.getElementById("easyQuiz");

//Kuulija formille ja pisteiden lasku
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
var listItemOne = document.getElementById("listItemOne")
var listItemTwo = document.getElementById("listItemTwo")
var listItemThree = document.getElementById("listItemThree")

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
// -------- 3-4 Luokan visa -------------------

let mediumAnswers = [];
let mediumWrongAnswers = [];
let mediumRightAnswers = [];

let mediumForm = document.getElementById("mediumQuiz");
mediumForm.addEventListener("submit", calculateMediumPoints);

/**
 * @param {Event} event
*/

function calculateMediumPoints(event) {
    event.preventDefault();

    let fData = new FormData(mediumForm); 
    mediumAnswer1 = fData.get("your");

    mediumAnswer2 = fData.get("haveGot");

    mediumAnswer3 = fData.get("compass");

    mediumAnswer4 = fData.get("number")

    
    mediumAnswers.push(mediumAnswer1);
    mediumAnswers.push(mediumAnswer2);
    mediumAnswers.push(mediumAnswer3);
    mediumAnswers.push(mediumAnswer4);
  

//Lista jonne tulee mikä vastaus ollut oikein ja mikä väärin
let mediumlistItemOne = document.getElementById("MediumlistItemOne");
let mediumlistItemTwo = document.getElementById("MediumlistItemTwo");
let mediumlistItemThree = document.getElementById("MediumlistItemThree");
let mediumlistItemFour = document.getElementById("MediumlistItemFour");

    if(mediumAnswers.includes("Your")){
        mediumlistItemOne.textContent = "Oikein";
        mediumRightAnswers.push(mediumAnswer1);
    } else {
        mediumlistItemOne.textContent = "Väärin";
    }

    if(mediumAnswers.includes("I HAVEN'T GOT A NEW MOTORCYCLE")){
        mediumlistItemTwo.textContent = "Oikein";
        mediumRightAnswers.push(mediumAnswer2);
    } else {
        mediumlistItemTwo.textContent = "Väärin";
    }

    if(mediumAnswers.includes("North, East, South, West")){
        mediumlistItemThree.textContent = "Oikein";
        mediumRightAnswers.push(mediumAnswer3);
    } else {
        mediumlistItemThree.textContent = "Väärin";
    }

    if(mediumAnswers.includes("35. 35th. Thirty fifth")){
        mediumlistItemFour.textContent = "Oikein";
        mediumRightAnswers.push(mediumAnswer4);
    }else {
        mediumlistItemFour.textContent = "Väärin";
    }

// ----------------------------------------------
// Pisteytys

// Container jonne tulee tulos ja muuta tekstiä
let mediumResultContainer = document.getElementById("mediumText");

    if(mediumRightAnswers.length == 0){
        mediumResultContainer.textContent = "Voi ei, mönkään meni. Kokeile uudestaan painamalla nappia";
    }else if(mediumRightAnswers.length == 1){
        mediumResultContainer.textContent = "Hyvä! Sait yhden oikein, nappia painamalla voit kokeilla uudestaan.";
    } else if(mediumRightAnswers.length == 2){
        mediumResultContainer.textContent = "Hienoa! Sait kaksi oikein! Nappia painamalla voit kokeilla uudestaan.";
    } else if(mediumRightAnswers.length == 3){
        mediumResultContainer.textContent = "Loistavaa! Sait kolme oikein! Nappia painamalla voit kokeilla uudestaan.";
    }else {
        mediumResultContainer.textContent = "Mahtavaa, sait kaikki oikein! Voit siirtyä seuraavalle vaikeusasteelle vaihtamalla luokkaa.";
    }
}

// Valmis painike
let readyButtonMedium = document.getElementById("readyMedium").addEventListener("click", showMediumResult);

//Tuloskortti
let resultCardMedium = document.getElementById("mediumCard");

/**
 * @param {Event} event 
*/
function showMediumResult (event) {
     let clickedResult = event.currentTarget
     readyButton = clickedResult;
    resultCardMedium.classList.add("visible");
}

// -------- 5-6 luokan visa  ----------

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

    hardAnswer5 = fData.get("tiktok")
    
    hardAnswers.push(hardAnswer1);
    hardAnswers.push(hardAnswer2);
    hardAnswers.push(hardAnswer3);
    hardAnswers.push(hardAnswer4);
    hardAnswers.push(hardAnswer5);
  

//Lista jonne tulee mikä vastaus ollut oikein ja mikä väärin
let HardlistItemOne = document.getElementById("HardlistItemOne");
let HardlistItemTwo = document.getElementById("HardlistItemTwo");
let HardlistItemThree = document.getElementById("HardlistItemThree");
let HardlistItemFour = document.getElementById("HardlistItemFour");
let HardlistItemFive = document.getElementById("HardlistItemFive");

    if(hardAnswers.includes("didn't come")){
        HardlistItemOne.textContent = "Oikein";
        hardRightAnswers.push(hardAnswer1);
    } else {
        HardlistItemOne.textContent = "Väärin";
    }

    if(hardAnswers.includes("AFAIK")){
        HardlistItemTwo.textContent = "Oikein";
        hardRightAnswers.push(hardAnswer2);
    } else {
        HardlistItemTwo.textContent = "Väärin";
    }

    if(hardAnswers.includes("Are you often hungry?")){
        HardlistItemThree.textContent = "Oikein";
        hardRightAnswers.push(hardAnswer3);
    } else {
        HardlistItemThree.textContent = "Väärin";
    }

    if(hardAnswers.includes("Maatilalla")){
        HardlistItemFour.textContent = "Oikein";
        hardRightAnswers.push(hardAnswer4);
    }else {
        HardlistItemFour.textContent = "Väärin";
    }

    if(hardAnswers.includes("was")){
        HardlistItemFive.textContent = "Oikein";
        hardRightAnswers.push(hardAnswer5);
    }else {
        HardlistItemFive.textContent = "Väärin";
    }
// ----------------------------------------------
// Pisteytys

// Container jonne tulee tulos ja muuta tekstiä
let hardResultContainer = document.getElementById("hardText");

    if(hardRightAnswers.length == 0){
        hardResultContainer.textContent = "Voi ei, mönkään meni. Kokeile uudestaan painamalla nappia";
    }else if(hardRightAnswers.length == 1){
        hardResultContainer.textContent = "Hyvä! Sait yhden oikein, nappia painamalla voit kokeilla uudestaan.";
    } else if(hardRightAnswers.length == 2){
        hardResultContainer.textContent = "Hienoa! Sait kaksi oikein! Nappia painamalla voit kokeilla uudestaan.";
    } else if(hardRightAnswers.length == 3){
        hardResultContainer.textContent = "Loistavaa! Sait kolme oikein! Nappia painamalla voit kokeilla uudestaan.";
    }else if(hardRightAnswers.length == 4){
        hardResultContainer.textContent = "Mahtavaa! Sait neljä oikein! Nappia painamalla voit kokeilla uudestaan."
    } else {
        hardResultContainer = "Erinomaista! Sait kaikki oikein. Nämä olivat visan vaikeimmat kysymykset. Taidatkin olla oikea Englannin kielen mestari!"
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




