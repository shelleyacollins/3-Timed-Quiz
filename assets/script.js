$(document).ready(function() {
            var questionDiv = $("#question");
            var correctIndicatorEl = $("#correct-indicator");
            var currentQuestionIndex = 0;
            var timeRemaining = 90;
            var timeInterval;

            function displayQuestion() {
                questionDiv.empty();
                var h1El = $("<h1>");
                h1El.text(questions[currentQuestionIndex].title);
                h1El.text("Arrays in JavaScript can be used to store _____.");
                questionDiv.append(h1El);
                var ulEl = $("<ul>");

                for (var i = 0; i < questions[0].choices.length; i++) {
                    var liEl = $("<li>");
                    var buttonEl = $("<button");
                    buttonEl.addClass("btn btn-secondary");
                    buttonEl.text(questions[currentQuestionIndex].choices[i]);
                    liEl.append(buttonEl);
                    ulEl.append(liEl);
                }
                questionDiv.append(ulEl);
                // Hide the welcome screen
                $("#start-quiz").on("click", function() {

                    $("#welcome-screen").attr("style", "display: none");

                    displayQuestion(); // Start the timer
                    //Show the first question.






                });
            });