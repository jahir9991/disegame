var player = 1;

var winningScore = 20;

var p1winningCount = 0;
var p2winningCount = 0;

var player1Dom;
var player2Dom;

var player1NameDom;
var player2NameDom;

var playGround;
var playGroundDom;


var player1Score;
var player1ScoreDom;

var player1Current;
var player1CurrentDom;

var player2Score;
var player2ScoreDom;

var player2Current;
var player2CurrentDom;

var player1EditBtn;
var player2EditBtn;

var p1winsDom;
var p2winsDom;

var loaderDom;
var canvasDom;

var checkWin = function () {
    if (player1Score >= winningScore) {
        alert("Player 1 Wins!!")
        winsCountp1();
        reStart();
    } else if (player2Score >= winningScore) {
        alert("Player 2 Wins!!")
        winsCountp2();
        reStart();
    }
}

function reStart() {
    player1ScoreDom.innerHTML = 0;
    player2ScoreDom.innerHTML = 0;
    player == 1;
    playGroundDom.innerHTML = '-';
    window.onload();
}




window.onload = function () {
    loaderDom = document.getElementById('loader');
    canvasDom = document.getElementById('myCanvas');

    playGroundDom = document.getElementById('playGround');

    player1Dom = document.getElementById('player1');
    player2Dom = document.getElementById('player2');


    player1NameDom = document.getElementById('player1Name');
    player2NameDom = document.getElementById('player2Name');

    result1Dom = document.getElementById('result1');
    result2Dom = document.getElementById('result2')

    player1Score = 0;
    player1ScoreDom = document.getElementById('score');


    player1Current = 0;
    player1CurrentDom = document.getElementById('current');


    // player 2
    player2Score = 0;
    player2Current = 0;

    player2ScoreDom = document.getElementById('score2');
    player2CurrentDom = document.getElementById('current2');


    player1EditBtn = document.getElementById('player1EditBtn');
    player2EditBtn = document.getElementById('player2EditBtn');



    player1EditBtn.onclick = player1Edit;
    player2EditBtn.onclick = player2Edit;

    p1winsDom = document.getElementById('player1wins');
    p2winsDom = document.getElementById('player2wins');



};


function hit() {


    var randomNumber = Math.floor(Math.random() * 5 + 1);
    playGroundDom.innerHTML = randomNumber;

    resetCanvas();

    setTimeout(() => {
        loaderDom.style.display = 'none';
        canvasDom.style.display = 'block'
        drawDice(randomNumber);
        calculate(randomNumber);

    }, 1000);





}

function hold() {
    if (player == 1) {

        player1Dom.classList.remove("bg-success")

        player2Dom.className += "bg-success";

        player1Score = player1Score + player1Current;
        player1ScoreDom.innerHTML = player1Score;

        player1Current = 0;
        player1CurrentDom.innerHTML = player1Current;

        checkWin();
        player = 2;

    } else {
        player2Dom.classList.remove("bg-success")
        player1Dom.className += " bg-success";


        player2Score = player2Score + player2Current;
        player2ScoreDom.innerHTML = player2Score;

        player2Current = 0;
        player2CurrentDom.innerHTML = player2Current;

        checkWin();
        player = 1;
    }
}


function calculate(randomNumber) {
    if (player == 1) {
        if (randomNumber != 1) {
            player1Current = player1Current + randomNumber;
            player1CurrentDom.innerHTML = player1Current;
        }
        else {

            player1Dom.classList.remove("bg-success")
            player2Dom.className += " bg-success";


            player1Current = 0;
            player1CurrentDom.innerHTML = player1Current;

            player = 2;

            alert("Your chance is over!");

        }

    } else {
        if (randomNumber != 1) {
            player2Current = player2Current + randomNumber;
            player2CurrentDom.innerHTML = player2Current;
        }
        else {
            player2Current = 0;
            player2CurrentDom.innerHTML = player2Current;
            alert("Your chance is over!");
            player = 1;

            player2Dom.classList.remove("bg-success")
            player1Dom.className += " bg-success";

        }
    }
}

function player1Edit() {
    var person = prompt("Please enter your name", "i.e:John");
    if (person != null) {
        player1NameDom.innerHTML = person;
    }
}

function player2Edit() {
    var person = prompt("Please enter your name", "i.e:John");
    if (person != null) {
        player2NameDom.innerHTML = person;
    }
}

function winsCountp1() {
    p1winningCount++;
    p1winsDom.innerHTML = p1winningCount;

}

function winsCountp2() {
    p2winningCount++;
    p2winsDom.innerHTML = p2winningCount;
}