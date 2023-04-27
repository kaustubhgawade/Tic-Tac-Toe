// functions to input--------------------------------------------------------------------------------------------- 
let player = 1; //used to change the player
function field1() {
    if (player == 1) {
        document.getElementById("f1").value = "X";
        document.getElementById("f1").disabled = true;
        player = 0;
    } else {
        document.getElementById("f1").value = "O";
        document.getElementById("f1").disabled = true;
        player = 1;
    }
}
function field2() {
    if (player == 1) {
        document.getElementById("f2").value = "X";
        document.getElementById("f2").disabled = true;
        player = 0;
    } else {
        document.getElementById("f2").value = "O";
        document.getElementById("f2").disabled = true;
        player = 1;
    }

}
function field3() {
    if (player == 1) {
        document.getElementById("f3").value = "X";
        document.getElementById("f3").disabled = true;
        player = 0;
    } else {
        document.getElementById("f3").value = "O";
        document.getElementById("f3").disabled = true;
        player = 1;
    }
}
function field4() {
    if (player == 1) {
        document.getElementById("f4").value = "X";
        document.getElementById("f4").disabled = true;
        player = 0;
    } else {
        document.getElementById("f4").value = "O";
        document.getElementById("f4").disabled = true;
        player = 1;
    }
}
function field5() {
    if (player == 1) {
        document.getElementById("f5").value = "X";
        document.getElementById("f5").disabled = true;
        player = 0;
    } else {
        document.getElementById("f5").value = "O";
        document.getElementById("f5").disabled = true;
        player = 1;
    }
}
function field6() {
    if (player == 1) {
        document.getElementById("f6").value = "X";
        document.getElementById("f6").disabled = true;
        player = 0;
    } else {
        document.getElementById("f6").value = "O";
        document.getElementById("f6").disabled = true;
        player = 1;
    }
}
function field7() {
    if (player == 1) {
        document.getElementById("f7").value = "X";
        document.getElementById("f7").disabled = true;
        player = 0;
    } else {
        document.getElementById("f7").value = "O";
        document.getElementById("f7").disabled = true;
        player = 1;
    }
}
function field8() {
    if (player == 1) {
        document.getElementById("f8").value = "X";
        document.getElementById("f8").disabled = true;
        player = 0;
    } else {
        document.getElementById("f8").value = "O";
        document.getElementById("f8").disabled = true;
        player = 1;
    }
}
function field9() {
    if (player == 1) {
        document.getElementById("f9").value = "X";
        document.getElementById("f9").disabled = true;
        player = 0;
    } else {
        document.getElementById("f9").value = "O";
        document.getElementById("f9").disabled = true;
        player = 1;
    }
}


