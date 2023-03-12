var quizContainer = document.getElementById('quiz');
var resultContaioner = document.getElementById('result');
var submitButton = document.getElementById('submit')
var myQuestions = [
    {
        question:"1. what is the name of the 1 mana, mana rock that is a stable in commander?",
        answers: {
            a: "Sol ring",
            b: "Arcane Signet",
            c: "Commander's Sphere",
            d: "Mana Crypt"

        },
        correctAnswer: 'a'
    },
    {
        question:"2. What is the name of the 4 angel sisters of innistrad?",
        answers: {
            a: "Akroma, Atraxa, Aurelia and Avacyn",
            b: "Gisela, Bruna, Sigarda and Avacyn",
            c: "Gisela, Bruna, Sigarda and Liesa",
            d: "Bruna, Anya, Lyra and Giada"

        },
        correctAnswer: 'b'
    },
    {
        question:"3. What are the colors of the Boros Legion?",
        answers: {
            a: "Black and Green",
            b: "Red and white",
            c: "Green and blue",
            d: "Blue and white"
        },
        correctAnswer: 'b'
    },
    {
        question:"4. What is the name of the plane where the eldrazi were sealed away originally?",
        answers: {
            a: "Innistrad",
            b: "Ravnica",
            c: "Amonkhet",
            d: "Zendikar"

        },
        correctAnswer: 'd'
    },
    {
        question:"5. how where the shards of alara formed?",
        answers: {
            a: "A planeswalker draining alara of its mana.",
            b: "The eldrazi feeding off the alara,s mana",
            c: "A massive war that ruptured the plane.",
            d: "The people displeasing the gods."
        },
        correctAnswer: 'a'
    }
]


function generateQuiz(myQuestions, quizContainer, resultContaioner, submitButton){
console.log(myQuestions)
    function showQuestions(questions, quizContainer){
        var output = [];
        var answers

        for(var i=0; i<myQuestions.length; i++){

            answers = []

            for(letter in myQuestions[i].answers){

                answers.push(
                    '<lable>'
                        + '<input type="radio" name="question' +i+'"value='+letter+'">'
                        + letter +': '
                        + questions[i].answers[letter]
                    +'</lable>'
                );
            }

            output.push(
                `<div class="question"> ${questions[i].question} </div>`
                + `<div class="answers"> ${answers.join('')} </div>`
            );
        }

        quizContainer.innerHTML = output.join('')
    }

    function showResults(myQuestions, quizContainer, resultContaioner){

        var answersContainer = quizContainer.quuerySelectorAll('.answers');

        var userAnswer ='';
        var numCorrect= 0;

        for(var i=0; i<myQuestions.lenght; i++){
            userAnswer = (answersContainer[i].quuerySelector('input[name=question' + i +']:checked')||{}).value;

            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
                answersContainer[i].style.color = 'lightgreen';
            } else {
                answersContainer[i].style.color = 'red';
            }
        }
        resultContaioner.innerHTML = `${numCorrect} out of ${questions}`
    }

    showQuestions(myQuestions, quizContainer);

    submitButton.onclick = function(){
        showResults(myQuestions, quizContainer, resultContaioner);
    }

}

generateQuiz(myQuestions, quizContainer, resultContaioner, submitButton)

