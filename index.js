// import { cards } from "./moduls/cards.js";

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const { rollDice } = require("./moduls/dice.js");
const { start } = require("./moduls/start.js");
const { cardCheking } = require("./moduls/cards-buying.js");
const { router } = require("./moduls/route.js");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

app.use(express.static(path.join(__dirname, "template")));

app.use(router);

let gameState = {
    players: [],
    currentTurn: 0,
    board: []
}

io.on("connection", (socket) => {
    socket.on("joinGame", (playerName) => {
        gameState.players.push({
            id: socket.id,
            name: playerName,
            positionNew: 0,
            positionOld: 0,
            lapsNew: 0,
            lapsOld: 0,
            bank: 1000,
            debt: 0,
            cards: []
        });

        console.log("Player joined:", playerName);

        const currentPlayer = gameState.players[gameState.currentTurn];

        io.emit("gameState", {
            playerId: currentPlayer.id,
            name: currentPlayer.name,
            positionNew: currentPlayer.positionNew,
            positionOld: currentPlayer.positionOld,
            lapsNew: currentPlayer.lapsNew,
            lapsOld: currentPlayer.lapsOld,
            bank: currentPlayer.bank,
            debt: currentPlayer.debt,
            cards: currentPlayer.cards
        });
    });

    socket.on("rollDice", () => {
        
        if (gameState.players.length === 0) {
            console.log("No players in game");
            return;
        }

        const currentPlayer = gameState.players[gameState.currentTurn];

        if (!currentPlayer) {
            console.log("Error: currentPlayer is not foundet");
            return;
        }

        const result = rollDice();

        currentPlayer.positionOld = currentPlayer.positionNew;
        currentPlayer.positionNew += result;

        io.emit("diceResult", {
            playerId: currentPlayer.id,
            result,
            position: currentPlayer.positionNew 
        });

        gameState.currentTurn = (gameState.currentTurn++) % gameState.players.length;
    });

    socket.on("startCheck", () => {
        if (gameState.players.length === 0) {
            console.log("No players in game");
            return;
        }

        const currentPlayer = gameState.players[gameState.currentTurn];

        if (!currentPlayer) {
            console.log("Error: currentPlayer is not foundet");
            return;
        }

        if (currentPlayer.positionNew >= 40) {
            currentPlayer.positionNew %= 40;
            currentPlayer.lapsOld = currentPlayer.lapsNew; 
            currentPlayer.lapsNew++;
            
            let startChek = start(currentPlayer);

            if (startChek === true) {
                io.emit("startTrue", {
                    playerId: currentPlayer.id,
                    lapsOld: currentPlayer.lapsOld,
                    lapsNew: currentPlayer.lapsNew,
                    bank: currentPlayer.bank,
                    debt: currentPlayer.debt
                });
            }
        }

        console.log(`${currentPlayer.name} pos: ${currentPlayer.positionNew}`);
    });

    socket.on("cardBuyingReq", (cardOnClient) => {
        console.log("Buying request has been claimed");
        if (gameState.players.length === 0) {
            console.log("No players in game");
            return;
        }

        const currentPlayer = gameState.players[gameState.currentTurn];

        if (!currentPlayer) {
            console.log("Error: currentPlayer is not foundet");
            return;
        }

        let cardBuyResult = cardCheking(cardOnClient, currentPlayer);

        if (cardBuyResult === false) {
            io.emit("buyingFalse");
            console.log("Buying false");
        }
        else {
            io.emit("buyingTrue", {
                playerId: currentPlayer.id,
                playerCards: currentPlayer.cards,
                bank: currentPlayer.bank,
                cardOnServer: cardBuyResult
            });
            console.log("Buying true");
        }
    });

    socket.on("disconnect", () => {
        if (gameState.currentTurn === 0) {
            console.log("Player disconnected:", gameState.players[0].name);
        }
        else if (gameState.currentTurn === 1) {
            console.log("Player disconnected:", gameState.players[1].name);
        }
        else if (gameState.currentTurn === 2) {
            console.log("Player disconnected:", gameState.players[2].name);
        }
        else if (gameState.currentTurn === 3) {
            console.log("Player disconnected:", gameState.players[3].name);
        }
        gameState.players = gameState.players.filter(p => p.id !== socket.id);

        io.emit("gameState", {
            playerId: currentPlayer.id,
            name: currentPlayer.name,
            positionNew: currentPlayer.positionNew,
            positionOld: currentPlayer.positionOld,
            lapsNew: currentPlayer.lapsNew,
            lapsOld: currentPlayer.lapsOld,
            bank: currentPlayer.bank,
            debt: currentPlayer.debt,
            cards: currentPlayer.cards
        });
    });
});

const PORT = 3200;
const HOST = "0.0.0.0";

server.listen(PORT, HOST, () => {
    console.log(`Server runed: ${HOST}:${PORT}`);
});