var inputButton = [];
var frameTotals = [];

// Grabing th values from the button clicked
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
        if ($('#frameOne').text() === '') {
            $('#frameOne').text(total);
            frameTotals.push(total);
            inputButton = [];
            $('#frameOne').text(frameTotals[0]);
        } else {
            if($('#thirdRoll').text() === ''){
                $('#thirdRoll').text(value);
            } else if ($('#fourthRoll').text() === '') {
                $('#fourthRoll').text(value);
            }
        }

    }

    if ($('#thirdRoll').text() !== '' && $('#fourthRoll').text() !== '') {

        if ($('#frameTwo').text() === '') {
            $('#frameTwo').text(total);
            frameTotals.push(total);
            inputButton = [];
            $('#frameTwo').text(frameTotals[1]);
        } else {
            if($('#fifthRoll').text() === ''){
                $('#fifthRoll').text(value);
            } else if ($('#sixthRoll').text() === '') {
                $('#sixthRoll').text(value);
            }
        }
    }
    if ($('#fifthRoll').text() !== '' && $('#sixthRoll').text() !== '') {
        if ($('#frameThree').text() === '') {
            $('#frameThree').text(total);
            frameTotals.push(total);
            inputButton = [];
            $('#frameThree').text(frameTotals[2]);
        } else {
            if($('#seveththRoll').text() === ''){
                $('#seventhRoll').text(value);
            } else if ($('#eighthRoll').text() === '') {
                $('#eighthRoll').text(value);
            }
        }
    }

    if ($('#seventhRoll').text() !== '' && $('#eighthRoll').text() !== '') {
        if ($('#frameFour').text() === '') {
            $('#frameFour').text(total);
            frameTotals.push(total);
            inputButton = [];
            $('#frameFour').text(frameTotals[3]);
        } else {
            if($('#ninthRoll').text() === ''){
                $('#ninthRoll').text(value);
            } else if ($('#tenthRoll').text() === '') {
                $('#tenthRoll').text(value);
            }
        }
    }
    if ($('#ninthRoll').text() !== '' && $('#tenthRoll').text() !== '') {
        if ($('#frameFive').text() === '') {
            $('#frameFive').text(total);
            frameTotals.push(total);
            inputButton = [];
            $('#frameFive').text(frameTotals[4]);
        } else {
            if($('#eleventhRoll').text() === ''){
                $('#eleventhRoll').text(value);
            } else if ($('#twelfthRoll').text() === '') {
                $('#twelfthRoll').text(value);
            }
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

reset();
