import { player1, debt } from "./main.js";
// import { cards } from "./cards-info.js";
import { cardCocaCola, cardNestle, cardNike, cardAdidas, cardNewBalance, cardInstagram, cardTikTok, cardYouTube, cardBurgerKing, cardKfc, cardMcDonalds } from "./cards-values.js";

function playerPosCheck() {
    baseRentPay(1, cardCocaCola);
    baseRentPay(3, cardNestle);
    baseRentPay(6, cardNike);
    baseRentPay(8, cardAdidas);
    baseRentPay(9, cardNewBalance);
}

function baseRentPay(position, cardName) {
    if (player1.positionNew = position) {
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
    }
}

export { playerPosCheck }