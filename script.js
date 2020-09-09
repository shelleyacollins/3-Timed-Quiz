<div id="quiz"></div>
<button id="submit">Submit Quiz</button>
<div id="results"></div>

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){
    const output = [];
}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
document.addEventListener('DOMContentLoaded', () {
  const timeLeftDisplay = document.querySelector('#time-left')
  const startBtn = document.querySelector('#start-button')
  timeLeft = 10

  function countDown(){
    setInterval(function(){
      if(timeLeft <= 0 ) {
        clearInterval(timeLeft = 0)
        }                      
        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -=1
    }, 1000)
  }

  startBtn.addEventListener('click', countDown)

})
    


var questions = [
    {
        question :"1. Arrays in JavaScript can be used to store _____.",
        choice1 : "Wrong",
        choice2 : "Wrong",
        choice3 : "Wrong",
        choice4 : "Correct",

   },{

        question : "2. A very useful tool used during development and debugging for printing content to the debugger is called ?",
        choice1 : "Wrong",
        choice2 : "Wrong",
        choice3 : "Wrong",
        choice4 : "Correct",

    },{

        question : "3. String values must be enclosed within _____ when being assigned to variables?",
        choice1 : "Wrong",
        choice2 : "Wrong",
        choice3 : "Correct",
        choice4 : "Wrong",

    },{

        question :"4. Commonly used data types DO NOT include:",
        choice1 : "Wrong",
        choice2 : "Wrong",
        choice3 : "Correct",
        choice4 : "Wrong",

    },{

        question : "5. The condition in an if/else statement is enclosed within_____:",
        choice1 : "Wrong",
        choice2 : "Correct",
        choice3 : "Wrong",
        choice4 : "Wrong",

    }

]