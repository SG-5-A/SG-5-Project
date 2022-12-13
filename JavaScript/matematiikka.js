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

startbutton.addEventListener("click", startquiz);

//pisteet
let points = 0;
let span = document.createElement("span");
    span.textContent = "Pisteet: " + points;
    span.classList.add("pointsspan");

    let answers = [];

//Aloittaa visan
function startquiz(){
    startdiv.style.display = "none" ;
    questionOnediv.classList.add("questionDivStyle")
    let lockanswer1 = document.querySelector(".lockq1")
    lockanswer1.classList.add("lockans");
    buttonToQ2.classList.add("qnext");
    questionOnediv.style.display = "grid"; 
    let body = document.querySelector("body");
    body.appendChild(span);
}

//funktio vastauksen tarkistukselle, lukitsee vastauksen, vaihtaa värin ja lisää pisteet.
function checkAnswer(lockbutton, nextButton, radio1, radio2, radio3, l1, l2, l3, p, explanation){
lockbutton.addEventListener("click", () => {

  if (radio1.checked) {
    console.log("Oikein");
    l1.style.backgroundColor = "rgba(0, 224, 0, 0.61)";
    lockbutton.style.display = "none";
    points = points + 2;
    span.innerHTML = "Pisteet: "+points;
    nextButton.style.display = "block";
    p.innerHTML = "Vastauksesi on oikein :) !";
    p.style.color = "green";
    radio2.disabled = true;
    radio3.disabled = true;
  } else if (radio2.checked) {
    console.log("Väärin");
    l2.style.backgroundColor = "rgba(255, 0, 0, 0.61)";
    lockbutton.style.display = "none";
    nextButton.style.display = "block";
    p.innerHTML = explanation;
    p.style.color = "red";
    radio1.disabled = true;
    radio3.disabled = true;
  } else if (radio3.checked) {
    console.log("Väärin");
    l3.style.backgroundColor = "rgba(255, 0, 0, 0.61)";
    lockbutton.style.display = "none";
    nextButton.style.display = "block";
    p.innerHTML = explanation;
    p.style.color = "red";
    radio1.disabled = true;
    radio2.disabled = true;
  } else {
    console.log("Ei vastausta");
  }
});
}
//Vastauksen tarkistaminen kysymykseen 1
let lockq1 = document.querySelector(".lockq1");
let Q1optionA = document.querySelector(".q1optiona");
let Q1optionB = document.querySelector(".q1optionb");
let Q1optionC = document.querySelector(".q1optionc");
let Q1labelA = document.querySelector(".q1labela");
let Q1labelB = document.querySelector(".q1labelb");
let Q1labelC = document.querySelector(".q1labelc");
let explanation1 = document.querySelector(".explanation1")
let oneAnswer = "Vastauksesi on väärin. 1 + 1 on 2."
checkAnswer(lockq1, buttonToQ2, Q1optionB, Q1optionA, Q1optionC, Q1labelB, Q1labelA, Q1labelC, explanation1, oneAnswer);

buttonToQ2.addEventListener("click", StartQuestion2);

//Avaa kysymyksen 2, piilottaa aikaisemman kysymyksen.
function StartQuestion2(){
    questionOnediv.style.display = "none";
    questionTwodiv.classList.add("questionDivStyle");
    let lockanswer2 = document.querySelector(".lockq2")
    lockanswer2.classList.add("lockans");
    buttontoQ3.classList.add("qnext");
    questionTwodiv.style.display = "grid";
}

//Vastauksen tarkistaminen kysymykseen 2
let lockq2 = document.querySelector(".lockq2");
let Q2optionA = document.querySelector(".q2optiona");
let Q2optionB = document.querySelector(".q2optionb");
let Q2optionC = document.querySelector(".q2optionc");
let Q2labelA = document.querySelector(".q2labela");
let Q2labelB = document.querySelector(".q2labelb");
let Q2labelC = document.querySelector(".q2labelc");
let explanation2 = document.querySelector(".explanation2")
let twoAnswer = "Vastauksesi on väärin. Oikea vastaus on 12";

checkAnswer(lockq2, buttontoQ3, Q2optionC, Q2optionA, Q2optionB, Q2labelC, Q2labelA, Q2labelB, explanation2, twoAnswer);

buttontoQ3.addEventListener("click", StartQuestion3);

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
let Q3labelA = document.querySelector(".q3labela");
let Q3labelB = document.querySelector(".q3labelb");
let Q3labelC = document.querySelector(".q3labelc");
let explanation3 = document.querySelector(".explanation3")
let ThreeAnswer = "Vastauksesi on väärin. Oikea vastaus on ---";

checkAnswer(lockq3, buttontoQ4, Q3optionC, Q3optionA, Q3optionB, Q3labelC, Q3labelA, Q3labelB, explanation3, ThreeAnswer);

buttontoQ4.addEventListener("click", StartQuestion4);

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
let Q4labelA = document.querySelector(".q4labela");
let Q4labelB = document.querySelector(".q4labelb");
let Q4labelC = document.querySelector(".q4labelc");
let explanation4 = document.querySelector(".explanation4")
let FourAnswer = "Vastauksesi on väärin. Oikea vastaus on ---";

checkAnswer(lockq4, buttontoQ5, Q4optionA, Q4optionB, Q4optionC, Q4labelA, Q4labelB, Q4labelC, explanation4, FourAnswer);

