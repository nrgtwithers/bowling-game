var inputButton = [];
var frameTotals = [];
// function to add scores


$('.btn').click(function () {
    const value = Number($(this).text());
    console.log(value);
    inputButton.push(value);

    var total = totalScore(inputButton);
    if (total < 11) {

        if ($('#firstRoll').text() === '') {
            $('#firstRoll').text(value);
        } else {
            if ($('#secondRoll').text() ===''){
                $('#secondRoll').text(value);
            }
        }
    } else {
        alert('Frame must equal 10 or less.')

    }

    if ($('#firstRoll').text() !== '' && $('#secondRoll').text() !== '') {
        console.log('hey')
        console.log(total)
        if ($('#frameOne').text() === '') {
            $('#frameOne').text(total);
            frameTotals.push(total);
            inputButton = [];
            $('#frameOne').text(frameTotals[0]);
        } else {
            if($('#thirdRoll').text() === ''){
                $('#thirdRoll').text(value);
            } else if ($('#secondRoll').text()) {
                $('#fourthRoll').text(value);
            }
        }

    }

    if ($('#thirdRoll').text() !== '' && $('#fourthRoll').text() !== '') {
        console.log('hey')
        console.log(total)
        if ($('#frameTwo').text() === '') {
            $('#frameTwo').text(total);
            frameTotals.push(total);
            inputButton = [];
            $('#frameTwo').text(frameTotals[1]);
        }
    }
})
    

// Totaling score
function totalScore(arr) {
    return arr.reduce(function (a, b) {
        return a + b;
    })
}


// Reset / Start a new ScoreCard
function reset() {
    $("#reset").click(function () {
        console.log('reset')
        $('.pinsHit').empty('');
        $('.pinScore').empty('');
        $('#total').empty('');
    })
}