//code to check which player has won or the match has been tie--------------------------------------------------------------------------------
function input() {
    let f1, f2, f3, f4, f5, f6, f7, f8, f9;
    f1 = document.getElementById('f1').value;
    f2 = document.getElementById('f2').value;
    f3 = document.getElementById('f3').value;
    f4 = document.getElementById('f4').value;
    f5 = document.getElementById('f5').value;
    f6 = document.getElementById('f6').value;
    f7 = document.getElementById('f7').value;
    f8 = document.getElementById('f8').value;
    f9 = document.getElementById('f9').value;
    let result = document.getElementById('result');
    
    //checking for X player--------------------------------------------------------------------------------------------------
    if (f1 == 'X' && f2 == 'X' && f3 == 'X') {
        result.value = "Player X has won";
        document.getElementById('f4').disabled = true;
        document.getElementById('f5').disabled = true;
        document.getElementById('f6').disabled = true;
        document.getElementById('f7').disabled = true;
        document.getElementById('f8').disabled = true;
        document.getElementById('f9').disabled = true;
    }
    else if (f1 == 'X' && f4 == 'X' && f7 == 'X') {
        result.value = "Player X has won";
        document.getElementById('f2').disabled = true;
        document.getElementById('f3').disabled = true;
        document.getElementById('f5').disabled = true;
        document.getElementById('f6').disabled = true;
        document.getElementById('f8').disabled = true;
        document.getElementById('f9').disabled = true;
    }
    else if (f7 == 'X' && f8 == 'X' && f9 == 'X') {
        result.value = "Player X has won";
        document.getElementById('f1').disabled = true;
        document.getElementById('f2').disabled = true;
        document.getElementById('f3').disabled = true;
        document.getElementById('f7').disabled = true;
        document.getElementById('f8').disabled = true;
        document.getElementById('f9').disabled = true;
    }
    else if (f3 == 'X' && f6 == 'X' && f9 == 'X') {
        result.value = "Player X has won";
        document.getElementById('f1').disabled = true;
        document.getElementById('f2').disabled = true;
        document.getElementById('f4').disabled = true;
        document.getElementById('f5').disabled = true;
        document.getElementById('f7').disabled = true;
        document.getElementById('f8').disabled = true;
    }
    else if (f1 == 'X' && f5 == 'X' && f9 == 'X') {
        result.value = "Player X has won";
        document.getElementById('f2').disabled = true;
        document.getElementById('f3').disabled = true;
        document.getElementById('f4').disabled = true;
        document.getElementById('f6').disabled = true;
        document.getElementById('f7').disabled = true;
        document.getElementById('f8').disabled = true;
    }
    else if (f3 == 'X' && f5 == 'X' && f7 == 'X') {
        result.value = "Player X has won";
        document.getElementById('f1').disabled = true;
        document.getElementById('f2').disabled = true;
        document.getElementById('f4').disabled = true;
        document.getElementById('f6').disabled = true;
        document.getElementById('f8').disabled = true;
        document.getElementById('f9').disabled = true;
    }
    else if (f2 == 'X' && f5 == 'X' && f8 == 'X') {
        result.value = "Player X has won";
        document.getElementById('f1').disabled = true;
        document.getElementById('f3').disabled = true;
        document.getElementById('f4').disabled = true;
        document.getElementById('f6').disabled = true;
        document.getElementById('f7').disabled = true;
        document.getElementById('f9').disabled = true;
    }
    else if (f4 == 'X' && f5 == 'X' && f6 == 'X') {
        result.value = "Player X has won";
        document.getElementById('f1').disabled = true;
        document.getElementById('f2').disabled = true;
        document.getElementById('f3').disabled = true;
        document.getElementById('f7').disabled = true;
        document.getElementById('f8').disabled = true;
        document.getElementById('f9').disabled = true;
    }

    //checking for X player--------------------------------------------------------------------------------------------------
    else if (f1 == 'O' && f2 == 'O' && f3 == 'O') {
        result.value = "Player O has won";
        document.getElementById('f4').disabled = true;
        document.getElementById('f5').disabled = true;
        document.getElementById('f6').disabled = true;
        document.getElementById('f7').disabled = true;
        document.getElementById('f8').disabled = true;
        document.getElementById('f9').disabled = true;
    }
    else if (f1 == 'O' && f4 == 'O' && f7 == 'O') {
        result.value = "Player O has won";
        document.getElementById('f2').disabled = true;
        document.getElementById('f3').disabled = true;
        document.getElementById('f5').disabled = true;
        document.getElementById('f6').disabled = true;
        document.getElementById('f8').disabled = true;
        document.getElementById('f9').disabled = true;
    }
    else if (f7 == 'O' && f8 == 'O' && f9 == 'O') {
        result.value = "Player O has won";
        document.getElementById('f1').disabled = true;
        document.getElementById('f2').disabled = true;
        document.getElementById('f3').disabled = true;
        document.getElementById('f7').disabled = true;
        document.getElementById('f8').disabled = true;
        document.getElementById('f9').disabled = true;
    }
    else if (f3 == 'O' && f6 == 'O' && f9 == 'O') {
        result.value = "Player O has won";
        document.getElementById('f1').disabled = true;
        document.getElementById('f2').disabled = true;
        document.getElementById('f4').disabled = true;
        document.getElementById('f5').disabled = true;
        document.getElementById('f7').disabled = true;
        document.getElementById('f8').disabled = true;
    }
    else if (f1 == 'O' && f5 == 'O' && f9 == 'O') {
        result.value = "Player O has won";
        document.getElementById('f2').disabled = true;
        document.getElementById('f3').disabled = true;
        document.getElementById('f4').disabled = true;
        document.getElementById('f6').disabled = true;
        document.getElementById('f7').disabled = true;
        document.getElementById('f8').disabled = true;
    }
    else if (f3 == 'O' && f5 == 'O' && f7 == 'O') {
        result.value = "Player O has won";
        document.getElementById('f1').disabled = true;
        document.getElementById('f2').disabled = true;
        document.getElementById('f4').disabled = true;
        document.getElementById('f6').disabled = true;
        document.getElementById('f8').disabled = true;
        document.getElementById('f9').disabled = true;
    }
    else if (f2 == 'O' && f5 == 'O' && f8 == 'O') {
        result.value = "Player O has won";
        document.getElementById('f1').disabled = true;
        document.getElementById('f3').disabled = true;
        document.getElementById('f4').disabled = true;
        document.getElementById('f6').disabled = true;
        document.getElementById('f7').disabled = true;
        document.getElementById('f9').disabled = true;
    }
    else if (f4 == 'O' && f5 == 'O' && f6 == 'O') {
        result.value = "Player O has won";
        document.getElementById('f1').disabled = true;
        document.getElementById('f2').disabled = true;
        document.getElementById('f3').disabled = true;
        document.getElementById('f7').disabled = true;
        document.getElementById('f8').disabled = true;
        document.getElementById('f9').disabled = true;
    }
    
    // match is tie
    else if ((f1 == 'X' || f1 == 'O') && (f2 == 'X' || f2 == 'O') && (f3 == 'X' || f3 == 'O') && (f4 == 'X' || f4 == 'O') && (f5 == 'X' || f5 == 'O') && (f6 == 'X' || f6 == 'O') && (f7 == 'X' || f7 == 'O') && (f8 == 'X' || f8 == 'O') && (f9 == 'X' || f9 == 'O')) {
        result.value = 'Match Tie!!!';
        function reload(){
            location.reload();
        }
        setTimeout(reload,5000)
    }
}


    // reset-button
    let btnReset = document.getElementById('btn-reset');
    function reset() {
        // location.reload();
        let result = document.getElementById('result');
        result.value = 'RESULT';
        document.getElementById('f1').value = '';
        document.getElementById('f2').value = '';
        document.getElementById('f3').value = '';
        document.getElementById('f4').value = '';
        document.getElementById('f5').value = '';
        document.getElementById('f6').value = '';
        document.getElementById('f7').value = '';
        document.getElementById('f8').value = '';
        document.getElementById('f9').value = '';
        document.getElementById('f1').disabled = false;
        document.getElementById('f2').disabled = false;
        document.getElementById('f3').disabled = false;
        document.getElementById('f4').disabled = false;
        document.getElementById('f5').disabled = false;
        document.getElementById('f6').disabled = false;
        document.getElementById('f7').disabled = false;
        document.getElementById('f8').disabled = false;
        document.getElementById('f9').disabled = false;
        player = 1;
    }
