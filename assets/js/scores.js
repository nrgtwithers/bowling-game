//  $( document ).ready()
$(function () {
    console.log("ready!");
});

var frames = 10;
var rolls = 2;
var scores= 0;
var val = [];
// function to add scores

function gameScores(val) {
    // Button functioning / testing
    $("#pin-0").click(function () {
        console.log(`Gutterball, bummer!`);
        // add value
        var val = 0;
        var zero = $(".pinsHit").text(val);
    })
    $("#pin-1").click(function () {
        console.log(`1`);
        // add value
        var val = 1;
        var one = $(".pinsHit").text(val);
    })
    $("#pin-2").click(function () {
        console.log(`2`);
        // add value
        var val = 2;
        var two = $(".pinsHit").text(val);
    })
    $("#pin-3").click(function () {
        console.log(`3`);
        // add value
        var val = 3;
        var three = $(".pinsHit").text(val);
    })
    $("#pin-4").click(function () {
        console.log(`4`);
        // add value
        var val = 4;
        var four = $(".pinsHit").text(val);
    })
    $("#pin-5").click(function () {
        console.log(`5`);
        // add value
        var val = 5;
        var five = $(".pinsHit").text(val);
    })
    $("#pin-6").click(function () {
        console.log(`6`);
        // add value
        var val = 6;
        var six = $(".pinsHit").text(val);
    })
    $("#pin-7").click(function () {
        console.log(`7`);
        // add value
        var val = 7;
        var seven = $(".pinsHit").text(val);
    })
    $("#pin-8").click(function () {
        console.log(`8`);
        // add value
        var val = 8;
        var eight = $(".pinsHit").text(val);
    
    })
    $("#pin-9").click(function () {
        console.log(`9`);
        // add value
        var val = 9;
        var nine = $(".pinsHit").text(val);
    })
    $("#pin-10").click(function () {
        console.log(`STRIKE!`);
        // add value
        var strike = 10 + 10 + 10;
        var ten = $(".pinsHit").text(strike);
    })

// formula

var scores = val + val

}
gameScores();

// Totals User Input Frames Scores
// function totalScores(scores) {
//     $('#total').empty('');
//     $('#total').text(scores)
// }

// totalScores();


// Reset
$("#reset").click(function () {
    console.log('reset')
    $('.pinsHit').empty('');
    $('.pinScore').empty('');
    $('#total').empty('');
})
