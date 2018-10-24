
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;

var targetNumber = 55;


function getRandom (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
targetNumber = getRandom(19, 120);
$(".random-number-to-match").text(targetNumber);

var numberOptions = [20, 5, 3, 7];

$(".jewel").each(function(i, el) {
    $(el).attr('data-crystalvalue', numberOptions[i])
})

$(".jewel").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter1 += crystalValue;

    alert("Your new score is: " + counter1);

    if (counter1 === targetNumber) {
        alert("You win!");
    }

    else if (counter1 >= targetNumber) {
        alert("You lose!");
    }

});

