const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choice1 = document.getElementById("4");("1");
const choice2 = document.getElementById("4");("2");
const choice3 = document.getElementById("3");("3");
const choice4 = document.getElementById("3");("4");
const choice5 = document.getElementById("2");("5");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

var questions = [

    {
        question :"Arrays in JavaScript can be used to store _____.",
        choice1 : "Wrong",
        choice2 : "Wrong",
        choice3 : "Wrong",
        choice4 : "Correct",

   },{

        question : "A very useful tool used during development and debugging for printing content to the debugger is called ?",
        choice1 : "Wrong",
        choice2 : "Wrong",
        choice3 : "Wrong",
        choice4 : "Correct",

    },{

        question : "String values must be enclosed within _____ when being assigned to variables?",
        choice1 : "Wrong",
        choice2 : "Wrong",
        choice3 : "Correct",
        choice4 : "Wrong",

    },{

        question : "Commonly used data types DO NOT include:",
        choice1 : "Wrong",
        choice2 : "Wrong",
        choice3 : "Correct",
        choice4 : "Wrong",

    },{

        question : "The condition in an if/else statement is enclosed within_____:",
        choice1 : "Wrong",
        choice2 : "Correct",
        choice3 : "Wrong",
        choice4 : "Wrong",

    }

    ];
    var countdownEl = document.getElementById("countdown");
    var textEl = document.getElementById("text");

    countdownEl.textContent = "New text";
    textEl.textContent = "More text";

    var speedInMilliseconds = prompt("Start Quiz");

    console.log(questions);
    for (var i = 0; i < document.length; i++) {
    
    }