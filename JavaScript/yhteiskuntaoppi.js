let pisteet = 0;

function lisääyksipiste(){
    pisteet++;
}
function päivitäPisteet(){
    document.getElementById("pisteytys").innerHTML= pisteet + "/5"
}

function Vastaus1()
{
    let käyttäjänvastaus = document.querySelector('input[name="kysymys1"]:checked').value;
    
    document.getElementById("vastaus1_1").disabled = true;
    document.getElementById("vastaus1_2").disabled = true;
    document.getElementById("vastaus1_3").disabled = true;
    document.getElementById("vastaus1_4").disabled = true;

    if(käyttäjänvastaus=="V4"){
    
        document.getElementById("oikeavastaus1").innerHTML = "Vastaus on oikein. Puita ei saa kaataa ilman maanomistajan lupaa.";
        
        lisääyksipiste();
       
    }
    else {
       
        document.getElementById("oikeavastaus1").innerHTML = "Vastaus on väärin. Oikea vastaus on puiden kaataminen. Puita ei voi kaataa ilman maanomistajan lupaa. Luonnonmarjoja ja sieniä saa keräillä kuka vaan ja luonnossa saa hiihtää. Kenenkään pihamaalle ei saa kuitenkaan mennä ilman lupaa.";
        
    }
    päivitäPisteet();
}

function Vastaus2()
{
    let käyttäjänvastaus = document.querySelector('input[name="kysymys2"]:checked').value;
    
    document.getElementById("vastaus2_1").disabled = true;
    document.getElementById("vastaus2_2").disabled = true;
    document.getElementById("vastaus2_3").disabled = true;

    if(käyttäjänvastaus=="VV3"){
    
        document.getElementById("oikeavastaus2").innerHTML = "Vastaus on oikein. Kelakortti ei ole virallinen henkilöllisyystodistus.";
        lisääyksipiste();
       
    }
    else {
       
        document.getElementById("oikeavastaus2").innerHTML = "Vastaus on väärin. Oikea vastaus on kelakortti. Passi ja henkilökortti ovat virallisia henkilöllisyystodistuksia.";
        
    }
    päivitäPisteet();
}

function Vastaus3()
{
    let käyttäjänvastaus = document.querySelector('input[name="kysymys3"]:checked').value;
    
    document.getElementById("vastaus3_1").disabled = true;
    document.getElementById("vastaus3_2").disabled = true;
    document.getElementById("vastaus3_3").disabled = true;
    document.getElementById("vastaus3_4").disabled = true;

    if(käyttäjänvastaus=="VVV1"){
    
        document.getElementById("oikeavastaus3").innerHTML = "Vastaus on oikein. Demokratiaa on, että tärkeimmistä valtion asioista päättää kansa itse. ";
        lisääyksipiste();
    
    }
    else {
       
        document.getElementById("oikeavastaus3").innerHTML = "Vastaus on väärin. Oikea vastaus on kansan valtaa eli kansalaisten oikeutta päättää yhteisistä asioista.";
       
    } 
    päivitäPisteet();
}

function Vastaus4()
{
    let käyttäjänvastaus = document.querySelector('input[name="kysymys4"]:checked').value;
    
    document.getElementById("vastaus4_1").disabled = true;
    document.getElementById("vastaus4_2").disabled = true;
    document.getElementById("vastaus4_3").disabled = true;
    document.getElementById("vastaus4_4").disabled = true;

    if(käyttäjänvastaus=="VVVV4"){
    
        document.getElementById("oikeavastaus4").innerHTML = "Vastaus on oikein. Kaikki ihmiset ovat yhdenvertaisia eli samanarvoisia, joten he ovat myös lakiasioissa samalla viivalla.";
        lisääyksipiste();
        
    }
    else {
       
        document.getElementById("oikeavastaus4").innerHTML = "Vastaus on väärin. Suomen perustuslain mukaan ihmiset ovat yhdenvertaisia lain edessä. Toisia ihmisiä ei saa syrjiä mistään syystä, lait eivät ole samanlaisia joka valtiossa ja lakia on pakko noudattaa päivästä riippumatta.";
        
    }
    päivitäPisteet();
}


function Vastaus5()
{
    let käyttäjänvastaus = document.querySelector('input[name="kysymys5"]:checked').value;
    
    document.getElementById("vastaus5_1").disabled = true;
    document.getElementById("vastaus5_2").disabled = true;
    document.getElementById("vastaus5_3").disabled = true;
    document.getElementById("vastaus5_4").disabled = true;

    

    if(käyttäjänvastaus=="VVVVV2"){
    
        document.getElementById("oikeavastaus5").innerHTML = "Vastaus on oikein. Pääministerin tehtävänä on olla johtamassa maan hallitusta eli valtioneuvostoa.";
        lisääyksipiste();
        
    }
    else {
       
        document.getElementById("oikeavastaus5").innerHTML = "Vastaus on väärin. Pääministerin tehtävä on olla hallituksessa eli valtioneuvostossa johdossa.";
        
    }
    päivitäPisteet();
}
function paluunappi() {
    document.location.href="yhteiskuntaoppi.html";
}


