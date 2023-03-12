"use strict"
let frontpage = document.getElementById("frontpage")
let startknap = document.getElementById("start")
let question1 = document.getElementById("question1")
let question2 = document.getElementById("question2")
let question3 = document.getElementById("question3")
let question4 = document.getElementById("question4")
let question5 = document.getElementById("question5")
let right1 = document.getElementById("right1")
let right2 = document.getElementById("right2")
let right3 = document.getElementById("right3")
let right4 = document.getElementById("right4")
let right5 = document.getElementById("right5")
let buttons = document.querySelectorAll(".wrong")
let rightanswer = document.getElementById("rightanswer")
let toscore1 = document.getElementById("toscore1")
let wronganswer = document.getElementById("wronganswer")
let toscore2 = document.getElementById("toscore2")
let scoreresult = document.getElementById("scoreresult")
let tillyke = document.getElementById("tillyke")
let score = document.getElementById("score")
let pile = document.getElementsByClassName("pil")
let startforfra = document.getElementById("startforfra")
let point = 0

const buttonclick = () => {
    frontpage.style.display="none"
    question1.style.display="block"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const rightclick = (e) => {
    if ( e.id === "right1" ) {
        question1.style.display="none"
        wronganswer.style.display="none"
        rightanswer.style.display ="block"
        point += 1
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    } else {
        question1.style.display="none"
        wronganswer.style.display="block"
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

const toscore1a = () => {
    rightanswer.style.display="none"
    scoreresult.style.display="block"
    score.innerHTML= "score "+ point +"/1"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (point == 1) {
        pile[0].style.display ="none"
        pile[1].style.display ="none"
    } else {
        pile[0].style.display ="block"
        pile[1].style.display ="block"
    }
}
const toscore2b = () => {
    wronganswer.style.display="none"
    scoreresult.style.display="block"
    score.innerHTML= "score "+ point +"/1"
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (point == 1) {
        tillyke.innerHTML ="Tillykke "+ "du "+ "har "+ "gennemført "+ "quizzen"
        pile[0].style.display ="none"
        pile[1].style.display ="none"
    } else {
        tillyke.innerHTML ="Du "+ "har "+ "gennemført "+ "quizzen "+ "men "+ "har "+ "fejlet"
        pile[0].style.display ="block"
        pile[1].style.display ="block"
    }
}
const startforfra1 = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    scoreresult.style.display="none"
    frontpage.style.display="block"
    point = 0
    tillyke.innerHTML ="Tillykke "+ "du "+ "har "+ "gennemført "+ "quizzen"
}


startknap.addEventListener("click", buttonclick);
right.addEventListener("click", rightclick);
buttons.forEach(element => {
    element.addEventListener("click", function() {
        rightclick(this)
    })
});
toscore1.addEventListener("click", toscore1a)
toscore2.addEventListener("click", toscore2b)
startforfra.addEventListener("click", startforfra1)