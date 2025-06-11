import { randomDiceNumber, diceNumber } from "./main.js";

const cards = [
    document.getElementById("cornerStart"),
    document.getElementById("playerSec1"),
    document.getElementById("playerSec2"),
    document.getElementById("playerSec3"),
    document.getElementById("playerSec4"),
    document.getElementById("playerSec5"),
    document.getElementById("playerSec6"),
    document.getElementById("playerSec7"),
    document.getElementById("playerSec8"),
    document.getElementById("playerSec9"),
    document.getElementById("playerSec10"),    
    document.getElementById("cornerJail"),
];

let playerPosOld = 0;
let playerPosNew = 0;

function movePlayer() {
    if (diceNumber === 1) {
        playerPosOld = playerPosNew;
        playerPosNew++;
    }
    else if (diceNumber === 2) {
        playerPosOld = playerPosNew;
        playerPosNew += 2;
    }
    else if (diceNumber === 3) {
        playerPosOld = playerPosNew;
        playerPosNew += 3;
    }
    else if (diceNumber === 4) {
        playerPosOld = playerPosNew;
        playerPosNew += 4;
    }
    else if (diceNumber === 5) {
        playerPosOld = playerPosNew;
        playerPosNew += 5;
    }
    else if (diceNumber === 6) {
        playerPosOld = playerPosNew;
        playerPosNew += 6;
    }

    return playerPos;
}

function createPlayer() {
    const player = document.createElement("div");
    player.id = "player";
    cards[playerPosNew].appendChild(player);
    cards[playerPosOld].removeChild(player);
}

export { movePlayer, createPlayer }