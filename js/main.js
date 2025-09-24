import { Player } from "./player.js";
import { Dice } from "./dice.js";

const randomBtn = document.getElementById("randomBtn");
const cardsCheckBtn = document.getElementById("cardsCheckBtn");
const settingsBtn = document.getElementById("settingsBtn");

let dice = new Dice;
let player1 = new Player;
let diceNumber = 0;
let playerPos = 0;

randomBtn.addEventListener("click", () => {
    diceNumber = randomDiceNumber();
    gamingDice.innerHTML = "";
    dice.createDice(diceNumber);

    playerPos += diceNumber;
    if (playerPos === 41) {
        playerPos = 1;
    }
    else if (playerPos === 42) {
        playerPos = 2;
    }
    else if (playerPos === 43) {
        playerPos = 3;
    }
    else if (playerPos === 44) {
        playerPos = 4;
    }
    else if (playerPos === 45) {
        playerPos = 5;
    }
    else if (playerPos === 46) {
        playerPos = 6;
    }

    player1.move(diceNumber);

    if (player1.lapsNew !== player1.lapsOld) {
        let playerBankCounter = document.getElementById("playerBankCounter")
        const startReward = 1000;

        if (player1.debt === 0) {
            player1.bank += startReward;
            playerBankCounter.textContent = "BALANCE: " + player1.bank + "$";
            console.log(player1.lapsNew);
            console.log("Player 1: +1000$");
        }
        else {
            player1.debt -= startReward;
            if (player1.debt === 0) {
                player1.bank += startReward;
            }
            else if (player1.debt < 0) {
                player1.bank += player1.debt;
                player1.debt = 0;
            }
        }
        
    }

    if (player1.positionNew === 30) {
        player1.move(10);
        player1.move(10);
        playerPos = 10;
        console.log("Player has been moved to Jail");
        if (player1.bank >= 5000) {
            player1.bank -= 5000;
        }
        else if (player1.bank < 5000) {

        }
    }
    else if (player1.positionNew === 10) {
        if (player1.bank >= 5000) {
            player1.bank -= 5000;
        }
        // DEBT LOGIC
        else if (player1.bank < 5000) {
            let debt = 0;
            debt = 5000 - player1.bank;
            player1.debt += debt;
            player1.bank = 0;
        }
    }

    console.log("Dice number: " + diceNumber);
    console.log("Player position: " + playerPos);   
    console.log(player1);
});

function randomDiceNumber() {
    let ranNum = Math.floor((Math.random() * (7 - 1)) + 1);
    return ranNum;
}

export { player1 }