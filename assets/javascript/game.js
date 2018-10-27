
var counter = 0;
var targetNumber = 0;
var wins = 0;
var losses = 0;
var numberOptions = 0;

// Get random number for target number
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Set target number to random and display on screen
function setTargetNumber() {
    targetNumber = getRandom(19, 120);
    $(".random-number-to-match").text(targetNumber);
}

// Create an array of length 4, randomize each item, return value
function setJewelValues() {
    var optionsArray = Array.from({ length: 4 }, () => Math.ceil(Math.random() * 12));
    console.log(optionsArray);
    numberOptions = optionsArray;
}

//Function to display numbers on page
function reset() {
    counter = 0;
    setTargetNumber();
    setJewelValues();
    $(".score-total").text(counter)
    $(".jewel").each(function (i, el) {
        $(el).attr('data-crystalvalue', numberOptions[i])
    });
}

//Start game
reset();

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
    }
    else if (counter >= targetNumber) {
        alert("You lose!");
        losses++;
        $(".losses-counter").text(losses);
        reset();
    }
});

