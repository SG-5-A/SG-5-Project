

let accordion1 = document.getElementById("accordionExample");
let answers = document.getElementById("next");
let start = document.getElementById("startButton");
answers.addEventListener("click", openaccordion1)


/**
 * @param {Event} event
 */
 

function openaccordion1(event){

    let clickedbutton = event.currentTarget;
    answerClicked = clickedbutton;
    accordion1.classList.add("visible");
    start.classList.add("remove");
   

}

