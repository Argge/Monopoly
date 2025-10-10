import { game } from "./game-render.js";
import { cardBuying } from "./cards-info.js";
import { cards } from "./cards-values-client.js";

const socket = io(`http://${window.location.hostname}:3200`);

const username = localStorage.getItem("username");
const color = localStorage.getItem("color");
const randomBtn = document.getElementById("randomBtn");
// const cardsCheckBtn = document.getElementById("cardsCheckBtn");

let gameStateOnClient = {
    players: [],
    currentTurn: 0,
    board: cards
}

socket.on("connect", () => {
        console.log("Connected:", username);
        socket.emit("joinGame", {
            id: socket.id,
            username: username,
            color: color
        });
});

randomBtn.addEventListener("click", () => {
    socket.emit("rollDice");
    socket.emit("startCheck");
});

socket.on("gameState", (gameStateOnServer) => {
    gameStateOnClient = gameStateOnServer;
});

socket.on("diceResult", ({ gameStateOnServer, result }) => {
        console.log(`Player ${gameStateOnServer.players[gameStateOnServer.currentTurn]} rolled dice: ${result}`);
        game.render(gameStateOnServer.players.length, result);

        gameStateOnClient = gameStateOnServer;
});

socket.on("startTrue", (gameStateOnServer) => {
    const player = gameStateOnClient.players.find(player => player.id === socket.id);
    playerBankCounter.textContent = `BALANCE: ${player.bank}$`;
    console.log(`Player ${player.name} claimed for start: 10000$`);

    gameStateOnClient = gameStateOnServer;
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

export { gameStateOnClient }