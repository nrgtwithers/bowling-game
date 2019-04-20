// GAME
// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );
});

var frames = 10;
var rolls = 2;
var scores;

var gutter = 0;
var strike = 10 + 10 + 10;
var spare;

// function to add scores

// function gameScores(){
    
// }

// gameScores();

// Totals User Input Frames Scores
function totalScores(){

}

totalScores();


// Reset
$("#reset").click(function () {
    // $(this).hide()
    console.log('reset')
    // location.reload();
    $('.pinsHit').empty('');
    $('.pinScore').empty('');
    $('#total').empty('');
})
