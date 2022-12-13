//Divien kutsu html:stä
let startdiv = document.querySelector(".startbox");
let questionOnediv = document.querySelector(".questionOne");
let questionTwodiv = document.querySelector(".questionTwo");
let questionThreediv = document.querySelector(".questionThree")
let questionFourdiv = document.querySelector(".questionFour")
let questionFivediv = document.querySelector(".questionFive")

//Painikkeet
let startbutton = document.querySelector(".startbutton");
let buttonToQ2 = document.querySelector(".q1next");
let buttontoQ3 = document.querySelector(".q2next");
let buttontoQ4 = document.querySelector(".q3next")
let buttontoQ5 = document.querySelector(".q4next")
let finishbutton = document.querySelector(".finishquiz")

//pisteet
let points = 0;
let span = document.createElement("span");
    span.textContent = "Pisteet: " + points;
    span.classList.add("pointsspan");

    //Vastausten tallentaminen, (kesken)
    let answers = [];

// Funktio asettaa vastaukset satunnaiseen järjestykseen
function assignOptions(nextButton, Options, labelA, labelB, labelC) {
  nextButton.addEventListener("click", () =>{

  let randomNumber = Math.floor(Math.random() * 3) + 1;

  labelA.innerHTML = Options[randomNumber-1];
  labelB.innerHTML = Options[randomNumber%3];
  labelC.innerHTML = Options[(randomNumber+1)%3];
});
}
// Kysymys 1 vastaukset
let OptionsQ1 = ["2", "11", "0"];
let Q1labelA = document.querySelector(".q1labela");
let Q1labelB = document.querySelector(".q1labelb");
let Q1labelC = document.querySelector(".q1labelc");

startbutton.addEventListener("click", startquiz);
assignOptions( startbutton, OptionsQ1, Q1labelA, Q1labelB, Q1labelC);

//Aloittaa visan
function startquiz(){
    startdiv.style.display = "none" ;
    questionOnediv.classList.add("questionDivStyle");
    let lockanswer1 = document.querySelector(".lockq1");
    lockanswer1.classList.add("lockans");
    buttonToQ2.classList.add("qnext");
    questionOnediv.style.display = "grid"; 
    let body = document.querySelector("body");
    body.appendChild(span);
}

//Tein nämä, jottei tarvi monistaa joka kohtaan näitä check_answer funktiossa
function style_correct(lockButton, nextButton, textp){
  lockButton.style.display = "none";
  points = points + 2;
  span.innerHTML = "Pisteet: "+points;
  nextButton.style.display = "block";
  textp.innerHTML = "Vastauksesi on oikein :) !";
  textp.style.color = "green";
}
function style_incorrect(lockButton, nextButton, textp, expl){
  lockButton.style.display = "none";
  points = points + 2;
  span.innerHTML = "Pisteet: "+points;
  nextButton.style.display = "block";
  textp.innerHTML = expl;
  textp.style.color = "red";
}

// Tarkistaa, onko vastaus oikein vai väärin, lukitsee vastauksen, vaihtaa värin ja lisää pisteet.
function check_answer(lockbutton, nextbutton, optionA, optionB, optionC, labelA, labelB, labelC, correct,
   incorrect1, incorrect2, p, explanation) {
  lockbutton.addEventListener("click", () =>{
  // Tarkistaa, mikä vastaus valittu. 
  if (optionA.checked) {
    // Jos vastaus oikein, seuraavat toiminnot:
    if (labelA.innerHTML === correct) {
      console.log("correct");
      labelA.style.backgroundColor = "rgba(0, 224, 0, 0.61)";
      optionB.disabled = true;
      optionC.disabled = true;
      style_correct(lockbutton, nextbutton, p);
    }//Jos väärin 
    if(labelA.innerHTML === incorrect1 || labelA.innerHTML === incorrect2){
      console.log("incorrect");
      labelA.style.backgroundColor = "rgba(255, 0, 0, 0.61)";
      optionB.disabled = true;
      optionC.disabled = true;
      style_incorrect(lockbutton, nextbutton, p, explanation);
    }
  }   if (optionB.checked) {
    if (labelB.innerHTML === correct) {
      console.log("correct");
      labelB.style.backgroundColor = "rgba(0, 224, 0, 0.61)";
      optionA.disabled = true;
      optionC.disabled = true;
      style_correct(lockbutton, nextbutton, p);
    }
    if(labelB.innerHTML === incorrect1 || labelB.innerHTML === incorrect1){
      console.log("incorrect");
      labelB.style.backgroundColor = "rgba(255, 0, 0, 0.61)";
      optionA.disabled = true;
      optionC.disabled = true;
      style_incorrect(lockbutton, nextbutton, p, explanation);
    }
  }   if (optionC.checked) {
    if (labelC.innerHTML === correct) {
      console.log("correct");
      labelC.style.backgroundColor = "rgba(0, 224, 0, 0.61)";
      optionA.disabled = true;
      optionB.disabled = true;
      style_correct(lockbutton, nextbutton, p);
    }
    if(labelC.innerHTML === incorrect1 || labelC.innerHTML === incorrect2){
      console.log("incorrect");
      labelC.style.backgroundColor = "rgba(255, 0, 0, 0.61)";
      optionA.disabled = true;
      optionB.disabled = true;
      style_incorrect(lockbutton, nextbutton, p, explanation);
    }
  } 
})
}
//Kysymyksen 1 vastauksen tarkistus.
let lockq1 = document.querySelector(".lockq1");
let Q1optionA = document.querySelector(".q1optiona");
let Q1optionB = document.querySelector(".q1optionb");
let Q1optionC = document.querySelector(".q1optionc");
let correctQ1 = "2";
let incorrect1Q1 = "11";
let incorrect2Q1 = "0";
let explanation1 = "Vastauksesi on väärin. 1 + 1 on 2.";
let answerone = document.querySelector(".answerone");

