//TODO
//sudocode, then  compare result to plan
//then code improvements, try to implement
// then sudocode the ideal flow / format

//Better layout
//hide Play button
//animate on win / loss
//hide wrong answer when choosing correct
//strikethru wrong answer when showing correct
//

// 1) sudocode at bottom
// 2) Questions! look for q: in both places!
// TODO
// sudo coding is thinking about which functions to use, how to create / breakdown the logic of element manipulation
// Questions-urgent important
//      q: Do I do a single 30s timeout, or 30 1s timeouts?
//      q: create div labels - how?
// Questions-urgent important
//      q: what calls timer.count again? The first one comes after pressing start button, 
//      q: When to use
//            (window.onload = function () {, which we do below, vs. })
//            $(document).ready(function() {, which is on a tutorialrepublic jquery get-selected radio button webpage
//      q: how to make clickable radio button labels

// TODO - Priority
//      *write 2nd questions
// TODO - later - 
// FLOW:
// 1) display question, start timer
// 2) on buttonpress, cleartimer
// ---evaluate

//=========================================================================================================================================================================================VARIABLES:======================================================================================================================================================================================================================
var qaPairs = [{ q: "What is 2+2 in George Orwell's <i>1984</i>?", right: 5, wrong1: 4, wrong2: 22, wrong3: 2 },
{ q: "Who wrote The Cat in the Hat?", right: "Dr. Seuss", wrong1: "Ted Gauss", wrong2: "Roald Dahl", wrong3: "Adam Smith" },
{ q: "What is the square root of 49?", right: 7, wrong1: 4, wrong2: 22, wrong3: 2 },
{ q: "When was the Magna Carta signed?", right: "1215", wrong1: "1642", wrong2: "1066", wrong3: "1941" },
{ q: "Bill Gates allegedly said how much memory 'ought to be enough for anyone?'", right: "640 Kilobytes", wrong1: "2 bits", wrong2: "500 Megabytes", wrong3: "1.21 Gigawatts" },
{ q: "What is LeBron James' NBA finals record (as of 7/2018?", right: "3 wins, 6 losses", wrong1: "5 wins, 2 losses", wrong2: "2 wins, 3 losses", wrong3: "1 win, 6 losses" }];
var randomArray = [2, 0, 1, 3, 5, 4];
var numRight = 0;
var numWrong = 0;
var questionNum = 0;
var answerInThisManySeconds = 8;
var showAnswerForThisManySeconds = 4;
var intervalId;
var answerInterval;
var start = $("#start"); // do I need this variable?
var clockRunning = false;
// Timers:
var qCountdown = setTimeout; // questionCountdown
var answerValue = "Answer4";  // answerValue is the label of where the CORRECT answer is
// answerCountdown


//=========================================================================================================================================================================================FUNCTIONS======================================================================================================================================================================================================================
window.onload = function () {
    $("#start-button").on("click", timer.start);
    $("#submit-button").hide();
    $("input[type='button']").click(function () {
        var userAnswer = $("input[name='user-choice']:checked").val();
        // console.log("Called from user-button click" + userAnswer);
        if (userAnswer == answerValue) {
            showAnswer(true); //pass correctAnswer = true into showAnswer
        } else {
            showAnswer(false); //pass correctAnswer = false into showAnswer
        } //end if else
    }); //end input click function & argument
} //end window.onload

function showAnswer(correctAnswer) { //called for right or wrong answer
    // $("#qa-form").empty(); // these two lines empty game div below time-s up
    timer.stop(); // TO DO - remember & learn when to use & not use ()s for functions. Maybe b/c Here it's not obvious THAT A FUnction is being called. A function can return a variable. For setInterval(FUNCTION, it is.)
    if (correctAnswer == true) {
        $("#answer").text("Right, the answer is " + qaPairs[randomArray[questionNum]].right);
        numRight++;
        $("#win-count").text("Wins: " + numRight);
    } else {
        $("#answer").text("Sorry! The answer is " + qaPairs[randomArray[questionNum]].right);
        numWrong++;
        $("#loss-count").text("Losses: " + numWrong);
    }
    if (questionNum == qaPairs.length - 1) { //Game over
        $("#time-remaining").text("Game over!!");
        $("#answer").empty();
        $("#qa-form").empty();
        $("#answer-choices").empty();
        $("#current-question").empty();
        $("#submit-button").remove();
        clearInterval(answerInterval);
        timer.stop();
    } else {
        // answerInterval = setInterval(timer.start, showAnswerForThisManySeconds * 1000); //breaks things
        answerInterval = setTimeout(timer.start, 500);
        questionNum++
    }; // get the next question ready to go
    // maybe instead simply remove the wrong1,2,3 labels?
    // how do I instead of replacing the answer-choices div w/ the answer, instead attach a new div
    // Q: the hard part of which is to attach the ID
} // Do this after timer.time == 0

