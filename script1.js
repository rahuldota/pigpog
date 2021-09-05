'use strict'

const btnrolldice = document.querySelector('.btn--roll');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const btnHold = document.querySelector('.btn--hold');
const btnnewgame = document.querySelector('.btn--new');
const player0Total = document.querySelector("#score--0");
const player1Total = document.querySelector("#score--1");
const diceE = document.querySelector(".dice");
let p1Score = 0;
let p2Score = 0;
let store = 0;
const rolldice = function () {
    let number = Math.trunc(Math.random() * 6) + 1;
    diceE.classList.remove("hidden");
    diceE.src = `dice-${number}.png`;



    if (store == 0) {
        if (number != 1) {
            p1Score += number;
            //console.log(p1Score);
            if (p1Score >= 20) {
                btnrolldice.classList.add("hidden");
                btnHold.classList.add("hidden");
                diceE.classList.add("hidden");
                player0Total.textContent = p1Score;
                document.querySelector("#current--0").textContent = "winner";

            }
            else {
                document.querySelector("#current--0").textContent = p1Score;
            }
            }
        else {
            p1Score = 0;
            player0Total.textContent = p1Score;
            document.querySelector("#current--0").textContent = p1Score;
            store = 1;
            player0.classList.remove("player--active");
            player1.classList.add("player--active");

        }
    }
    else {
        if (number != 1) {
            p2Score += number;
            if (p2Score >= 20) {
                btnrolldice.classList.add("hidden");
                btnHold.classList.add("hidden");
                diceE.classList.add("hidden");
                player1Total.textContent = p2Score;
                document.querySelector("#current--1").textContent = "winner";

            }
            else {
                document.querySelector("#current--1").textContent = p2Score;
            }
            }
        else {
            p2Score = 0;
            player1Total.textContent = p2Score;
            document.querySelector("#current--1").textContent = p2Score;
            store = 0;
            player1.classList.remove("player--active");
            player0.classList.add("player--active");
        }


    }



}

const Hold = function () {

    if (store == 0) {
        store = 1;
        player0Total.textContent = p1Score;
        player0.classList.remove("player--active");
        player1.classList.add("player--active");

    }
    else {
        store = 0;
        player1Total.textContent = p2Score;
        player1.classList.remove("player--active");
        player0.classList.add("player--active");

    }


}

const newgame = function () {
    diceE.classList.add("hidden");
   player0.classList.add("player--active");
    player1.classList.add("player--active");
    store = 0;
    p1Score = 0;
    p2Score = 0;
    document.querySelector("#current--0").textContent = p1Score;
    document.querySelector("#current--1").textContent = p2Score;
    player0Total.textContent = p1Score;
    player1Total.textContent = p2Score;
    btnHold.classList.remove("hidden");
    btnrolldice.classList.remove("hidden");
    


}







btnrolldice.addEventListener('click', rolldice);
btnHold.addEventListener('click', Hold);
btnnewgame.addEventListener('click', newgame);