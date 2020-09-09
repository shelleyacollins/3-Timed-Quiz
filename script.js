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
submitButton.addEventListener('click', showResults);

const quizQuestions = [
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
myQuestions.forEach(
    (currentQuestion, questionNumber) => {
        
    const answers = [];
    for(number in quizQuestions.answers){

        answers.push(
            `<quizAnswers>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
// for each question...
myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(number in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}      }