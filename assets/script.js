$(document).ready(function() {
    console.log(questions);

    $("#start-quiz").on("click", function() {
        // Hide the welcome screen
        $("#welcome-screen").attr("style", "display: none"); // Start the timer
        //Show the first question.
        var questionDiv = $("#question");

        var h1El = $("<h1>");
        h1El.text(questions[0].title);
        h1El.text("Arrays in JavaScript can be used to store _____.");
        questionDiv.append(h1El);
        var ulEl = $("<ul>");

        for (var i = 0; i < questions[0].choices; i++) {
            console.log(questions[0].choices[i]);
            var liEl = $("<li>");
            var buttonEl = $("<button");
            buttonEl.addClass("btn btn-secondary");
            buttonEl.text("questions[0].choices[i]");
            liEl.append(buttonEl);
            ulEl.append(liEl);
        }
        questionDiv.append(ulEl);





    });
});