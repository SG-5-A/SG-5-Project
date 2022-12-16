

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

//queryselectorin radioille oikeille vastauksille
let right1 = document.querySelector(".firstRight");
let right2 = document.querySelector(".secondRight");
let right3 = document.querySelector(".thirdRight");
let right4 = document.querySelector(".forthRight");
let right5 = document.querySelector(".fifthRight");



//tulos innerhtml/print
let tulos = document.getElementById("tulos");
let tulos2 = document.getElementById("tulos2");
let tulos3 = document.getElementById("tulos3");
let tulos4 = document.getElementById("tulos4");
let tulos5 = document.getElementById("tulos5");


// eventlistenerit
right1.addEventListener("click",testi)
right2.addEventListener("click",testi2)
right3.addEventListener("click",testi3)
right4.addEventListener("click",testi4)
right5.addEventListener("click",testi5)

//functionit
function testi(){
    if(right1.checked){
        tulos.innerHTML="oikein!"
    }
}
function testi2(){
    if(right1.checked){
        tulos2.innerHTML="oikein!"
    }
}
function testi3(){
    if(right1.checked){
        tulos3.innerHTML="oikein!"
    }
}
function testi4(){
    if(right1.checked){
        tulos4.innerHTML="oikein!"
    }
}
function testi5(){
    if(right1.checked){
        tulos5.innerHTML="oikein!"
    }
}

    
