import { Player } from "./player.js";
import { Dice } from "./dice.js";
// import { playerName } from "./menu.js";

const socket = io("http://localhost:3200");

const username = localStorage.getItem("username");

socket.on("connect", () => {
        console.log("Conected:", username);
        socket.emit("joinGame", username);
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
    socket.emit("startCheck");
});

socket.on("diceResult", ({playerId, result, position}) => {
    if (playerId === socket.id) {

        gamingDice.innerHTML = "";
        dice.createDice(result);

        player1.move(result);

        console.log(`Player ${username} rolled dice: ${result}`);
        console.log(player1);
    }
});

socket.on("startTrue", ({playerId, lapsOld, lapsNew, bank, debt}) => {
    if (playerId === socket.id) {

        player1.lapsOld = lapsOld;
        player1.lapsNew = lapsNew;
        player1.bank = bank;
        player1.debt = debt;

        playerBankCounter.textContent = `BALANCE: ${player1.bank}$`;

        console.log(`Player ${username} claimed for start: 10000$`);
    }
});

socket.on("buyingFalse", () => {

});

socket.on("buyingTrue", () => {
    
});

socket.on("disconnect", () => {
    console.log("Disconnected", username);
    // socket.emit("disconnect", username);
});

export { player1 }