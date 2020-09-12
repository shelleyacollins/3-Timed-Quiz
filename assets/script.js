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
                questionDiv.append(h1El);
                var ulEl = $("<ul>");

                for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
                    var liEl = $("<li>");
                    var buttonEl = $("<button>");
                    buttonEl.addClass("btn btn-secondary answer");
                    buttonEl.text(questions[currentQuestionIndex].choices[i]);
                    buttonEl.attr("data-choice", questions[currentQuestionIndex].choices[i]);
                    liEl.append(buttonEl);
                    ulEl.append(liEl);
                }

                questionDiv.append(ulEl);

                function setAndClearIndicator(text) {
                    correctIndicatorEl.text(text);
                    setTimeout(function() {
                        correctIndicatorEl.text("");
                    }, 1000);


                    $("#start-game").on("click", function() {
                        $("#welcome-screen").attr("style", "display: none");
                        timeInterval = setInterval(function() {
                            $("#time-remaining").text(timeRemaining);
                            timeRemaining--;
                        }, 1000);

                        // Hide the welcome screen
                        $("#start-quiz").on("click", function() {

                            $("#welcome-screen").attr("style", "display: none");

                            displayQuestion(); // Start the timer
                            //Show the first question.






                        });
                    });