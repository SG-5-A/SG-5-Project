

let accordion1 = document.getElementById("accordionExample");
let answers = document.getElementById("next");
let start = document.getElementById("startButton");
let resultButton = document.getElementById("resultButton");
let resultB = document.getElementById("resultB");
let results = document.getElementById("resultDiv");
let infoText = document.getElementById("textContainer");
let scoreBoard = document.getElementById("scoreBoard");
answers.addEventListener("click", openaccordion1)
resultB.addEventListener("click", openResults)
scoreBoard.innerHTML="";


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

//queryselectorit

let firstQuestion = document.querySelectorAll('input[name="quest"]');
let secondQuestion = document.querySelectorAll('input[name="quest2"]');
let thirdQuestion = document.querySelectorAll('input[name="quest3"]');
let fourthQuestion = document.querySelectorAll('input[name="quest4"]');
let fifthQuestion = document.querySelectorAll('input[name="quest5"]');



//oikeat vastaukset 
let correct1 = document.getElementById("rd3");
let correct2 = document.getElementById("rd5");
let correct3 = document.getElementById("rd9");
let correct4 = document.getElementById("rd10");
let correct5 = document.getElementById("rd14");


//väärät

let wrong1 = document.getElementById("rd1");
let wrong2 = document.getElementById("rd2");
let wrong3 = document.getElementById("rd4");
let wrong4 = document.getElementById("rd6");
let wrong5 = document.getElementById("rd7");
let wrong6 = document.getElementById("rd8");
let wrong7 = document.getElementById("rd11");
let wrong8 = document.getElementById("rd12");
let wrong9 = document.getElementById("rd13");
let wrong10 = document.getElementById("rd15");





//tulos innerhtml/print
let tulos = document.getElementById("tulos");
let tulos2 = document.getElementById("tulos2");
let tulos3 = document.getElementById("tulos3");
let tulos4 = document.getElementById("tulos4");
let tulos5 = document.getElementById("tulos5");


// eventlistenerit
correct1.addEventListener("click",testi)
correct2.addEventListener("click",testi2)
correct3.addEventListener("click",testi3)
correct4.addEventListener("click",testi4)
correct5.addEventListener("click",testi5)



//väärät vastaukset
wrong1.addEventListener("click",incorrect)
wrong2.addEventListener("click",incorrect)
wrong3.addEventListener("click",incorrect2)
wrong4.addEventListener("click",incorrect2)
wrong5.addEventListener("click",incorrect3)
wrong6.addEventListener("click",incorrect3)
wrong7.addEventListener("click",incorrect4)
wrong8.addEventListener("click",incorrect4)
wrong9.addEventListener("click",incorrect5)
wrong10.addEventListener("click",incorrect5)

//functiont vastauksille
function testi(){
    
    if(correct1.checked){

        tulos.innerHTML="oikein!"
       
    }
}
function testi2(){
    if(correct2.checked){
        tulos2.innerHTML="oikein!"
        
    }
}
function testi3(){
    if(correct3.checked){
        tulos3.innerHTML="oikein!"
    }
}
function testi4(){
    if(correct4.checked){
        tulos4.innerHTML="oikein!"
    }
}
function testi5(){
    if(correct5.checked){
        tulos5.innerHTML="oikein!"
    }
}
//virheelliset

    function incorrect(){
        if(wrong1.checked || wrong2.checked){
            tulos.innerHTML="väärin"
        }
    }
  
    function incorrect2(){
        if(wrong3.checked || wrong4.checked){
            tulos2.innerHTML="väärin"
        }
    }
    
    function incorrect3(){
        if(wrong5.checked || wrong6.checked){
            tulos3.innerHTML="väärin"
        }
    }
   
    function incorrect4(){
        if(wrong7.checked ||wrong8.checked){
            tulos4.innerHTML="väärin"
        }
    }
    function incorrect5(){
        if(wrong9.checked || wrong10.checked){
            tulos5.innerHTML="väärin"
        }
    }
    
   
    //ei vastattu




    
   