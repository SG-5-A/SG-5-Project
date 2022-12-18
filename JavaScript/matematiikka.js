//Divien kutsu 
let startdiv = document.querySelector(".startbox");
let questionOnediv = document.querySelector(".questionOne");
let questionTwodiv = document.querySelector(".questionTwo");
let questionThreediv = document.querySelector(".questionThree")
let questionFourdiv = document.querySelector(".questionFour")
let questionFivediv = document.querySelector(".questionFive")
let ResultsDiv = document.getElementById("resultsdiv");
//Painikkeet
let startbutton = document.querySelector(".startbutton");
let buttonToQ2 = document.querySelector(".q1next");
let buttontoQ3 = document.querySelector(".q2next");
let buttontoQ4 = document.querySelector(".q3next")
let buttontoQ5 = document.querySelector(".q4next")
let finishbutton = document.querySelector(".finish")

//funktio palauttaa html:stä labelin, classilla ".q" + kysymyksen numero + "label" + vaihtoehdon kirjain.
function label(number, letter){
 let name = ".q" + number + "label" + letter;
 let element = document.querySelector(name);
 return element;
}
//funktio palauttaa inputin, classilla ".q" + numero + "label" + kirjain.
function radio(number, letter){
  let name = ".q" + number + "option" + letter;
  let element = document.querySelector(name);
  return element;
 }
//pisteet
let points = 0;
let span = document.querySelector(".points");
    span.textContent = "Pisteet: " + points;

    //Tulosten tallentaminen tähän taulukkoon
    let answers = [];

// Funktio asettaa vastaus vaihtoehdot satunnaiseen järjestykseen ja asettaa tekstikenttään kysymyksen.
function assignOptions(nextButton, Options, labelA, labelB, labelC, p, question) {
  nextButton.addEventListener("click", () =>{

  let randomNumber = Math.floor(Math.random() * 3) + 1;

  labelA.innerHTML = Options[randomNumber-1];
  labelB.innerHTML = Options[randomNumber%3];
  labelC.innerHTML = Options[(randomNumber+1)%3];
  p.innerHTML = question;
});
}
//Luo satunnaisen luvun tietyltä väliltä. Ei luo num1 ja num2 parametriin asetettua arvoa.
//Lähde: https://stackoverflow.com/a/27406449
function generateRandom(min, max, num1, num2) {
  var rtn = Math.floor(Math.random() * (max - min + 1)) + min;
  return rtn == num1 || rtn == num2 ? generateRandom(min, max, num1, num2) : rtn;
}
// Kysymys 1 vastaukset
let randomQ1value = generateRandom(1, 3)
let randomQ1value2 = generateRandom(1, 3);
let correctQ1 = randomQ1value + randomQ1value2;
//Estetään saman arvon tuottaminen useaan vaihtoehtoon käyttämällä num1 ja num2 parametrejä.
let incorrect1Q1 = generateRandom(1, 10, correctQ1)
let incorrect2Q1 = generateRandom(1, 10, correctQ1, incorrect1Q1);
let OptionsQ1 = [correctQ1, incorrect1Q1, incorrect2Q1];
let hques1 = document.querySelector(".hques1");
let question_one = "Kuinka paljon on " + randomQ1value + " " + "+" + " " + randomQ1value2 + " ?";

//sekoittaa vaihtoehdot
assignOptions( startbutton, OptionsQ1, label(1, "a"), label(1, "b"), label(1, "c"), hques1, question_one);

console.log("correctQ1", correctQ1 ,")","incorrectQ1", incorrect1Q1, ")","incorrectQ1", incorrect2Q1);

startbutton.addEventListener("click", startquiz);

//Aloittaa visan
function startquiz(){
    startdiv.style.display = "none" ;
    questionOnediv.classList.add("questionDivStyle");
    let lockanswer1 = document.querySelector(".lockq1");
    lockanswer1.classList.add("lockans");
    buttonToQ2.classList.add("qnext");
    questionOnediv.style.display = "grid"; 
    span.style.display = "block";
}