function populateQuestionHTML() {
    console.log("we're in popQuestion function");
    $("#answer-choices").empty();
    var Q1 = $("<input>");
    Q1.attr("type", "radio");
    Q1.attr("name", "user-choice");
    Q1.attr("value", "Answer0");
    Q1.attr("id", "a0")
    Q1.prop("checked", false);
    var Q1label = $("<label>");
    Q1label.attr("for", "a0");
    Q1label.append("<br>");
    $("#answer-choices").append("<br>");
    $("#answer-choices").append(Q1);
    $("#answer-choices").append(Q1label);
    //above, trying label outside of input

    //below, i built label after input
    var Q2 = $("<input>");
    Q2.attr("type", "radio");
    Q2.attr("name", "user-choice");
    Q2.attr("value", "Answer1");
    Q2.attr("id", "a1");
    Q2.prop("checked", false);
    var Q2label = $("<label>");
    Q2label.attr("for", "a1");
    Q2label.append("<br>");
    $("#answer-choices").append("<br>");
    $("#answer-choices").append(Q2);
    $("#answer-choices").append(Q2label);
    console.log("Q2label is " + $("#container").html())
    // console.log($("#answer-choices").html());

    var Q3 = $("<input>");
    Q3.attr("type", "radio");
    Q3.attr("name", "user-choice");
    Q3.attr("value", "Answer2");
    Q3.attr("id", "a2");
    Q3.prop("checked", false);
    var Q3label = $("<label>");
    Q3label.attr("for", "a2");
    Q3label.append("<br>");
    $("#answer-choices").append("<br>");
    $("#answer-choices").append(Q3);
    $("#answer-choices").append(Q3label);
    var Q4 = $("<input>");

    Q4.attr("type", "radio");
    Q4.attr("name", "user-choice");
    Q4.attr("value", "Answer3");
    Q4.attr("id", "a3");
    Q4.prop("checked", false);
    var Q4label = $("<label>");
    Q4label.attr("for", "a3");
    Q4label.append("<br>");
    $("#answer-choices").append("<br>");
    $("#answer-choices").append(Q4);
    $("#answer-choices").append(Q4label);
    $('input[name="user-choice"]').prop('checked', false);
}

//=========================================================================================================================================================================================OBJECT=======================================================================================================================================================================================================================================================
var timer = {
    time: answerInThisManySeconds,
    reset: function () {
        timer.time = 30; // Change the "time-remaining" div to "00:30."
        $("#time-remaining").text("00:30");
    },
    start: function () {
        if (questionNum == 0) {
            $("#start-button").remove();
            $("#submit-button").show();
        }
        $("#answer").text("");
        // clearInterval(answerInterval);
        // console.log("In timer.start:function(), answerInterval is " + answerInterval);
        $("#time-remaining").text("Starting timer...");
        $("#current-question").empty();
        $("#current-question").append(qaPairs[randomArray[questionNum]].q);
        // console.log($("#current-question").html())
        populateQuestionHTML();
        timer.time = answerInThisManySeconds;
        var correctAnswer = Math.floor(Math.random() * 4);
        var wrongNumFromQAPair = 1; //wrong1, wrong2, then wrong3
        var wrong1 = qaPairs[randomArray[questionNum]].wrong1;
        var wrong2 = qaPairs[randomArray[questionNum]].wrong2;
        var wrong3 = qaPairs[randomArray[questionNum]].wrong3;
        for (i = 0; i < 4; i++) { //populate answers in a random order
            var labelValue = "label[for=a" + i + "]";
            if (i == correctAnswer) { //because i goes 0 to 3, but wrong only goes 1 to 3, it's hard
                $(labelValue).text(qaPairs[randomArray[questionNum]].right); // console.log(labelValue)
                answerValue = "Answer" + i; //answerValue is the label of where the CORRECT answer is
            }
            else if (wrongNumFromQAPair == 1) {
                $(labelValue).text(wrong1); //working
                wrongNumFromQAPair++
            }
            else if (wrongNumFromQAPair == 2) {
                $(labelValue).text(wrong2); //working
                wrongNumFromQAPair++
            }
            else if (wrongNumFromQAPair == 3) {
                $(labelValue).text(wrong3); //working
            } else { $("body").remove(); document.write("You broke it") }
        } //end for loop to populate the four answers 
        // console.log("jQuery of curr-ques is " + $("#answer-choices").html())
        // $('label[for=a1]').html(qaPairs[randomArray[questionNum]].wrong1); //working
        // $('label[for=a2]').html(qaPairs[randomArray[questionNum]].wrong2); //working
        // $('label[for=a3]').html(qaPairs[randomArray[questionNum]].wrong3); //working
        $("#one").empty("foo"); // what is this?
        $("#one").html("bar"); // and this?
        // DONE: Use setInterval to start the count here and set the clock to running.
        if (!clockRunning) {
            intervalId = setInterval(timer.count, 1000); // 1000, ms, is for the timer function, timer.time is s
            clockRunning = true; // now waiting on the user to guess!
        } // end if !clockRunning 
    }, //end timer.start
    stop: function () {
        // Use clearInterval to stop the count here and set the clock to not be running.
        clearInterval(intervalId);
        clockRunning = false;
    },
    count: function () {
        timer.time--; // decrement time by 1, remember we cant use "this" here.
        $("#time-remaining").text(timer.time);
        if (timer.time == 0) { // clear qa, write answer
            $("#time-remaining").text("Time's up!!");
            $("#current-question").empty();
            timer.stop();
            showAnswer(false);
        }
    },
}; //end object


// <input type="radio" name="user-choice" value="Answer1">
// <label for="a1">4</label>
// <br>
// <input type="radio" name="user-choice" value="Answer2">
// <label for="a2">22</label>
// <br>
// <input type="radio" name="user-choice" value="Answer3">
// <label for="a3">2</label>
// <br>
// <input type="radio" name="user-choice" value="Answer4">
// <label for="a4">7</label>


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


    // <input type="radio" name="user-choice" value="Answer1">
    // <label for="a1">4</label>
    // <br>
    // <input type="radio" name="user-choice" value="Answer2">
    // <label for="a2">22</label>
    // <br>
    // <input type="radio" name="user-choice" value="Answer3">
    // <label for="a3">2</label>
    // <br>
    // <input type="radio" name="user-choice" value="Answer4">
    // <label for="a4">7</label>