
let startdiv = document.querySelector(".startbox");
let questionOnediv = document.querySelector(".questionOne");
let questionTwodiv = document.querySelector(".questionTwo");
let startbutton = document.querySelector(".startbutton");

startbutton.addEventListener("click", startquiz);

function startquiz(){
    startdiv.style.display = "none" ;
    questionOnediv.classList.add("questionDivStyle")
    questionOnediv.style.display = "grid";
}

let buttonToQ2 = document.querySelector(".q1next");

buttonToQ2.addEventListener("click", OpenQuestion2);

function OpenQuestion2(){
    questionOnediv.style.display = "none";
    questionTwodiv.classList.add("questionDivStyle")
    questionTwodiv.style.display = "grid"
}
