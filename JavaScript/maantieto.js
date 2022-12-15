

let accordion1 = document.getElementById("accordionExample");
let answers = document.getElementById("next");
let start = document.getElementById("startButton");
let resultButton = document.getElementById("resultButton");
let resultB = document.getElementById("resultB");
let results = document.getElementById("resultDiv");
let infoText = document.getElementById("textContainer");
answers.addEventListener("click", openaccordion1)
resultB.addEventListener("click", openResults)

/**
 * @param {Event} event
 */
 
//aloitus sivu
function openaccordion1(event){

    //let clickedbutton = event.currentTarget;
    //answerClicked = clickedbutton;
    accordion1.classList.add("visible");
    start.classList.add("remove");
    resultButton.classList.add("visible");
    infoText.classList.add("visible");

}
/**
 * @param {event} event
 */
//result sivu
function openResults(event){
    accordion1.classList.remove("visible");
    resultButton.classList.remove("visible");
    results.classList.add("visible");
    infoText.classList.remove("visible");


}