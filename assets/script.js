$(document).ready(function() {
    console.log(questions);

    $("#start-quiz").on("click", function() {
        // Hide the welcome screen
        $("#welcome-screen").attr("style", "display: none"); // Start the timer
        //Show the first question.
        var questionDiv = $("#question");

        var h1El = $("<h1>");
        h1El.text("Arrays in JavaScript can be used to store _____.")

        var buttonEl = $("<button" > );
        buttonEl.addClass("btn btn-secondary");
        btn.text("2");
        questionDiv.append(h1El);

        alert("Start the Quiz!");
    });
});