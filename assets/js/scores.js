var inputButton = [];
var frameTotals = [];
var finalPins = [0];
var spare = 10; // Adds to spare for spare scoring
var strike = 10 + 10; // Adds to become full strike total

// Grabing the values from the button clicked
$('.btn').click(function () {
    const value = Number($(this).text());
    console.log(value);
    inputButton.push(value);

    var total = totalScore(inputButton);
    // Equals to total, cannot exceed 10 to make it a valid frame

    if (total < 11) {

        if ($('#firstRoll').text() === '') {
            if (value === 10) {
                $('#firstRoll').text('-');
                $('#secondRoll').text('X');
                total = total + strike;
            } else {
                $('#firstRoll').text(value);
            }
        } else {
            if ($('#secondRoll').text() === '') {
                if (inputButton[0] + inputButton[1] === 10) {
                    $('#secondRoll').text('/');
                    total = total - inputButton[1] + spare;
                } else if (inputButton[0] + inputButton[1] < 10){
                    $('#secondRoll').text(value);
                } else {
                    $('#warning').text('Frames must equal to 10. Score is not valid if it exceeds 10.')
                }
            }
        }
    }

    // Scoring System

    if ($('#firstRoll').text() !== '' && $('#secondRoll').text() !== '') {
        if ($('#frameOne').text() === '') {
            $('#frameOne').text(total);
            console.log(total)
            frameTotals.push(total);
            inputButton = [];
            $('#frameOne').text(frameTotals[0]);
        } else {
            if ($('#thirdRoll').text() === '') {
                if (value === 10) {
                    $('#thirdRoll').text('-');
                    $('#fourthRoll').text('X');
                    total = total + strike;
                } else {
                    $('#thirdRoll').text(value);
                }
            } else {
                if ($('#fourthRoll').text() === '') {
                    if (inputButton[0] + inputButton[1] === 10) {
                        $('#fourthRoll').text('/');
                        total = total - inputButton[1] + spare;
                    } else if (inputButton[0] + inputButton[1] < 10){
                        $('#fourthRoll').text(value);
                    } else {
                        $('#warning').text('Frames must equal to 10. Score is not valid if it exceeds 10.')
                    }
                }
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
            if ($('#fifthRoll').text() === '') {
                if (value === 10) {
                    $('#fifthRoll').text('-');
                    $('#sixthRoll').text('X');
                    total = total + strike;
                } else {
                    $('#fifthRoll').text(value);
                }
            } else {
                if ($('#sixthRoll').text() === '') {
                    if (inputButton[0] + inputButton[1] === 10) {
                        $('#sixthRoll').text('/');
                        total = total - inputButton[1] + spare;
                    } else if (inputButton[0] + inputButton[1] < 10){
                        $('#sixthRoll').text(value);
                    } else {
                        $('#warning').text('Frames must equal to 10. Score is not valid if it exceeds 10.')
                    }
                }
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
            if ($('#seventhRoll').text() === '') {
                if (value === 10) {
                    $('#seventhRoll').text('-');
                    $('#eighthRoll').text('X');
                    total = total + strike;
                } else {
                    $('#seventhRoll').text(value);
                }
            } else {
                if ($('#eighthRoll').text() === '') {
                    if (inputButton[0] + inputButton[1] === 10) {
                        $('#eighthRoll').text('/');
                        total = total - inputButton[1] + spare;
                    } else if (inputButton[0] + inputButton[1] < 10){
                        $('#eighthRoll').text(value);
                    } else {
                        $('#warning').text('Frames must equal to 10. Score is not valid if it exceeds 10.')
                    }
                }
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
            if ($('#ninthRoll').text() === '') {
                if (value === 10) {
                    $('#ninthRoll').text('-');
                    $('#tenthRoll').text('X');
                    total = total + strike;
                } else {
                    $('#ninthRoll').text(value);
                }
            } else {
                if ($('#tenthRoll').text() === '') {
                    if (inputButton[0] + inputButton[1] === 10) {
                        $('#tenthRoll').text('/');
                        total = total - inputButton[1] + spare;
                    } else if (inputButton[0] + inputButton[1] < 10){
                        $('#tenthRoll').text(value);
                    } else {
                        $('#warning').text('Frames must equal to 10. Score is not valid if it exceeds 10.')
                    }
                }
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
            if ($('#eleventhRoll').text() === '') {
                if (value === 10) {
                    $('#eleventhRoll').text('-');
                    $('#twelfthRoll').text('X');
                    total = total + strike;
                } else {
                    $('#eleventhRoll').text(value);
                }
            } else {
                if ($('#twelfthRoll').text() === '') {
                    if (inputButton[0] + inputButton[1] === 10) {
                        $('#twelfthRoll').text('/');
                        total = total - inputButton[1] + spare;
                    } else if (inputButton[0] + inputButton[1] < 10){
                        $('#twelfthRoll').text(value);
                    } else {
                        $('#warning').text('Frames must equal to 10. Score is not valid if it exceeds 10.')
                    }
                }
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
            if ($('#thirteenthRoll').text() === '') {
                if (value === 10) {
                    $('#thirteenthRoll').text('-');
                    $('#fourteenthRoll').text('X');
                    total = total + strike;
                } else {
                    $('#thirteenthRoll').text(value);
                }
            } else {
                if ($('#fourteenthRoll').text() === '') {
                    if (inputButton[0] + inputButton[1] === 10) {
                        $('#fourteenthRoll').text('/');
                        total = total - inputButton[1] + spare;
                    } else if (inputButton[0] + inputButton[1] < 10){
                        $('#fourteenthRoll').text(value);
                    } else {
                        $('#warning').text('Frames must equal to 10. Score is not valid if it exceeds 10.')
                    }
                }
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
            if ($('#fifteenthRoll').text() === '') {
                if (value === 10) {
                    $('#fifteenthRoll').text('-');
                    $('#sixteenthRoll').text('X');
                    total = total + strike;
                } else {
                    $('#fifteenthRoll').text(value);
                }
            } else {
                if ($('#sixteenthRoll').text() === '') {
                    if (inputButton[0] + inputButton[1] === 10) {
                        $('#sixteenthRoll').text('/');
                        total = total - inputButton[1] + spare;
                    } else if (inputButton[0] + inputButton[1] < 10){
                        $('#sixteenthRoll').text(value);
                    } else {
                        $('#warning').text('Frames must equal to 10. Score is not valid if it exceeds 10.')
                    }
                }
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
            if ($('#seventeenthRoll').text() === '') {
                if (value === 10) {
                    $('#seventeenthRoll').text('-');
                    $('#eighteenthRoll').text('X');
                    total = total + strike;
                } else {
                    $('#seventeenthRoll').text(value);
                }
            } else {
                if ($('#eighteenthRoll').text() === '') {
                    if (inputButton[0] + inputButton[1] === 10) {
                        $('#eighteenthRoll').text('/');
                        total = total - inputButton[1] + spare;
                    } else if (inputButton[0] + inputButton[1] < 10){
                        $('#eighteenthRoll').text(value);
                    } else {
                        $('#warning').text('Frames must equal to 10. Score is not valid if it exceeds 10.')
                    }
                }
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
            if ($('#nineteenthRoll').text() === '') {
                if (value === 10) {
                    $('#nineteenthRoll').text('X');
                    total = total + strike;
                } else {
                    $('#nineteenthRoll').text(value);
                }
            } else if ($('#twentiethRoll').text() === '') {
                if (value === 10) {
                    $('#twentiethRoll').text('X');
                    total = total + strike;
                } else if (inputButton[0] + inputButton[1] === 10) {
                    $('#twentiethRoll').text('/');
                    total = total - inputButton[1] + spare;
                } else if (inputButton[0] + inputButton[1] < 10){
                    $('#twentiethRoll').text(value);
                } else {
                    $('#warning').text('Frames must equal to 10. Score is not valid if it exceeds 10.')
                }
            } else if ($('#twenty-firstRoll').text() === '') {
                if (value === 10) {
                    $('#twenty-firstRoll').text('X');
                    total = total;
                } else {
                    $('#twenty-firstRoll').text(value);
                }
            }
        }
    }



    if ($('#nineteenthRoll').text() !== '' && $('#twentiethRoll').text() !== '' && $('#twenty-firstRoll').text() !== '') {
        if ($('#frameTen').text() === '') {
            $('#frameTen').text(total);
            frameTotals.push(total);
            inputButton = [];
            console.log("total is " + frameTotals)
            // for open frame totals
            $('#frameTen').text(frameTotals[0] + frameTotals[1] + frameTotals[2] + frameTotals[3] + frameTotals[4] + frameTotals[5] + frameTotals[6] + frameTotals[7] + frameTotals[8] + frameTotals[9]);
      
        }

    }
})

// Verify Strike

function verifyStrike() {
    if (total === 10) {
        var strike = 10 + 10 + 10;
        $('.pinsHit').text('X')
        // Change value scores to equate 30
    }
}

// Verify Spare

function verifySpare() {
    if (value + value) {
        var spare = 10 + value;
        $('.pinsHit').text('/')
        // change values to 10 + the pins hit first
    }
}


// Totaling score
function totalScore(arr) {
    return arr.reduce(function (a, b) {
        return a + b;
    })
}

function finalScore(arr) {
    return arr.reduce(function (d, e) {
        return d + e;
    })
}


// Reset / Start a new ScoreCard
function reset() {
    $("#reset").click(function () {
        console.log('reset')
        location.reload();
        // $('.pinsHit').empty('');
        // $('.pinScore').empty('');
        // $('#total').empty('');
    })
}

reset();
