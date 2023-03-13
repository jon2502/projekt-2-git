var quizContainer = document.getElementById('quiz');
var resultContaioner = document.getElementById('results');
var submitButton = document.getElementById('submit')
var questions = [
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


generateQuiz(questions, quizContainer, resultContaioner, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for(var i=0; i<questions.length; i++){
      
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for(letter in questions[i].answers){

        // ...add an html radio button
        answers.push(
          `<label>`
            + `<input type="radio" name="question${i}" value="${letter}">`
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${questions[i].question} </div>`
        + `<div class="answers"> ${answers.join('')} </div>`
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;
    
    // for each question...
    for(var i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      // if answer is correct
      if(userAnswer===questions[i].correctAnswer){
        console.log(userAnswer)
        // add to the number of correct answers
        numCorrect++;
        
        // color the answers green
        answerContainers[i].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[i].style.color = 'red';
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`
  }

  // show questions right away
  showQuestions(questions, quizContainer);
  
  // on submit, show results
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}