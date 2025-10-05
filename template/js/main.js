import { Player } from "./player.js";
import { Dice } from "./dice.js";
import { cardBuying } from "./cards-info.js";
import { cards } from "./cards-values-client.js";

const socket = io("http://localhost:3200");

const username = localStorage.getItem("username");
const randomBtn = document.getElementById("randomBtn");
const cardsCheckBtn = document.getElementById("cardsCheckBtn");


socket.on("connect", () => {
        console.log("Connected:", username);
        socket.emit("joinGame", username);
});

const dice = new Dice;
let player1 = new Player;

randomBtn.addEventListener("click", () => {
    socket.emit("rollDice");
    socket.emit("startCheck");
});

socket.on("gameState", (playerId, name, positionNew, positionOld, lapsNew, lapsOld, bank, debt, cards) => {
    if (playerId === socket.id) {
        player1.name = name;
        player1.positionNew = positionNew;
        player1.positionOld = positionOld;
        player1.lapsNew = lapsNew;
        player1.lapsOld = lapsOld;
        player1.bank = bank;
        player1.debt = debt;
        player1.cards = cards;
    }
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
    cardBuying.warnWin();
});

socket.on("buyingTrue", ({playerId, playerCards, bank, cardOnServer}) => {
    console.log(cardOnServer);
    if (playerId === socket.id) {
        player1.cards = playerCards;
        player1.bank = bank;

        let cardOnClient = Object.values(cards).find(card => card.name === cardOnServer.name);

        cardOnClient.owner =  cardOnServer.owner;
        cardOnClient.level =  cardOnServer.level;

        if (cardOnServer.level === 0) {
            cardBuying.firstBuy(cardOnServer);
        }
        else if (cardOnServer.level === 1) {
            cardBuying.upgrade1(cardOnServer);
        }
        else if (cardOnServer.level === 2) {
            cardBuying.upgrade2(cardOnServer);
        }
        else {
            cardBuying.upgrade3(cardOnServer);
        }
    }
});

socket.on("disconnect", () => {
    console.log("Disconnected", username);
});

export { player1 }