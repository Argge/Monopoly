import { player1 } from "./main.js";
// import { cards } from "./cards-info.js";
import { cardCocaCola, cardNestle, cardNike, cardAdidas, cardNewBalance, cardInstagram, cardTikTok, cardYouTube, cardBurgerKing, cardKfc, cardMcDonalds } from "./cards-values.js";

function playerPosCheck() {
    if (player1.positionNew = 1) {
        if (cardCocaCola.owner !== null || cardCocaCola.owner !== "Player") {
            if (cardCocaCola.level === 0) {
                if (player1.bank >= cardCocaCola.baseRent0) {
                    player1.bank -= cardCocaCola.baseRent0;
                }
                else {
                    
                }
            }
        }
    }
}
