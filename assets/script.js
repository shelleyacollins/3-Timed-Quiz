$(document).ready(function() {
    console.log(questions);

    $("#start-quiz").on("click", function() {
        // Hide the welcome screen
        $("#welcome-screen")
            .attr("style", "display: none"); // Start the timer
        //Show the first question.
        alert("Start the Quiz!");
    });
});