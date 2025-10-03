import { Player } from "./player.js";
import { Dice } from "./dice.js";
import { cardBuying, cardOpened } from "./cards-info.js";
import { cards } from "./cards-values.js";

const socket = io("http://localhost:3200");

const username = localStorage.getItem("username");

socket.on("connect", () => {
        console.log("Conected:", username);
        socket.emit("joinGame", username);
});


const randomBtn = document.getElementById("randomBtn");
const cardsCheckBtn = document.getElementById("cardsCheckBtn");
const cardUpgradeBtn = document.getElementById("cardUpgradeBtn");

const dice = new Dice;
let player1 = new Player;

randomBtn.addEventListener("click", () => {
    socket.emit("rollDice");
    socket.emit("startCheck");
});

cardUpgradeBtn.addEventListener("click", () => {
    let cardOnClient = Object.values(cards).find(card => card.name === cardOpened);

    io.emit("cardBuyingReq", cardOnClient);
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

socket.on("buyingTrue", ({playerId, bank, cardOnServer}) => {
    if (playerId === socket.id) {
        player1.bank = bank;

        let cardOnClient = Object.values(cards).find(card => card.name === cardOnServer.name);

        cards[cardOnClient] = cardOnServer;
    }
});

socket.on("disconnect", () => {
    console.log("Disconnected", username);
});

export { player1 }