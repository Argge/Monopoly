import { game } from "./game-render.js";
import { cardBuying } from "./cards-info.js";
import { gameStateOnClient } from "./game-state-client.js";
import { cards } from "./cards-values-client.js";

const socket = io(`http://${window.location.hostname}:3200`);

const username = localStorage.getItem("username");
const color = localStorage.getItem("color");
const randomBtn = document.getElementById("randomBtn");

socket.on("connect", () => {
        console.log("Connected:", username);
        socket.emit("joinGame", {
            username: username,
            color: color
        });
        console.log(socket.id);
});

let player1 = null;
function updateLocalPlayer() {
    if (!gameStateOnClient || !gameStateOnClient.players) {
        console.log("Player1 is und");
        return;
    }
    player1 = gameStateOnClient.players.find(player => player.id === socket.id);
    if (!player1) return console.log("Player1 is und");
}

randomBtn.addEventListener("click", () => {
    socket.emit("rollDice");
    socket.emit("startCheck");
});

socket.on("gameStateOnServer", (gameStateOnServer, cardsOnServer) => {
    console.log("🔄 Received gameStateOnServer");
    Object.assign(gameStateOnClient, gameStateOnServer);

    

    // Object.assign(cards, cardsOnServer);
    // const changedCards = Object.values(cardsOnServer).find(card => card.owner !== null);
    // cards[changedCards].owner = changedCards.owner;
    // cards[changedCards].level = changedCards.level;

    updateLocalPlayer();
});

socket.on("diceResult", ({ gameStateOnServer, result }) => {
        console.log(`Player ${gameStateOnServer.players[gameStateOnServer.currentTurn]} rolled dice: ${result}`);
        game.render(gameStateOnServer.players.length, result);

        Object.assign(gameStateOnClient, gameStateOnServer);
        updateLocalPlayer();
});

socket.on("startTrue", (gameStateOnServer) => {
    const player = gameStateOnClient.players.find(player => player.id === socket.id);
    playerBankCounter.textContent = `BALANCE: ${player.bank}$`;
    console.log(`Player ${player.name} claimed for start: 10000$`);

    Object.assign(gameStateOnClient, gameStateOnServer);
    updateLocalPlayer();
});

socket.on("buyingFalse", (playerId) => {
    if (playerId === socket.id) cardBuying.warnWin();
});

socket.on("buyingTrue", ({ playerId, gameStateOnServer, cardOnServer }) => {
    Object.assign(gameStateOnClient, gameStateOnServer);
    console.log(gameStateOnClient);

    let cardOnClient = Object.values(cards).find(card => card.name === cardOnServer.name);
    
    if (cardOnClient) {
        cardOnClient.owner =  cardOnServer.owner;
        cardOnClient.level =  cardOnServer.level;
    }
    console.log(cardOnClient);
    
    updateLocalPlayer();
    if (playerId === socket.id) {
        if (cardOnServer.level === 0) cardBuying.firstBuy(cardOnServer);
        else if (cardOnServer.level === 1) cardBuying.upgrade1(cardOnServer);
        else if (cardOnServer.level === 2) cardBuying.upgrade2(cardOnServer);
        else cardBuying.upgrade3(cardOnServer);
    };
});

socket.on("disconnect", () => {
    console.log("Disconnected", username);
});

export { socket, player1 }