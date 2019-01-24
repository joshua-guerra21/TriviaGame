$(document).ready(function () {      
    var count = 0;
    var time = 31;
    var isSelected = false;
    var ticker;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var question =["In football what is it called when you cross the endzone with the football?", "How many players does an NBA team Start?", "How many college teams make the College Football Playoffs?", 
                    "What is the Baseball Championship called?", "Which sport is considered America's pastime?", "After how many years do they play the Soccer World Cup?",
                    "What is the object placed in the center of the ice at the start of Hockey games?", "What are the color combination for penalties in Soccer?", "What is a common nickname for the physical football?",
                    "What is it the break called in football between the end of the 2nd quarter and the start of 3rd quarter?"];
    var answer = ["Touchdown", "5", "4", "World Series", "Baseball", "4", "Puck", "Yellow and Red", "Pigskin", "Halftime"];
    var firstChoice = ["Homerun", "11", "8", "Super Bowl", "Football", "2", "Puck", "Blue and Red", "Pigskin", "Timeout",];
    var secondChoice = ["Offsides", "5", "2", "NBA Championship", "Soccer", "4", "Hockey Stick", "Green and Yellow", "Hoop", "Halftime",];
    var thirdChoice = ["Touchdown", "9", "12", "World Series", "Baseball", "10 ", "Ball", "Yellow and Red", "Piggie", "Breaktime",];
    var fourthChoice = ["Goal", "10", "4", "World Cup", "Water Polo", "1", "Goal Post", "Yellow and Green", "Ball", "Overtime"];

    function showHolders() {
        $("#question-holder").show();
        $("#choice-holder-1").show();
        $("#choice-holder-2").show();
        $("#choice-holder-3").show();
        $("#choice-holder-4").show();
    }
    function hideHolders() {
        $("#question-holder").hide();
        $("#choice-holder-1").hide();
        $("#choice-holder-2").hide();
        $("#choice-holder-3").hide();
        $("#choice-holder-4").hide();
    }
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }
    function displayQuestion() {
        hideResults();
        $("#answer-holder").hide();
        $("#image-holder").hide();
        $("#time-holder").show();
        showHolders();
        $("#question-holder").html(question[count]);
        $("#choice-holder-1").html(firstChoice[count]);
        $("#choice-holder-2").html(secondChoice[count]);
        $("#choice-holder-3").html(thirdChoice[count]);
        $("#choice-holder-4").html(fourthChoice[count]);

        $("#choice-holder-1").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
        $("#choice-holder-2").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
        $("#choice-holder-3").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
        $("#choice-holder-4").hover(function () {
            $(this).css("color", "gray");
        },
            function () {
                $(this).css("color", "black");
            });
    }
    $("#choice-holder-1").on("click", checkAnswer)
    $("#choice-holder-2").on("click", checkAnswer)
    $("#choice-holder-3").on("click", checkAnswer)
    $("#choice-holder-4").on("click", checkAnswer)

    function checkAnswer() {

        hideHolders();

        if ($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Right! The answer is: " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        }

        checkGameEnd();
    }

    function checkGameEnd() {
        if (count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function () {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 31;
    }

    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);

        if (time <= 0) {
            hideHolders();
            stopTime();
            $("#answer-holder").show();
            $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
            displayImage();
            unanswered++;
            count++;
            checkGameEnd();
        }
    }

    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if (count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();

    function displayImage() {
        if (count === 0) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/question1-touchdown.gif">');
        }
        else if (count === 1) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/question2-NBA starting.gif">');
        }
        else if (count === 2) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/question3-NCAA playoff.gif">');
        }
        else if (count === 3) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/question4-world series.gif">');
        }
        else if (count === 4) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/question5-pasttime.gif">');
        }
        else if (count === 5) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/question6-world cup.gif">');
        }
        else if (count === 6) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/question7-hockey puck.gif">');
        }
        else if (count === 7) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/question8-soccer cards.gif">');
        }
        else if (count === 8) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/question9-pigskin.gif">');
        }
        else if (count === 9) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/question10-halftime.gif">');
        }
    }

    function showResults() {
        $("#correct-holder").show();
        $("#correct-holder").html("Correct: " + correct);
        $("#incorrect-holder").show();
        $("#incorrect-holder").html("Incorrect: " + incorrect);
        $("#unanswered-holder").show();
        $("#unanswered-holder").html("Unanswered: " + unanswered);
        $("#restart-holder").show();
        $("#restart-holder").html("Try again above");
    }
 
    function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }

    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }

    $(".start").on("click", function () {
        startGame();
    });

});