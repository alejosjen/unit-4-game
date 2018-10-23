// Start game
//on click to target jewels

var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var targetNumber = 45;

$(".random-number-to-match").text(targetNumber);

$(".j1").on("click", function () {
    counter1 += 10;
    alert("Your new score is: " + counter1);
    /* if (counter1 === targetNumber) {
        alert("You win!");
    } else if (counter1 >= targetNumber) {
        alert("You lose!");
    } */
//Trying to combine two functions to be able to add counters.    
// This is acting weird. It's counting counter2 multiple times
// after it's been counted already, then the user loses no
// matter what.
    $(".j2").on("click", function () {
        counter2 += 5;
        alert("Your new score is: " + counter2);

        if (counter1 + counter2 === targetNumber) {
            alert("You win!");

        } else if (counter1 + counter2 >= targetNumber) {
            alert("You lose!");
        }
    });

});
$(".j3").on("click", function () {
    counter3++;
    alert("Your new score is: " + counter3)
});
$(".j4").on("click", function () {
    counter4++;
    alert("Your new score is: " + counter4)
});