check_answer(lockq1, buttonToQ2, Q1optionA, Q1optionB, Q1optionC, Q1labelA, Q1labelB, Q1labelC, correctQ1,
   incorrect1Q1, incorrect2Q1, answerone, explanation1);

// Kysymys 2 vastaukset
let OptionsQ2 = ["-6", "16", "12"];
let Q2labelA = document.querySelector(".q2labela");
let Q2labelB = document.querySelector(".q2labelb");
let Q2labelC = document.querySelector(".q2labelc");

buttonToQ2.addEventListener("click", StartQuestion2);
//sekoittaa taas vaihtoehdot
assignOptions(buttonToQ2, OptionsQ2, Q2labelA, Q2labelB, Q2labelC);


//Avaa kysymyksen 2, piilottaa aikaisemman kysymyksen.
function StartQuestion2(){
    questionOnediv.style.display = "none";
    questionTwodiv.classList.add("questionDivStyle");
    let lockanswer2 = document.querySelector(".lockq2")
    lockanswer2.classList.add("lockans");
    buttontoQ3.classList.add("qnext");
    questionTwodiv.style.display = "grid";
}

//Vastauksen tarkistaminen kysymykseen 2, 
let lockq2 = document.querySelector(".lockq2");
let Q2optionA = document.querySelector(".q2optiona");
let Q2optionB = document.querySelector(".q2optionb");
let Q2optionC = document.querySelector(".q2optionc");
let correctQ2 = "12";
let incorrect1Q2 = "16";
let incorrect2Q2 = "-6";
let answerTwo = document.querySelector(".AnswerTwo")
let explanation2 = "Vastauksesi on väärin. Oikea vastaus on 12";

check_answer(lockq2, buttontoQ3, Q2optionA, Q2optionB, Q2optionC, Q2labelA, Q2labelB, Q2labelC,
correctQ2, incorrect1Q2, incorrect2Q2 , answerTwo, explanation2);

// Kysymys 3 vastaukset
let OptionsQ3 = ["--", "---", "----"];
let Q3labelA = document.querySelector(".q3labela");
let Q3labelB = document.querySelector(".q3labelb");
let Q3labelC = document.querySelector(".q3labelc");

buttontoQ3.addEventListener("click", StartQuestion3);

assignOptions(buttontoQ3, OptionsQ3, Q3labelA, Q3labelB, Q3labelC);

function StartQuestion3(){
  questionTwodiv.style.display = "none";
  questionThreediv.classList.add("questionDivStyle");
  let lockanswer3 = document.querySelector(".lockq3");
  lockanswer3.classList.add("lockans");
  buttontoQ4.classList.add("qnext");
  questionThreediv.style.display = "grid";
}
//Vastauksen tarkistaminen kysymykseen 3
let lockq3 = document.querySelector(".lockq3");
let Q3optionA = document.querySelector(".q3optiona");
let Q3optionB = document.querySelector(".q3optionb");
let Q3optionC = document.querySelector(".q3optionc");
let correctQ3 = "--";
let incorrect1Q3 = "---";
let incorrect2Q3 = "----";
let answerthree = document.querySelector(".answerthree")
let explanation3 = "Vastauksesi on väärin. Oikea vastaus on ---";

check_answer(lockq3, buttontoQ4, Q3optionA, Q3optionB, Q3optionC, Q3labelA, Q3labelB, Q3labelC,
  correctQ3, incorrect1Q3, incorrect2Q3 , answerthree, explanation3);

  // Kysymys 3 vastaukset
let OptionsQ4 = ["--", "---", "----"];
let Q4labelA = document.querySelector(".q4labela");
let Q4labelB = document.querySelector(".q4labelb");
let Q4labelC = document.querySelector(".q4labelc");

buttontoQ4.addEventListener("click", StartQuestion4);

assignOptions(buttontoQ4, OptionsQ4, Q4labelA, Q4labelB, Q4labelC);

function StartQuestion4(){
  questionThreediv.style.display = "none";
  questionFourdiv.classList.add("questionDivStyle");
  let lockanswer4 = document.querySelector(".lockq4");
  lockanswer4.classList.add("lockans");
  buttontoQ5.classList.add("qnext");
  questionFourdiv.style.display = "grid";
}

//Vastauksen tarkistaminen kysymykseen 4
let lockq4 = document.querySelector(".lockq4");
let Q4optionA = document.querySelector(".q4optiona");
let Q4optionB = document.querySelector(".q4optionb");
let Q4optionC = document.querySelector(".q4optionc");
let correctQ4 = "--";
let incorrect1Q4 = "---";
let incorrect2Q4 = "----";
let answerfour = document.querySelector(".answerfour")
let explanation4 = "Vastauksesi on väärin. Oikea vastaus on ---";

check_answer(lockq4, buttontoQ5, Q4optionA, Q4optionB, Q4optionC, Q4labelA, Q4labelB, Q4labelC, 
  correctQ4, incorrect1Q4, incorrect2Q4, answerfour, explanation4);

