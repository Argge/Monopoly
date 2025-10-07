import { Player } from "./player.js";
import { Dice } from "./dice.js";
import { cardBuying } from "./cards-info.js";
import { cards } from "./cards-values-client.js";

const socket = io(`http://${window.location.hostname}:3200`);

const username = localStorage.getItem("username");
const color = localStorage.getItem("color");
const randomBtn = document.getElementById("randomBtn");
const cardsCheckBtn = document.getElementById("cardsCheckBtn");

let gameStateOnClient = {
    players: [],
    currentTurn: 0,
    board: cards
}

socket.on("connect", () => {
        console.log("Connected:", username);
        socket.emit("joinGame", {
            username: username,
            color: color
        });
});

const dice = new Dice;
// let player1 = new Player(id, name, color);

randomBtn.addEventListener("click", () => {
    socket.emit("rollDice");
    socket.emit("startCheck");
});

socket.on("gameState", (gameStateOnServer) => {
    gameStateOnClient = gameStateOnServer;
});

socket.on("diceResult", ({ gameStateOnServer, result }) => {
        gamingDice.innerHTML = "";
        dice.createDice(result);

        player1.move(result);

        console.log(`Player ${username} rolled dice: ${result}`);
        console.log(player1);

        gameStateOnClient = gameStateOnServer;
});

socket.on("startTrue", (gameStateOnServer) => {
    gameStateOnClient = gameStateOnServer;
    
    const player = gameStateOnClient.players.find(player => player.id === socket.id);
    playerBankCounter.textContent = `BALANCE: ${player.bank}$`;
    console.log(`Player ${player.name} claimed for start: 10000$`);
});

socket.on("buyingFalse", (playerId) => {
    if (playerId === socket.id) cardBuying.warnWin();
});

socket.on("buyingTrue", ({ playerId, gameStateOnServer, cardOnServer }) => {
    console.log(cardOnServer);
    if (playerId === socket.id) {
        if (cardOnServer.level === 0) cardBuying.firstBuy(cardOnServer);
        else if (cardOnServer.level === 1) cardBuying.upgrade1(cardOnServer);
        else if (cardOnServer.level === 2) cardBuying.upgrade2(cardOnServer);
        else cardBuying.upgrade3(cardOnServer);
    }
    gameStateOnClient = gameStateOnServer;
});

socket.on("disconnect", () => {
    console.log("Disconnected", username);
});

export { player1 }