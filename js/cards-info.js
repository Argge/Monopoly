import { player1 } from "./main.js";
import { cardCocaCola, cardNestle, cardNike, cardAdidas, cardNewBalance, cardInstagram, cardTikTok, cardYouTube, cardBurgerKing, cardKfc, cardMcDonalds } from "./cards-values.js";

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

function cardInfoRender(owner, baseRent0, baseRent1, baseRent2, baseRent3, level, price, upgradePrice1, upgradePrice2, upgradePrice3, name) {
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
    else if (name === "Instagram") {
        imgLogo.src = "img/logo/white_logos/instagram_logo.png";
    }
    else if (name === "TikTok") {
        imgLogo.src = "img/logo/tik_tok_logo.png";
    }
    else if (name === "YouTube") {
        imgLogo.src = "img/logo/white_logos/you-tube_logo.png";
    }
    else if (name === "BurgerKing") {
        imgLogo.src = "img/logo/burger_king_logo.png";
    }
    else if (name === "Kfc") {
        imgLogo.src = "img/logo/kfc_logo.png";
    }
    else if (name === "McDonalds") {
        imgLogo.src = "img/logo/mcdonalds_logo.webp";
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
    baseRentText.id = "baseRentText";
    if (owner === null) {
        baseRentText.textContent = "BASE RENT: 0";
    }
    else if (owner !== null || level === 0) {
        baseRentText.textContent = "BASE RENT: " + baseRent0;    
    }
    else if (owner !== null || level === 1) {
        baseRentText.textContent = "BASE RENT: " + baseRent1;    
    }
    else if (owner !== null || level === 2) {
        baseRentText.textContent = "BASE RENT: " + baseRent2;    
    }
    else if (owner !== null || level === 3) {
        baseRentText.textContent = "BASE RENT: " + baseRent3;    
    }
    infoText.appendChild(baseRentText);
    
    let levelText = document.createElement("span");
    levelText.id = "levelText";
    levelText.textContent = "LEVEL: " + level;
    infoText.appendChild(levelText);

    let priceText = document.createElement("span");
    priceText.id = "priceText";
    if (owner === null) {
        priceText.textContent = "PRICE: " + price + "$";
    }
    else {
        if (level === 0) {
            priceText.textContent = "FOR UPGRADE: " + upgradePrice1 + "$";
        }
        else if (level === 1) {
            priceText.textContent = "FOR UPGRADE: " + upgradePrice2 + "$";
        }
        else if (level === 2) {
            priceText.textContent = "FOR UPGRADE: " + upgradePrice3 + "$";
        }
        else {
            priceText.textContent = "";
        }
    }
    infoText.appendChild(priceText);

    // LEVELS
    const levelsBG = document.createElement("div");
    levelsBG.id = "levelsOfCard";
    cardBG.appendChild(levelsBG);

    let levelDiv1 = document.createElement("div");
    levelDiv1.id = "levelBlock1";
    if (level === 0) {
        levelDiv1.classList.add("cardLevel0");
    }
    else {
        levelDiv1.classList.add("cardLevel1");
    }
    
    levelsBG.appendChild(levelDiv1);

    let levelDiv2 = document.createElement("div");
    levelDiv2.id = "levelBlock2";
    if (level === 0 || level === 1) {
        levelDiv2.classList.add("cardLevel0");
    }
    else {
        levelDiv2.classList.add("cardLevel1");
    }
    levelsBG.appendChild(levelDiv2);

    let levelDiv3 = document.createElement("div");
    levelDiv3.id = "levelBlock3";
    if (level === 0 || level === 1 || level === 2) {
        levelDiv3.classList.add("cardLevel0");
    }
    else {
        levelDiv3.classList.add("cardLevel1");
    }
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
    else if (level === 0 || level === 1 || level === 2) {
        textBtn.textContent = "UPGRADE";
    }
    else {
        textBtn.textContent = "MAX";
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
    else if (name === "BurgerKing" || name === "Kfc" || name === "McDonalds") {
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

        let levelText = document.getElementById("levelText");
        let priceText = document.getElementById("priceText");
        let btnText = document.getElementById("cardBtnText");

        // IF THE CARD HASN'T OWNER
        if (cardName.owner === null) {
            // WARN
            if (player1.bank < cardName.price) {
                warnWin();
            }
            // BUYING
            else {
                player1.bank -= cardName.price;
                player1.cards.push(cardNamePush);
                playerBankCounter.textContent = "BALANCE: " + player1.bank + "$";

                let ownerText = document.getElementById(cardName.name);
                btnText.textContent = "UPGRADE";
                cardName.owner = "Player";
                ownerText.textContent = "OWNER: Player";
                priceText.textContent = "UPGRADE PRICE: " + cardName.upgradePrice1;
                baseRentText.textContent = "BASE RENT: " + cardName.baseRent0;

                console.log("Player buyed card: " + cardNamePush);
                console.log(player1.bank);
            }
        }
        else if (cardName.owner === "Player") {
            if (cardName.level === 0) {
               if (player1.bank < cardName.upgradePrice1) {
                    warnWin();
                }
                else {
                    player1.bank -= cardName.upgradePrice1;
                    playerBankCounter.textContent = "BALANCE: " + player1.bank + "$";

                    baseRentText.textContent = "BASE RENT: " + cardName.baseRent1;

                    cardName.level = 1;
                    levelText.textContent = "LEVEL: 1";

                    priceText.textContent = "UPGRADE PRICE: " + cardName.upgradePrice2;

                    let levelBlock = document.getElementById("levelBlock1");
                    levelBlock.classList.add("cardLevel1");

                    console.log("Player upgraded card: " + cardNamePush + " to 1LVL!");
                    console.log(player1.bank);
                } 
            }
            else if (cardName.level === 1) {
                if (player1.bank < cardName.upgradePrice2) {
                    warnWin();
                }
                else {
                    player1.bank -= cardName.upgradePrice2;
                    playerBankCounter.textContent = "BALANCE: " + player1.bank + "$";

                    baseRentText.textContent = "BASE RENT: " + cardName.baseRent2;

                    cardName.level = 2;
                    levelText.textContent = "LEVEL: 2";

                    priceText.textContent = "UPGRADE PRICE: " + cardName.upgradePrice3;

                    let levelBlock = document.getElementById("levelBlock2");
                    levelBlock.classList.add("cardLevel1");

                    console.log("Player upgraded card: " + cardNamePush + " to 2LVL!");
                    console.log(player1.bank);
                }
            }
            else if (cardName.level === 2) {
                if (player1.bank < cardName.upgradePrice3) {
                    warnWin();
                }
                else {
                    player1.bank -= cardName.upgradePrice3;
                    playerBankCounter.textContent = "BALANCE: " + player1.bank + "$";

                    baseRentText.textContent = "BASE RENT: " + cardName.baseRent3;

                    cardName.level = 3;
                    levelText.textContent = "LEVEL: 3";

                    priceText.textContent = "";

                    let levelBlock = document.getElementById("levelBlock3");
                    levelBlock.classList.add("cardLevel1");

                    btnText.textContent = "MAX";
                    cardUpgradeBtn.disabled = true;
                    

                    console.log("Player upgraded card: " + cardNamePush + " to 3LVL!");
                    console.log(player1.bank);
                }
            }
        }
    });
}

function warnWin() {
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
        if (cardOpened === null) {
        randomBtn.style.zIndex = "2";   
        }
         
    }, 2500);
}

