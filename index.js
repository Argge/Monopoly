const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const { rollDice } = require("./moduls/dice-server.js");
const { start } = require("./moduls/start.js");
const { cardCheking } = require("./moduls/cards-buying.js");
const { router } = require("./moduls/route.js");
const cards = require("./moduls/cards-values-server.js");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

app.use(express.static(path.join(__dirname, "template")));

app.use(router);

let gameStateOnServer = {
    players: [],
    currentTurn: 0
}

io.on("connection", (socket) => {
    socket.on("joinGame", ({ username, color }) => {
        const newPlayer = {
            id: socket.id,
            name: username,
            color: color,
            positionNew: 0,
            positionOld: 0,
            lapsNew: 0,
            lapsOld: 0,
            bank: 1000,
            debt: 0,
            cards: []
        };

        gameStateOnServer.players.push(newPlayer)

        console.log("Player joined:", username);
        console.log(gameStateOnServer.players);

        io.emit("gameStateOnServer", {
            gameStateOnServer: gameStateOnServer,
            cardsOnServer: cards
        });
    });

    socket.on("rollDice", () => {  
        if (gameStateOnServer.players.length === 0) {
            console.log("No players in game");
            return;
        }

        const currentPlayer = gameStateOnServer.players[gameStateOnServer.currentTurn];

        if (!currentPlayer) {
            console.log("Error: currentPlayer is not foundet");
            return;
        }

        const result = rollDice();

        currentPlayer.positionOld = currentPlayer.positionNew;
        currentPlayer.positionNew += result;

        io.emit("diceResult", {
            gameStateOnServer: gameStateOnServer,
            result: result    
        });

        gameStateOnServer.currentTurn = (gameStateOnServer.currentTurn + 1) % gameStateOnServer.players.length;
    });

    socket.on("startCheck", () => {
        if (gameStateOnServer.players.length === 0) {
            console.log("No players in game");
            return;
        }

        const currentPlayer = gameStateOnServer.players[gameStateOnServer.currentTurn];

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
                io.emit("startTrue", gameStateOnServer);
            }
        }

        console.log(`${currentPlayer.name} pos: ${currentPlayer.positionNew}`);
    });

    socket.on("cardBuyingReq", (cardOnClient) => {
        console.log("Buying request has been claimed");
        if (gameStateOnServer.players.length === 0) {
            console.log("No players in game");
            return;
        }

        const currentPlayer = gameStateOnServer.players[gameStateOnServer.currentTurn];

        if (!currentPlayer) {
            console.log("Error: currentPlayer is not foundet");
            return;
        }

        let cardBuyResult = cardCheking(cardOnClient, currentPlayer);

        if (cardBuyResult === false) {
            io.emit("buyingFalse", currentPlayer.id);
            console.log("Buying false");
        }
        else {
            io.emit("buyingTrue", {
                playerId: currentPlayer.id,
                gameStateOnServer: gameStateOnServer,
                cardOnServer: cardBuyResult
            });
            console.log("Buying true");
        }
    });

    socket.on("disconnect", () => {
        const disconnectedPlayer = gameStateOnServer.players.find(player => player.id === socket.id);

        if (disconnectedPlayer) {
            console.log(`Disconnected: ${disconnectedPlayer.name}`);
        }
        else {
            console.log(`Disconnected unknow: ${socket.id}`);
        }

        gameStateOnServer.players = gameStateOnServer.players.filter(player => player.id !== socket.id);

        if (gameStateOnServer.currentTurn >= gameStateOnServer.players.length) {
            gameStateOnServer.currentTurn = 0;
        }

        // if (gameStateOnServer.players.length = 0) {
        //     gameStateOnServer.players = [];
        //     gameStateOnServer.currentTurn = 0;

        //     const allCards = Object.values(cards).find(card => card.owner !== null);
        //     allCards.owner = null;
        //     allCards.level = 0;
        // }

        io.emit("gameStateOnServer", gameStateOnServer);
    });
});

const PORT = 3200;
const HOST = "0.0.0.0";

server.listen(PORT, HOST, () => {
    console.log(`Server runed: ${HOST}:${PORT}`);
});