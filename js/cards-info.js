import { player1 } from "./main.js";

const cards = [
    document.getElementById("playerSec2"),
    document.getElementById("playerSec3"),
    document.getElementById("playerSec4"),
    document.getElementById("playerSec5"),
    document.getElementById("playerSec6"),
    document.getElementById("playerSec7"),
    document.getElementById("playerSec8"),
    document.getElementById("playerSec9"),
    document.getElementById("playerSec10"),    
    document.getElementById("playerSec12"),
    document.getElementById("playerSec13"),
    document.getElementById("playerSec14"),
    document.getElementById("playerSec15"),
    document.getElementById("playerSec16"),
    document.getElementById("playerSec17"),
    document.getElementById("playerSec18"),
    document.getElementById("playerSec19"),
    document.getElementById("playerSec20"),
    document.getElementById("playerSec22"),
    document.getElementById("playerSec23"),
    document.getElementById("playerSec24"),
    document.getElementById("playerSec25"),
    document.getElementById("playerSec26"),
    document.getElementById("playerSec27"),
    document.getElementById("playerSec28"),
    document.getElementById("playerSec29"),
    document.getElementById("playerSec30"),
    document.getElementById("playerSec32"),
    document.getElementById("playerSec33"),
    document.getElementById("playerSec34"),
    document.getElementById("playerSec35"),
    document.getElementById("playerSec36"),
    document.getElementById("playerSec37"),
    document.getElementById("playerSec38"),
    document.getElementById("playerSec39"),
    document.getElementById("playerSec40"),
];

class CardInfo {
    name = null;
    owner = null;
    baseRent = null;
    level = 0;
    price = 0;
    upgradePrice = 0;


    first() {
        cardInfoRender(this.owner, this.baseRent, this.level, this.price, this.upgradePrice, this.name);
    }
}

function cardInfoRender(owner, baseRent, level, price, upgradePrice, name) {
    const gui = document.getElementById("gui");

    // HEADER
    const cardBG = document.createElement("div");
    cardBG.id = "cardInfoBG";
    gui.appendChild(cardBG);

    const imgBG = document.createElement("div");
    imgBG.id = "imageBG";
    cardBG.appendChild(imgBG);

    const colorBG = document.createElement("div");
    colorBG.classList.add("topBG");
    cardColorBgDefine(colorBG, name);
    imgBG.appendChild(colorBG);
    
    const imgVignette = document.createElement("div");
    imgVignette.id = "imageVignette";
    imgBG.appendChild(imgVignette);

    const imgLogo = document.createElement("img");
    imgLogo.id = "cardLogo";
    imgLogo.setAttribute("src", "");
    if (name === "CocaCola") {
        imgLogo.src = "img/logo/white_logos/coca-cola_logo.png";
    }
    else if (name === "Nestle") {
        imgLogo.src = "img/logo/white_logos/nestle_logo.png";
    }
    else if (name === "Nike") {
        imgLogo.src = "img/logo/white_logos/nike_logo.png";
    }
    else if (name === "Adidas") {
        imgLogo.src = "img/logo/white_logos/adidas_logo.png";
    }
    else if (name === "NewBalance") {
        imgLogo.src = "img/logo/white_logos/new-balance_logo.png";
    }
    imgBG.appendChild(imgLogo);

    // TEXT BLOCK
    const infoText = document.createElement("div");
    infoText.id = "infoTextCard";
    cardBG.appendChild(infoText);

    let ownerText = document.createElement("span");
    if (owner === null) {
        ownerText.textContent = "OWNER: NONE";    
    }
    else {
        ownerText.textContent = "OWNER: " + owner;
    }
    ownerText.id = name;
    infoText.appendChild(ownerText);

    let baseRentText = document.createElement("span");
    if (baseRent === null) {
        baseRentText.textContent = "BASE RENT: NONE";
    }
    else {
        baseRentText.textContent = "BASE RENT: " + baseRent;    
    }
    infoText.appendChild(baseRentText);
    
    let levelText = document.createElement("span");
    levelText.textContent = "LEVEL: " + level;
    infoText.appendChild(levelText);

    let priceText = document.createElement("span");
    if (owner === null) {
        priceText.textContent = "PRICE: " + price;
    }
    else {
        priceText.textContent = "FOR UPGRADE: " + upgradePrice;
    }
    infoText.appendChild(priceText);

    // LEVELS
    const levelsBG = document.createElement("div");
    levelsBG.id = "levelsOfCard";
    cardBG.appendChild(levelsBG);

    let levelDiv1 = document.createElement("div");
    levelDiv1.id = "levelBlock1";
    levelDiv1.classList.add("cardLevel0");
    levelsBG.appendChild(levelDiv1);

    let levelDiv2 = document.createElement("div");
    levelDiv2.id = "levelBlock2";
    levelDiv2.classList.add("cardLevel0");
    levelsBG.appendChild(levelDiv2);

    let levelDiv3 = document.createElement("div");
    levelDiv3.id = "levelBlock3";
    levelDiv3.classList.add("cardLevel0");
    levelsBG.appendChild(levelDiv3);

    // BUTTON
    let mainBtn = document.createElement("button");
    mainBtn.id = "cardUpgradeBtn";
    cardBG.appendChild(mainBtn);

    let btnBG = document.createElement("div");
    btnBG.classList.add("bottomBG");
    cardColorBgDefine(btnBG, name);
    mainBtn.appendChild(btnBG);

    let textBtn = document.createElement("span");
    if (owner === null) {
        textBtn.textContent = "BUY";
    }
    else {
        textBtn.textContent = "UPGRADE";
    }
    textBtn.id = "cardBtnText"; 
    mainBtn.appendChild(textBtn);

    const vignette = document.createElement("div");
    vignette.id = "buttonVignette";
    mainBtn.appendChild(vignette);
}

