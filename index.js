const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const { rollDice } = require("./moduls/dice.js");
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
    console.log("Player joined:", socket.id);

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

        io.emit("gameState", gameState);
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
        currentPlayer.positionNew += result % 40;

        io.emit("diceResult", {
            playerId: currentPlayer.id,
            result,
            position: currentPlayer.positionNew
        });

        gameState.currentTurn = (gameState.currentTurn++) % gameState.players.length;
    });

    socket.on("disconect", () => {
        console.log("Player disconected:", socket.id);
        gameState.players = gameState.players.filter(p => p.i !== socket.id);
        io.emit("gameState", gameState);
    });
});

const PORT = 3200;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
    console.log(`Server runed: ${HOST}:${PORT}`);
});