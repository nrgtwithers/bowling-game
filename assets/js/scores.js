var inputButton = [];
var frameTotals = [];
var finalPins = [0];

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
            $('#frameTwo').text(frameTotals[0] + frameTotals[1]);
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
            $('#frameThree').text(frameTotals[0] + frameTotals[1] + frameTotals[2]);
        } else {
            if($('#seventhRoll').text() === ''){
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
            $('#frameFour').text(frameTotals[0] + frameTotals[1] + frameTotals[2] + frameTotals[3]);
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
            $('#frameFive').text(frameTotals[0] + frameTotals[1] + frameTotals[2] + frameTotals[3] + frameTotals[4]);
        } else {
            if($('#eleventhRoll').text() === ''){
                $('#eleventhRoll').text(value);
            } else if ($('#twelfthRoll').text() === '') {
                $('#twelfthRoll').text(value);
            }
        }
    }
    if ($('#eleventhRoll').text() !== '' && $('#twelfthRoll').text() !== '') {
        if ($('#frameSix').text() === '') {
            $('#frameSix').text(total);
            frameTotals.push(total);
            inputButton = [];
            $('#frameSix').text(frameTotals[0] + frameTotals[1] + frameTotals[2] + frameTotals[3] + frameTotals[4] + frameTotals[5]);
        } else {
            if($('#thirteenthRoll').text() === ''){
                $('#thirteenthRoll').text(value);
            } else if ($('#fourteenthRoll').text() === '') {
                $('#fourteenthRoll').text(value);
            }
        }
    }
    if ($('#thirteenthRoll').text() !== '' && $('#fourteenthRoll').text() !== '') {
        if ($('#frameSeven').text() === '') {
            $('#frameSeven').text(total);
            frameTotals.push(total);
            inputButton = [];
            $('#frameSeven').text(frameTotals[0] + frameTotals[1] + frameTotals[2] + frameTotals[3] + frameTotals[4] + frameTotals[5] + frameTotals[6]);
        } else {
            if($('#fifteenthRoll').text() === ''){
                $('#fifteenthRoll').text(value);
            } else if ($('#sixteenthRoll').text() === '') {
                $('#sixteenthRoll').text(value);
            }
        }
    }
    if ($('#fifteenthRoll').text() !== '' && $('#sixteenthRoll').text() !== '') {
        if ($('#frameEight').text() === '') {
            $('#frameEight').text(total);
            frameTotals.push(total);
            inputButton = [];
            $('#frameEight').text(frameTotals[0] + frameTotals[1] + frameTotals[2] + frameTotals[3] + frameTotals[4] + frameTotals[5] + frameTotals[6] + frameTotals[7]);
        } else {
            if($('#seventeenthRoll').text() === ''){
                $('#seventeenthRoll').text(value);
            } else if ($('#eighteenthRoll').text() === '') {
                $('#eighteenthRoll').text(value);
            }
        }
    }
    if ($('#seventeenthRoll').text() !== '' && $('#eighteenthRoll').text() !== '') {
        if ($('#frameNine').text() === '') {
            $('#frameNine').text(total);
            frameTotals.push(total);
            inputButton = [];
            $('#frameNine').text(frameTotals[0] + frameTotals[1] + frameTotals[2] + frameTotals[3] + frameTotals[4] + frameTotals[5] + frameTotals[6] + frameTotals[7] + frameTotals[8]);
        } else {
            if($('#nineteenthRoll').text() === ''){
                $('#nineteenthRoll').text(value);
            } else if ($('#twentiethRoll').text() === '') {
                $('#twentiethRoll').text(value);
            } else if($('#twenty-firstRoll').text() === ''){
                $('#twenty-firstRoll').text(value)
            }
        }
    }

    var finalTotal = finalScore(inputButton);


    if ($('#nineteenthRoll').text() !== '' && $('#twentiethRoll').text() !== '' && $('#twenty-firstRoll').text() !== '') {
        if ($('#frameTen').text() === '') {
            $('#frameTen').text(finalTotal);
            finalPins.push(finalTotal);
            inputButton = [];
            console.log("total is "+ finalTotal)
            $('#frameTen').text(frameTotals[0] + frameTotals[1] + frameTotals[2] + frameTotals[3] + frameTotals[4] + frameTotals[5] + frameTotals[6] + frameTotals[7] + frameTotals[8] + finalTotal);
        } 
        
    }
})
    
// Verify Strike
// Verify Spare



// Totaling score
function totalScore(arr) {
    return arr.reduce(function (a, b) {
        return a + b;
    })
}

function finalScore(arr){
    return arr.reduce(function(d,e){
        return d + e;
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
