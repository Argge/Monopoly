class CardInfo {
    name = null;
    owner = null;
    baseRent0 = 0;
    baseRent1 = 0;
    baseRent2 = 0;
    baseRent3 = 0;
    level = 0;
    price = 0;
    upgradePrice1 = 0;
    upgradePrice2 = 0;
    upgradePrice3 = 0;

    first() {
        cardInfoRender(this.owner, this.baseRent0, this.baseRent1, this.baseRent2, this.baseRent3, this.level, this.price, this.upgradePrice1, this.upgradePrice2, this.upgradePrice3, this.name);
    }
}

const cards = {
    CocaCola: new CardInfo,
    Nestle: new CardInfo,
    Nike: new CardInfo,
    Adidas: new CardInfo,
    NewBalance: new CardInfo,
    Instagram: new CardInfo,
    TikTok: new CardInfo,
    YouTube: new CardInfo,
    BurgerKing: new CardInfo,
    Kfc: new CardInfo,
    McDonalds: new CardInfo,

}

cards.CocaCola.name = "CocaCola";
cards.CocaCola.price = 3000;
cards.CocaCola.upgradePrice1 = 7000;
cards.CocaCola.upgradePrice2 = 8500;
cards.CocaCola.upgradePrice3 = 10000;
cards.CocaCola.baseRent0 = 2000;
cards.CocaCola.baseRent1 = 5000;
cards.CocaCola.baseRent2 = 6500;
cards.CocaCola.baseRent3 = 9000;

cards.Nestle.name = "Nestle";
cards.Nestle.price = 5000;
cards.Nestle.upgradePrice1 = 8000;
cards.Nestle.upgradePrice2 = 9000;
cards.Nestle.upgradePrice3 = 10500;
cards.CocaCola.baseRent0 = 3000;
cards.CocaCola.baseRent1 = 7000;
cards.CocaCola.baseRent2 = 9500;
cards.CocaCola.baseRent3 = 10000;

cards.Nike.name = "Nike";
cards.Nike.price = 9000;
cards.Nike.upgradePrice1 = 11000;
cards.Nike.upgradePrice2 = 13000;
cards.Nike.upgradePrice3 = 14500;

cards.Adidas.name = "Adidas";
cards.Adidas.price = 10000;
cards.Adidas.upgradePrice1 = 13000;
cards.Adidas.upgradePrice2 = 15000;
cards.Adidas.upgradePrice3 = 16500;

cards.NewBalance.name = "NewBalance";
cards.NewBalance.price = 11000;
cards.NewBalance.upgradePrice1 = 14000;
cards.NewBalance.upgradePrice2 = 17000;
cards.NewBalance.upgradePrice3 = 20000;

cards.Instagram.name = "Instagram";

cards.TikTok.name = "TikTok";

cards.YouTube.name = "YouTube";

cards.BurgerKing.name = "BurgerKing";

cards.Kfc.name = "Kfc";

cards.McDonalds.name = "McDonalds";

export { cards };