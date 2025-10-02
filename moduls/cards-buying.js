import { cards } from "./cards";

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
        
        if (cardOnServer.owner === currentPlayer.name) {
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
    }
    return cardOnServer;
}

function cardCheking(cardOnClient, currentPlayer) {
    const cardOnServer = cards[cardOnClient.name];

    if (!cardOnServer) {
        console.log("Card is not found");
        return null;
    }

    if (!deepEqual(cardOnServer, cardOnClient)) {
        console.log("Cheats! Data is different");
        return null;
    }

    return cardBuying(cardOnServer, currentPlayer);
}

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;
    

    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);

    if (key1.length !== key2.length) return false;

    for (let key of key1) {
        if (!key2.includes(key)) return false;
        if (!deepEqual(obj1[key], obj1[key])) return false;
    }

    return true;
}

module.exports = { cardCheking };