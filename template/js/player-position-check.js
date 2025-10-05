import { player1 } from "./main.js";
import { cards } from "./cards-values-client.js";
import { cardChanse, messegeRender } from "./chanse-card.js";


function playerPosCheck() {
    let pos = player1.positionNew;
    if (pos === 1) {
        baseRentPay(cards.CocaCola);
    }
    else if (pos === 3) {
        baseRentPay(cards.Nestle);
    }
    else if (pos === 6) {
        baseRentPay(cards.Nike);
    }
    else if (pos === 7) {
        cardChanse.generate();
    }
    else if (pos === 8) {
        baseRentPay(cards.Adidas);
    }
    else if (pos === 9) {
        baseRentPay(cards.NewBalance);
    }
    else if (pos === 10 && player1.positionOld !== 30) {
        debt(5000);
        messegeRender("YOU STAYED IN JAIL ", "AND", " MISS A MOVE");
    }
    else if (pos === 11) {
        baseRentPay(cards.Instagram);
    }
    else if (pos === 13) {
        baseRentPay(cards.TikTok);
    }
    else if (pos === 14) {
        baseRentPay(cards.YouTube);
    }
    else if (pos === 16) {
        baseRentPay(cards.BurgerKing);
    }
    else if (pos === 18) {
        baseRentPay(18, cards.Kfc);
    }
    else if (pos === 19) {
        baseRentPay(19, cards.McDonalds); 
    }
    else if (pos === 22) {
        cardChanse.generate();
    }
    else if (pos === 30) {
        player1.move(-20);
        debt(5000);
        player1.positionNew = 10;
        messegeRender("GO TO JAIL ", "WIHOUT ", "PASSING THE START");
    }
    else if (pos === 36) {
        cardChanse.generate();
    }
}

const username = localStorage.getItem("username");

function baseRentPay(cardOnClient) {
    
    if (cardOnClient.owner !== null || cardOnClient.owner !== username) {
        if (cardOnClient.level === 0) {
            debt(cardOnClient.baseRent0);
        }
        else if (cardOnClient.level === 1) {
            debt(cardOnClient.baseRent1);
        }
        else if (cardOnClient.level === 2) {
            debt(cardOnClient.baseRent2);
        }
        else {
            debt(cardOnClient.baseRent3);
        }
    }
    else if (cardOnClient.owner === null) {
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