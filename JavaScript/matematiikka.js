//Divien kutsu html:stä
let startdiv = document.querySelector(".startbox");
let questionOnediv = document.querySelector(".questionOne");
let questionTwodiv = document.querySelector(".questionTwo");

let startbutton = document.querySelector(".startbutton");
let buttonToQ2 = document.querySelector(".q1next");

//pisteet
let points = 0;
let span = document.createElement("span");
    span.textContent = "Pisteet: " + points;
    span.classList.add("pointsspan");
    let body = document.querySelector("body");
    body.appendChild(span);

startbutton.addEventListener("click", startquiz);

function startquiz(){
    startdiv.style.display = "none" ;
    questionOnediv.classList.add("questionDivStyle")
    questionOnediv.style.display = "grid";
}

//funktio vastauksen tarkistukselle, vaihtaa värin vihreäksi, jos vastaus oikein, jos väärin punainen. Lisää pisteet.
function checkAnswer(lockbutton , radio1, radio2, radio3, l1, l2, l3){
lockbutton.addEventListener("click", () => {

  if (radio1.checked) {
    console.log("Oikein");
    l1.style.backgroundColor = "green";
    lockbutton.style.display = "none";
    points = points + 1;
    span.innerHTML = "Pisteet: "+points;
    buttonToQ2.style.display = "block";
  } else if (radio2.checked) {
    console.log("Väärin");
    l2.style.backgroundColor = "red";
    lockbutton.style.display = "none";
    buttonToQ2.style.display = "block";
  } else if (radio3.checked) {
    console.log("Väärin");
    l3.style.backgroundColor = "red";
    lockbutton.style.display = "none";
    buttonToQ2.style.display = "block";
  } else {
    console.log("Ei vastausta");
  }
});
}
//Vastauksen tarkistaminen kysymykseen 1
let lockq1 = document.querySelector(".lockq1");
let Q1radioA = document.querySelector(".q1radioa");
let Q1radioB = document.querySelector(".q1radiob");
let Q1radioC = document.querySelector(".q1radioc");
let Q1labelA = document.querySelector(".q1labela")
let Q1labelB = document.querySelector(".q1labelb")
let Q1labelC = document.querySelector(".q1labelc")

checkAnswer(lockq1, Q1radioB, Q1radioA, Q1radioC, Q1labelB, Q1labelA, Q1labelC);

buttonToQ2.addEventListener("click", OpenQuestion2);

function OpenQuestion2(){
    questionOnediv.style.display = "none";
    questionTwodiv.classList.add("questionDivStyle");
    questionTwodiv.style.display = "grid";
}