let cardOpened = null;
function cardOpen(name, cardObj) {
    let gui = document.getElementById("gui");
    if (cardOpened) {
        let cardBG = document.getElementById("cardInfoBG");
        gui.removeChild(cardBG);
    }
    
    cardObj.name = name;
    cardObj.first();
    cardBuying(name, cardObj);
    gui.style.backdropFilter = "blur(3px)";
    randomBtn.style.zIndex = "0";

    cardOpened = name;
}

function cardClose() {
    let gui = document.getElementById("gui");
    let cardBG = document.getElementById("cardInfoBG");
    gui.style.backdropFilter = "";
    randomBtn.style.zIndex = "2";
    gui.removeChild(cardBG);

    cardOpened = null;
}

// gui.addEventListener("click", () => {
//     cardClose();
// });

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
        cardOpen("Adidas", cardAdidas);
    }
});

cards[8].addEventListener("click", () => {
    if (cardOpened === "NewBalance") {
        cardClose();
    }
    else {
        cardOpen("NewBalance", cardNewBalance);
    }
});

cards[9].addEventListener("click", () => {
    if (cardOpened === "Instagram") {
        cardClose();
    }
    else {
        cardOpen("Instagram", cardInstagram);
    }
});

cards[11].addEventListener("click", () => {
    if (cardOpened === "TikTok") {
        cardClose();
    }
    else {
        cardOpen("TikTok", cardTikTok);
    }
});

cards[12].addEventListener("click", () => {
    if (cardOpened === "YouTube") {
        cardClose();
    }
    else {
        cardOpen("YouTube", cardYouTube);
    }
});

cards[14].addEventListener("click", () => {
    if (cardOpened === "BurgerKing") {
        cardClose();
    }
    else {
        cardOpen("BurgerKing", cardBurgerKing);
    }
});

cards[16].addEventListener("click", () => {
    if (cardOpened === "Kfc") {
        cardClose();
    }
    else {
        cardOpen("Kfc", cardKfc);
    }
});

cards[17].addEventListener("click", () => {
    if (cardOpened === "McDonalds") {
        cardClose();
    }
    else {
        cardOpen("McDonalds", cardMcDonalds);
    }
});

export { cardInfoRender }