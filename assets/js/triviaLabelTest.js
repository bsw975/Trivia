//Questions: Do I do a single 30s timeout, or 30 1s timeouts?
// FLOW:
// 1) display question, start timer
// 2) on buttonpress, cleartimer
// ---evaluate

// VARIABLES:
var qaPairs = [{ q: "What is 2+2 in '1984'?", correct: 5, wrong1: 4, wrong2: 22, wrong3: 2 }, { q: "Who wrote The Cat in the Hat?", correct: "Dr. Seuss", wrong1: "Ted Gauss", wrong2: "Roald Dahl", wrong3: "Adam Smith" }];
var numRight = 0;
var numWrong = 0;
var questionNum = 0;
var start = $("#start");
var clockRunning = false;
// Timers:
var qCountdown = setTimeout // questionCountdown
var randomArray = [1, 0];
// answerCountdown

// FUNCTIONS:
// evaluate: if right - congrats window, timer, display, four seconds
//             if wrong - sorry window w/ right answer, ", ", four seconds
// timesUp: display timeout, show answer (same window?), four seconds
// gameDone: show correct, incorrect, and restart (dynamically create button?)

//Thursday night:
//name variables. show / countdown one timer

//Friday:
//How to pseudocode JS/HTML/CSS
//How to dynamically style using JS (display = visible)
//whether to show/hide, or create/destroy the answer div?
window.onload = function() {
    $("#start").on("click", timer.start);
}

var timer = {
    time: 30,
    reset: function () {
        timer.time = 0;
        // DONE: Change the "time-remaining" div to "00:30."
        $("#time-remaining").text("00:30");
    },
    start: function () {
        $("#current-question").text(qaPairs[randomArray[questionNum]].q);
        // $('label[for=a1]').html(qaPairs[randomArray[questionNum]].wrong1); //working
        // $('label[for=a2]').html(qaPairs[randomArray[questionNum]].wrong2); //working
        // $('label[for=a3]').html(qaPairs[randomArray[questionNum]].wrong3); //working
        // $('label[for=a4]').html(qaPairs[randomArray[questionNum]].correct); //working
        $("#one").empty("foo"); //
        $("#one").html("bar"); //

        // DONE: Use setInterval to start the count here and set the clock to running.
        if (!clockRunning) {
            intervalId = setInterval(timer.count, 1000);
            clockRunning = true; //waiting on the user to guess now!
        }
    },
    stop: function () {
        // DONE: Use clearInterval to stop the count here and set the clock to not be running.
        clearInterval(intervalId);
        clockRunning = false;
    },
    count: function () {
        // DONE: decrement time by 1, remember we cant use "this" here.
        timer.time--;
        // DONE: Use the variable we just created to show the converted time in the "display" div.
        $("#time-remaining").text(timer.time);
    },
}; //end object