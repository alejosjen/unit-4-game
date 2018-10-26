
var counter = 0;
var targetNumber = 0;
var wins = 0;
var losses = 0;

// Get random number from 19-120 and display at .random-number-to-match
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function setTargetNumber() {
    targetNumber = getRandom(19, 120);
    $(".random-number-to-match").text(targetNumber);
}

//Reset
function reset(){
    counter = 0;
    setTargetNumber();
}

function changeCurrentScore(score){
    counter = score;
}

//Start game
reset();

// Create a value for each jewel from the numberOptions array
var numberOptions = [12, 5, 3, 9];

$(".jewel").each(function (i, el) {
    $(el).attr('data-crystalvalue', numberOptions[i])
});

// On click function for each jewel to be assigned a value
// Increase counter with each click
// Alert you win if value of clicks equals the random number
// Alert you lose if value goes over
$(".jewel").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    $(".score-total").text(counter);
    if (counter === targetNumber) {
        alert("You win!");
        wins++;
        $(".wins-counter").text(wins);
        reset();
        $(".score-total").text(counter)
    }
    else if (counter >= targetNumber) {
        alert("You lose!");
        losses++;
        $(".losses-counter").text(losses);
        reset();
        $(".score-total").text(counter)
    }

});

