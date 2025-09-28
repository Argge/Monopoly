import { Player } from "./player.js";
import { Dice } from "./dice.js";
import { debt } from "./player-position-check.js";

const socket = io("http://localhost:3200");

const playBtn = document.getElementById("playBtn");
let playerName = null;

playBtn.addEventListener("click", () => {
    const usernameInp = document.getElementById("usernameInp").value.trim();

    if (!usernameInp) {
        alert("Set the nickname!");
        return;
    }

    playerName = usernameInp;

});

socket.on("connect", () => {
        console.log("Conected:", playerName);
        socket.emit("joinGame", playerName);
});


const randomBtn = document.getElementById("randomBtn");
const cardsCheckBtn = document.getElementById("cardsCheckBtn");

const dice = new Dice;
let player1 = new Player;
let diceNumber = 0;

randomBtn.addEventListener("click", () => {
    // diceNumber = randomDiceNumber();
    // gamingDice.innerHTML = "";
    // dice.createDice(diceNumber);

    // player1.move(diceNumber);
    // // player1.move(10);

    // if (player1.lapsNew !== player1.lapsOld) {
    //     let playerBankCounter = document.getElementById("playerBankCounter")
    //     const startReward = 10000;

    //     if (player1.debt === 0) {
    //         player1.bank += startReward;
    //         playerBankCounter.textContent = "BALANCE: " + player1.bank + "$";
    //         console.log(player1.lapsNew);
    //         console.log("Player 1: +1000$");
    //     }
    //     else {
    //         player1.debt -= startReward;
    //         if (player1.debt === 0) {
    //             player1.bank += startReward;
    //             playerBankCounter.textContent = "BALANCE: " + player1.bank + "$";
    //             console.log(player1.lapsNew);
    //             console.log("Player 1: +" + startReward + "$");
    //         }
    //         else if (player1.debt < 0) {
    //             player1.bank += player1.debt;
    //             playerBankCounter.textContent = "BALANCE: " + player1.bank + "$";
    //             onsole.log(player1.lapsNew);
    //             console.log("Player 1: +" + player1.debt + "$");
    //             player1.debt = 0;
    //         }
    //     }
        
    // }

    // console.log("Dice number: " + diceNumber);
    // console.log("Player position: " + player1.positionNew);   
    // console.log(player1);

    socket.emit("rollDice");
});

socket.on("diceResult", ({playerId, result, position}) => {
        console.log(`Player ${playerId} rolled dice: ${result}`);
        if (playerId === socket.id) {
            gamingDice.innerHTML = "";
            dice.createDice(result);
            player1.move(result);
        }
});

function randomDiceNumber() {
    let ranNum = Math.floor((Math.random() * (7 - 1)) + 1);
    return ranNum;
}

export { player1 }