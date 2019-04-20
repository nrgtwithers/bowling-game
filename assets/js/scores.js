//  $( document ).ready()
$(function () {
    console.log("ready!");
});

var frames = 10;
var rolls = 2;
var scores;

var gutter = 0;
var strike = 10 + 10 + 10;
var spare;

// function to add scores

function gameScores() {
    // Button functioning / testing
    $("#pin-0").click(function () {
        console.log(`Gutterball, bummer!`)
    })
    $("#pin-1").click(function () {
        console.log(`1`)
    })
    $("#pin-2").click(function () {
        console.log(`2`)
    })
    $("#pin-3").click(function () {
        console.log(`3`)
    })
    $("#pin-4").click(function () {
        console.log(`4`)
    })
    $("#pin-5").click(function () {
        console.log(`5`)
    })
    $("#pin-6").click(function () {
        console.log(`6`)
    })
    $("#pin-7").click(function () {
        console.log(`7`)
    })
    $("#pin-8").click(function () {
        console.log(`8`)
    })
    $("#pin-9").click(function () {
        console.log(`9`)
    })
    $("#pin-10").click(function () {
        console.log(`STRIKE!`)
    })
}
gameScores();

// Totals User Input Frames Scores
function totalScores() {

}

totalScores();


// Reset
$("#reset").click(function () {
    console.log('reset')
    $('.pinsHit').empty('');
    $('.pinScore').empty('');
    $('#total').empty('');
})
