const fs = require("fs");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { rollDice } = require("./moduls/dice.js")

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

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
        const result = rollDice();
        const currentPlayer = gameState.players[gameState.currentTurn];

        currentPlayer.positionOld = currentPlayer.positionNew;
        currentPlayer.positionNew += result % 40;

        io.emit("diceResult", {
            playerId: currentPlayer.id,
            result,
            position: currentPlayer.positionNew
        });
    });

    socket.on("disconect", () => {
        console.log("Player disconected:", socket.id);
        gameState.players = gameState.players.filter(p => p.i !== socket.id);
        io.emit("gameState", gameState);
    });
});