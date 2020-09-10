<div id="quiz"></div>
<button id="submit">Submit Quiz</button>
<div id="results"></div>

// Constants
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// Timer
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

// Quiz Questions and Answers
let questions = [
    {
        question :"Arrays in JavaScript can be used to store _____.",
        choice1 : "<1.numbers and strings",
        choice2 : "<2.other arrays",
        choice3 : "<3.booleans",
        choice4 : "<4.all of the above",
        answer: 4

        if(answer=correct()) {
            showScores();
        }
        else {
            // show question
            var element = document.getElementById("question");
            element.innerHTML = quiz.getQuestionIndex().text;
    },

    {
        question :"A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1 : "<1.JavaScript",
        choice2 : "<2.terminal/bash",
        choice3 : "<3.for loops",
        choice4 : "<4.console log",
        answer: 4
    },
    {
        question :"String values must be enclosed within_____ when being assigned to variables.",
        choice1 : "<1.commas",
        choice2 : "<2.curly brackets",
        choice3 : "<3.quotes",
        choice4 : "<4.parenthesis",
        answer: 3
    },
    {
        question :"Commonly used data types DO NOT include:",
        choice1 : "<1.strings",
        choice2 : "<2.booleans",
        choice3 : "<3.alerts",
        choice4 : "<4.numbers",
        answer: 3
    },
    {
        question :"The condition in an if/else statement is enclosed within _____.",
        choice1 : "<1.quotes",
        choice2 : "<2.curly brackets",
        choice3 : "<3.parenthesis",
        choice4 : "<4.square brackets",
        answer: 2
    },
       
]