function cardColorBgDefine(obj, name) {
    if (name === "CocaCola" || name === "Nestle") {
        obj.classList.add("colorBG1");
    }
    else if (name === "Nike" || name === "Adidas" || name === "NewBalance") {
        obj.classList.add("colorBG2");
    }
    else if (name === "Instagram" || name === "TikTok" || name === "YouTube") {
        obj.classList.add("colorBG3");
    }
    else if (name === "BurgerKing" || name === "KFC" || name === "McDonalds") {
        obj.classList.add("colorBG4");
    }
    else if (name === "Oracle" || name === "Amazone" || name === "Microsoft") {
        obj.classList.add("colorBG5");
    }
    else if (name === "Mercedes" || name === "Audi" || name === "Toyota") {
        obj.classList.add("colorBG6");
    }
    else if (name === "Samsung" || name === "Apple" || name === "Google") {
        obj.classList.add("colorBG7");
    }
    else {
        obj.classList.add("colorBG8");
    }
}

function cardBuying(cardNamePush, cardName) {
    
    let buyBtn = document.getElementById("cardUpgradeBtn");

    buyBtn.addEventListener("click", () => {
        // WARN
        if (player1.bank < 3000) {

            const mainWin = document.createElement("div");
            mainWin.id = "settingsMenu";
            mainWin.classList.add("menuPattern");
            gui.appendChild(mainWin);

            let infoText = document.createElement("p");
            infoText.classList.add("infoText");
            infoText.textContent = "NOT ENOUGH MONEY";
            mainWin.appendChild(infoText);

            randomBtn.style.zIndex = "0";

            setTimeout( () => {
                gui.removeChild(mainWin);
                randomBtn.style.zIndex = "2";    
            }, 2500);
        }
        // BUYING
        else {
            player1.bank -= 3000;
            player1.cards.push(cardNamePush);
            playerBankCounter.textContent = "BALANCE: " + player1.bank + "$";

            let btnText = document.getElementById("cardBtnText");
            let ownerText = document.getElementById(cardName.name);
            btnText.textContent = "UPGRADE";
            cardName.owner = "Player";
            ownerText.textContent = "OWNER: Player";

            console.log("Player buyed card: " + cardNamePush);
        }
    });
}

let cardOpened = null;
function cardOpen(name, cardObj) {
    if (cardOpened) {
        let gui = document.getElementById("gui");
        let cardBG = document.getElementById("cardInfoBG");
        gui.removeChild(cardBG);
    }
    
    cardObj.name = name;
    cardObj.first();
    cardBuying(name, cardObj);

    cardOpened = name;
}

function cardClose() {
    let gui = document.getElementById("gui");
    let cardBG = document.getElementById("cardInfoBG");
    gui.removeChild(cardBG);

    cardOpened = null;
}

const cardCocaCola = new CardInfo;
const cardNestle = new CardInfo;
const cardNike = new CardInfo;
const cardAdidas = new CardInfo;
const cardNewBalance = new CardInfo;

cards[0].addEventListener("click", () => {
    if (cardOpened === "CocaCola") {
        cardClose();
    }
    else {
        cardOpen("CocaCola", cardCocaCola);
    }
});

cards[2].addEventListener("click", () => {
    if (cardOpened === "Nestle") {
        cardClose();
    }
    else {
        cardOpen("Nestle", cardNestle);
    }
});

cards[5].addEventListener("click", () => {
    if (cardOpened === "Nike") {
        cardClose();
    }
    else {
        cardOpen("Nike", cardNike);
    }
});

cards[7].addEventListener("click", () => {
    if (cardOpened === "Adidas") {
        cardClose();
    }
    else {
        cardOpen("Adidas", cardNike);
    }
});

cards[8].addEventListener("click", () => {
    if (cardOpened === "NewBalance") {
        cardClose();
    }
    else {
        cardOpen("NewBalance", cardNike);
    }
});