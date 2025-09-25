import { player1 } from "./main.js";
// import { cards } from "./cards-info.js";
import { cardCocaCola, cardNestle, cardNike, cardAdidas, cardNewBalance, cardInstagram, cardTikTok, cardYouTube, cardBurgerKing, cardKfc, cardMcDonalds } from "./cards-values.js";

function playerPosCheck() {
    let pos = player1.positionNew;
    if (pos === 1) {
        baseRentPay(cardCocaCola);
    }
    else if (pos === 3) {
        baseRentPay(cardNestle);
    }
    else if (pos === 6) {
        baseRentPay(cardNike);
    }
    else if (pos === 8) {
        baseRentPay(cardAdidas);
    }
    else if (pos === 9) {
        baseRentPay(cardNewBalance);
    }
    else if (pos === 11) {
        baseRentPay(cardInstagram);
    }
    else if (pos === 13) {
        baseRentPay(cardTikTok);
    }
    else if (pos === 14) {
        baseRentPay(cardYouTube);
    }
    else if (pos === 16) {
        baseRentPay(cardBurgerKing);
    }
    else if (pos === 18) {
        baseRentPay(18, cardKfc);
    }
    else if (pos === 19) {
        baseRentPay(19, cardMcDonalds); 
    }
}

function baseRentPay(cardName) {
    
    if (cardName.owner !== null || cardName.owner !== "Player") {
        if (cardName.level === 0) {
            debt(cardName.baseRent0);
        }
        else if (cardName.level === 1) {
            debt(cardName.baseRent1);
        }
        else if (cardName.level === 2) {
            debt(cardName.baseRent2);
        }
        else {
            debt(cardName.baseRent3);
        }
    }
    else if (cardName.owner === null) {
        console.log("Card is Null");
    }
}

function debt(value1) {
    if (player1.bank >= value1) {
        player1.bank -= value1;
        playerBankCounter.textContent = "BALANCE: " + player1.bank + "$";
    }
    // DEBT LOGIC
    else if (player1.bank < value1) {
        let debt = 0;
        debt = value1 - player1.bank;
        player1.debt += debt;
        player1.bank = 0;
        playerBankCounter.textContent = "BALANCE: " + player1.bank + "$";
    }
}

export { playerPosCheck, debt }