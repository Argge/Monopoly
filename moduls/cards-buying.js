// import { cards } from "./cards";
const cards = require("./cards-values-server");

function cardBuying(cardOnServer, currentPlayer) {
    if (cardOnServer.owner === null) {
        if (currentPlayer.bank < cardOnServer.price) {
            return false;
        }
        else {
            currentPlayer.bank -= cardOnServer.price;
            currentPlayer.cards.push(cardOnServer.name);
            
            cardOnServer.owner = currentPlayer.name;

            console.log(`Player ${currentPlayer.name} buyed card: ${cardOnServer.name}`);
            console.log(currentPlayer.bank);
        }
    }
    else if (cardOnServer.owner === currentPlayer.name) {
        if (cardOnServer.level === 0) {
            if (currentPlayer.bank < cardOnServer.upgradePrice1) {
                return false;;
            }
            else {
                currentPlayer.bank -= cardOnServer.upgradePrice1;

                cardOnServer.level = 1;

                console.log(`Player ${currentPlayer.name} upgraded card ${cardOnServer.name} to 1LVL`);
                console.log(currentPlayer.bank);
            } 
        }
        else if (cardOnServer.level === 1) {
            if (currentPlayer.bank < cardOnServer.upgradePrice2) {
                return false;;
            }
            else {
                currentPlayer.bank -= cardOnServer.upgradePrice2;

                cardOnServer.level = 2;

                console.log(`Player ${currentPlayer.name} upgraded card ${cardOnServer.name} to 2LVL`);
                console.log(currentPlayer.bank);
            }
        }
        else if (cardOnServer.level === 2) {
            if (currentPlayer.bank < cardOnServer.upgradePrice3) {
                return false;
            }
            else {
                currentPlayer.bank -= cardOnServer.upgradePrice3;

                cardOnServer.level = 3;

                console.log(`Player ${currentPlayer.name} upgraded card ${cardOnServer.name} to 3LVL`);
                console.log(currentPlayer.bank);
            }
        }
    }
    
    return cardOnServer;
}

function cardCheking(cardOnClient, currentPlayer) {
    console.log("cardOnClient:", cardOnClient);
    const cardOnServer = Object.values(cards).find(card => card.name === cardOnClient.name);

    if (!cardOnServer) {
        console.log(`Card is not found: ${cardOnClient.name}`);
        return false;
    }

    if (!deepEqual(cardOnServer, cardOnClient)) {
        console.log("Cheats! Data is different");
        return false;
    }

    return cardBuying(cardOnServer, currentPlayer);
}

function deepEqual(cardOnServer, cardOnClient) {
    if (cardOnServer === cardOnClient) return true;

    if (typeof cardOnServer !== "object" || typeof cardOnClient !== "object") return false;
    

    let key1 = Object.keys(cardOnServer);
    let key2 = Object.keys(cardOnClient);

    if (key1.length !== key2.length) return false;

    for (let key of key1) {
        if (!key2.includes(key)) return false;
        if (!deepEqual(cardOnServer[key], cardOnClient[key])) return false;
    }

    return true;
}

module.exports = { cardCheking };