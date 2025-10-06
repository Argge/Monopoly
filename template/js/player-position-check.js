import { player1 } from "./main.js";
import { cards } from "./cards-values-client.js";
import { cardChanse, messegeRender } from "./chanse-card.js";


function playerPosCheck() {
    let position = player1.positionNew;

    const rentMap = {
        1: cards.CocaCola,
        3: cards.Nestle,
        6: cards.Nike,
        8: cards.Adidas,
        9: cards.NewBalance,
        11: cards.Instagram,
        13: cards.TikTok,
        14: cards.YouTube,
        16: cards.BurgerKing,
        18: cards.Kfc,
        19: cards.McDonalds
    }

    const chanseMap = [7, 22, 36];

    if (rentMap[position]) baseRentPay(rentMap[pos]);
    else if (chanseMap.includes(position)) cardChanse.generate();
    else if (position === 10 && player1.positionOld !== 30) {
        debt(5000);
        messegeRender("YOU STAYED IN JAIL AND MISS A MOVE");
    }
    else if (position === 30) {
        player1.move(-20);
        debt(5000);
        player1.positionNew = 10;
        messegeRender("GO TO JAIL WIHOUT PASSING THE START");
    }
}

const username = localStorage.getItem("username");

function baseRentPay(cardOnClient) {
    
    if (cardOnClient.owner !== null || cardOnClient.owner !== username) {
        debt(cardOnClient[`baseRent${cardOnClient.level}`]);
    }
    else if (cardOnClient.owner === null) {
        console.log("Card is Null");
    }
}

function debt(value1) {
    if (player1.bank >= value1) {
        player1.bank -= value1;
        playerBankCounter.textContent = `BALANCE: ${player1.bank}$`;
    }
    // DEBT LOGIC
    else if (player1.bank < value1) {
        let debt = 0;
        debt = value1 - player1.bank;
        player1.debt += debt;
        player1.bank = 0;
        playerBankCounter.textContent = `BALANCE: ${player1.bank}$`;
    }
}

export { playerPosCheck, debt }