//Tein nämä, jottei tarvi monistaa joka kohtaan erikseen check_answer funktiossa
function style_correct(lockButton, nextButton, textp){
  lockButton.style.display = "none";
  points = points + 2;
  span.innerHTML = "Pisteet: "+points;
  span.style.animationName = "correct-animation";
  span.style.animationDuration = "1s";
  span.style.animationIterationCount = "2";
  nextButton.style.display = "block";
  textp.innerHTML = "Vastauksesi on oikein :) !";
  textp.style.color = "green";
}
function style_incorrect(lockButton, nextButton, textp, expl){
  lockButton.style.display = "none";
  span.innerHTML = "Pisteet: "+points;
  span.style.animationName = "incorrect-animation";
  span.style.animationDuration = "1s";
  span.style.animationIterationCount = "2";
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
    if (labelA.innerHTML == correct) {
      console.log("correct");
      labelA.style.backgroundColor = "rgba(0, 224, 0, 0.61)";
      optionB.disabled = true;
      optionC.disabled = true;
      style_correct(lockbutton, nextbutton, p);
      answers.push([labelA.innerHTML, " Oikein" + "<br>"]);
    }//Jos väärin 
    if(labelA.innerHTML == incorrect1 || labelA.innerHTML == incorrect2){
      console.log("incorrect");
      labelA.style.backgroundColor = "rgba(255, 0, 0, 0.61)";
      optionB.disabled = true;
      optionC.disabled = true;
      style_incorrect(lockbutton, nextbutton, p, explanation);
      answers.push([labelA.innerHTML, " Väärin" + "<br>" + "Oikea vastaus oli " + correct]);
    }
  }   if (optionB.checked) {
    if (labelB.innerHTML == correct) {
      console.log("correct");
      labelB.style.backgroundColor = "rgba(0, 224, 0, 0.61)";
      optionA.disabled = true;
      optionC.disabled = true;
      style_correct(lockbutton, nextbutton, p);
      answers.push([labelB.innerHTML, " Oikein" + "<br>"]);
    }
    if(labelB.innerHTML == incorrect1 || labelB.innerHTML == incorrect2){
      console.log("incorrect");
      labelB.style.backgroundColor = "rgba(255, 0, 0, 0.61)";
      optionA.disabled = true;
      optionC.disabled = true;
      style_incorrect(lockbutton, nextbutton, p, explanation);
      answers.push([labelB.innerHTML, " Väärin" + "<br>" + "Oikea vastaus oli " + correct]);
    }
  }   if (optionC.checked) {
    if (labelC.innerHTML == correct) {
      console.log("correct");
      labelC.style.backgroundColor = "rgba(0, 224, 0, 0.61)";
      optionA.disabled = true;
      optionB.disabled = true;
      style_correct(lockbutton, nextbutton, p);
      answers.push([labelC.innerHTML, " Oikein" + "<br>"]);
    }
    if(labelC.innerHTML == incorrect1 || labelC.innerHTML == incorrect2){
      console.log("incorrect");
      labelC.style.backgroundColor = "rgba(255, 0, 0, 0.61)";
      optionA.disabled = true;
      optionB.disabled = true;
      style_incorrect(lockbutton, nextbutton, p, explanation);
      answers.push([labelC.innerHTML, " Väärin" + "<br>" + "Oikea vastaus oli " + correct]);
    }
  } 
})
}
//Kysymyksen 1 vastauksen tarkistus.
let lockq1 = document.querySelector(".lockq1");
let explanation1 = "Vastauksesi on väärin. " + randomQ1value +  " + "  + randomQ1value2 + " on " + correctQ1 + ".";
let answerone = document.querySelector(".answerone");

check_answer(lockq1, buttonToQ2, radio(1, "a"), radio(1, "b"), radio(1, "c"), label(1, "a"), label(1, "b"), label(1, "c"), correctQ1,
   incorrect1Q1, incorrect2Q1, answerone, explanation1);

// Kysymys 2 vastaukset
let randomQ2value = generateRandom(1, 50);
let randomQ2value2 = generateRandom(1, 50);
let correctQ2 = randomQ2value - randomQ2value2;
let incorrect1Q2 = generateRandom(1, 50, correctQ2)
let incorrect2Q2 = generateRandom(1, 50, correctQ2, incorrect1Q2);
let OptionsQ2 = [correctQ2, incorrect1Q2, incorrect2Q2];
let hques2 = document.querySelector(".hques2");
let question_two = "Kuinka paljon on lukujen " + randomQ2value + " ja " + randomQ2value2 + " erotus?";

//sekoittaa taas vaihtoehdot 
assignOptions( buttonToQ2, OptionsQ2,  label(2, "a"), label(2, "b"), label(2, "c"), hques2, question_two);

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

//Vastauksen tarkistaminen kysymykseen 2, 
let lockq2 = document.querySelector(".lockq2");
let answerTwo = document.querySelector(".answertwo")
let explanation2 = "Vastauksesi on väärin. Oikea vastaus on " + correctQ2 + ".";

check_answer(lockq2, buttontoQ3, radio(2, "a"), radio(2, "b"), radio(2, "c"), label(2, "a"), label(2, "b"), label(2, "c"),
correctQ2, incorrect1Q2, incorrect2Q2 , answerTwo, explanation2);

// Kysymys 3 vastaukset
// Luo satunnaisen parillisen luvun. 
function generatePair(min, max, num1) {
  var rtn = Math.floor(Math.random() * (max - min + 1)) + min;
 
  if (rtn % 2 === 1) {
    return rtn + 1;
  } else {
    return generatePair(min, max, num1);
  }
}

