import { cardInfoRender } from "./cards-info.js";

class CardInfo {
    name = null;
    owner = null;
    baseRent = null;
    level = 0;
    price = 0;
    upgradePrice1 = 0;
    upgradePrice2 = 0;
    upgradePrice3 = 0;


    first() {
        cardInfoRender(this.owner, this.baseRent, this.level, this.price, this.upgradePrice1, this.upgradePrice2, this.upgradePrice3, this.name);
    }
}

const cardCocaCola = new CardInfo;
const cardNestle = new CardInfo;
const cardNike = new CardInfo;
const cardAdidas = new CardInfo;
const cardNewBalance = new CardInfo;

cardCocaCola.price = 3000;
cardCocaCola.upgradePrice1 = 7000;
cardCocaCola.upgradePrice2 = 8500;
cardCocaCola.upgradePrice3 = 10000;

cardNestle.price = 5000;
cardNestle.upgradePrice1 = 8000;
cardNestle.upgradePrice2 = 9000;
cardNestle.upgradePrice3 = 10500;

cardNike.price = 9000;
cardNike.upgradePrice1 = 11000;
cardNike.upgradePrice2 = 13000;
cardNike.upgradePrice3 = 14500;

cardAdidas.price = 10000;
cardAdidas.upgradePrice1 = 13000;
cardAdidas.upgradePrice2 = 15000;
cardAdidas.upgradePrice3 = 16500;

cardNewBalance.price = 11000;
cardNewBalance.upgradePrice1 = 14000;
cardNewBalance.upgradePrice2 = 17000;
cardNewBalance.upgradePrice3 = 20000;

export { cardCocaCola, cardNestle, cardNike, cardAdidas, cardNewBalance }