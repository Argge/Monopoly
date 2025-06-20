class CardInfo {
    name = null;
    owner = null;
    baseRent = null;
    level = 0;
    price = 0;
    upgradePrice = 0;

    // cardInfoRender()
}

function cardInfoRender(owner, baseRent, level, price, upgradePrice) {
    const gui = document.getElementById("gui");

    // HEADER
    const cardBG = document.createElement("div");
    cardBG.id = "cardInfoBG";
    gui.appendChild(cardBG);

    const imgBG = document.createElement("div");
    imgBG.id = "imageBG";
    cardBG.appendChild(imgBG);

    const imgVignette = document.createElement("div");
    imgVignette.id = "imageVignette";
    imgBG.appendChild(imgVignette);

    const imgLogo = document.createElement("img");
    imgLogo.id = "cardLogo";
    imgBG.appendChild(imgLogo);

    // TEXT BLOCK
    const infoText = document.createElement("div");
    infoText.id = "infoTextCard";
    cardBG.appendChild(infoText);

    let ownerText = document.createElement("span");
    ownerText.textContent = "OWNER: " + owner;
    infoText.appendChild(ownerText);

    let baseRentText = document.createElement("span");
    baseRentText.textContent = "BASE RENT: " + baseRent;
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

    //
}