/*Tekijä: Sara P.*/

let finalScore = document.querySelector("#scoreRes");

const userScore = localStorage.getItem("mostRecentScore");


finalScore.innerText = userScore + " / 50";


let commentRes = document.getElementById("endText");


if(userScore >= 40){
    commentRes.innerHTML = "Hyvää työtä!";
}
else if(userScore == 30){
    commentRes.innerHTML = "Melkein, vielä vähän harjoittelua.";
}
else if(userScore == 20){
    commentRes.innerHTML = "Hyvä alku, harjoittele jonkin verran vielä.";
}
else if(userScore == 10){
    commentRes.innerHTML = "Hyvä yritys, harjoittele vielä!";
}
else if(userScore == 0){
    commentRes.innerHTML = "Yritä uudelleen";
}