let randomQ3value = generatePair(1, 16);
let randomQ3value2 = generatePair(1, 16);
let correctQ3 = randomQ3value/randomQ3value2;
let incorrect1Q3 = generateRandom(1, 16, correctQ3)
let incorrect2Q3 = generateRandom(1, 16, correctQ3, incorrect1Q3);
let OptionsQ3 = [correctQ3, incorrect1Q3, incorrect2Q3];
let hques3 = document.querySelector(".hques3");
let question_three = "Paljonko on luku " + randomQ3value + " jaettuna luvulla " + randomQ3value2 + " ?";

assignOptions( buttontoQ3, OptionsQ3,label(3, "a"), label(3, "b"), label(3, "c"), hques3, question_three);

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
let answerthree = document.querySelector(".answerthree")
let explanation3 = "Vastauksesi on väärin. Oikea vastaus on " + correctQ3 + "." ;

check_answer(lockq3, buttontoQ4,  radio(3, "a"), radio(3, "b"), radio(3, "c"), label(3, "a"), label(3, "b"), label(3, "c"),
  correctQ3, incorrect1Q3, incorrect2Q3 , answerthree, explanation3);

  // Kysymys 4 vastaukset
  let randomQ4value = generateRandom(1, 12, 1);
  let randomQ4value2 = generateRandom(1, 8, 1);
  let correctQ4 = (randomQ4value * randomQ4value2) + "cm";
  let incorrect1Q4 = generateRandom(1, 96, correctQ4) + "cm";
  let incorrect2Q4 = generateRandom(1, 96, correctQ4, incorrect1Q4) + "cm";
  let OptionsQ4 = [correctQ4, incorrect1Q4, incorrect2Q4];
  let hques4 = document.querySelector(".hques4");
  let question_four = "Mikä on suorakulmion pinta-ala jonka leveys on " + randomQ4value + "cm ja korkeus " + randomQ4value2 + "cm ?";
  
  assignOptions( buttontoQ4, OptionsQ4, label(4, "a"), label(4, "b"), label(4, "c"), hques4, question_four);

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
let answerfour = document.querySelector(".answerfour")
let explanation4 = "Vastauksesi on väärin. Oikea vastaus on " + correctQ4 + ".";

check_answer(lockq4, buttontoQ5,  radio(4, "a"), radio(4, "b"), radio(4, "c"), label(4, "a"), label(4, "b"), label(4, "c"), 
  correctQ4, incorrect1Q4, incorrect2Q4, answerfour, explanation4);

// Kysymys 5 vastaukset
let randomQ5value = generateRandom(0, 4, 2, 3);
let randomQ5value2 = generateRandom(1, 6);
let correctQ5 = Math.sqrt(randomQ5value) + Math.pow(randomQ5value2, 2);
let incorrect1Q5 = generateRandom(1, 38, correctQ5);
let incorrect2Q5 = generateRandom(1, 38, correctQ5, incorrect1Q5);
let OptionsQ5 = [correctQ5, incorrect1Q5, incorrect2Q5];
let hques5 = document.querySelector(".hques5");
let question_five = "Kuinka paljon on luvun " + "&radic;" + randomQ5value + " ja luvun " + randomQ5value2 + " potenssiin " + 2 + " summa ?";

assignOptions( buttontoQ5, OptionsQ5, label(5, "a"), label(5, "b"), label(5, "c"), hques5, question_five);

buttontoQ5.addEventListener("click", StartQuestion5);

function StartQuestion5(){
questionFourdiv.style.display = "none";
questionFivediv.classList.add("questionDivStyle");
let lockanswer5 = document.querySelector(".lockq5");
lockanswer5.classList.add("lockans");
finishbutton.classList.add("qnext");
questionFivediv.style.display = "grid";
}

//Vastauksen tarkistaminen kysymykseen 5
let lockq5 = document.querySelector(".lockq5");
let answerfive = document.querySelector(".answerfive")
let explanation5 = "Vastauksesi on väärin. Oikea vastaus on " + correctQ5 + ".";

check_answer(lockq5, finishbutton,  radio(5, "a"), radio(5, "b"), radio(5, "c"), label(5, "a"), label(5, "b"), label(5, "c"), 
correctQ5, incorrect1Q5, incorrect2Q5, answerfive, explanation5);

function ShowResult(){
  let results = document.querySelector(".results");
  results.innerHTML = "<li>" + "Kysymys 1. Vastauksesi: " + answers[0] + "</li>" + "<li>" +"Kysymys 2. Vastauksesi: "
   +  answers[1] + "</li>" + "<li>" +"Kysymys 3. Vastauksesi: " +  answers[2] + "</li>" + "<li>" + "Kysymys 4. Vastauksesi: " +  answers[3] + "</li>" + 
   "<li>" + "Kysymys 5. Vastauksesi: " + answers[4] + "</li>";
}

finishbutton.addEventListener("click", FinishQuiz);


function FinishQuiz(){

questionFivediv.style.display = "none";
ResultsDiv.classList.add("resultsdivstyle");
ResultsDiv.appendChild(span);
span.style.setProperty("text-align", "center", "important");
ShowResult();
ResultsDiv.style.display = "grid";
}