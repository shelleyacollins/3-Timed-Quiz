const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question :"Arrays in JavaScript can be used to store _____.",
        choice1 : "<1.numbers and strings",
        choice2 : "<2.other arrays",
        choice3 : "<3.booleans",
        choice4 : "<4.all of the above",
        answer: 4
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

// Constants
const MAX_QUESTIONS = 5

startQuiz = () => {
        questionCounter - 0;
        score - 0
        availableQuestions = [...questions];
        console.log(availableQuestions);
        getNewQuestion();
};

getNewQuestion = () => {

    questionCounter++;
}

startQuiz();




















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
    


const questions = [
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