import { gameStateOnClient } from "./main.js";
import { debt } from "./player-position-check.js";

let player1 = Object.values(gameStateOnClient).find(player => player.id = socket.id);

class Chanse {
    generate() {
        let randomNumber = randomNumber(1, 4);

        if (randomNumber === 1) fine();
        else if (randomNumber === 2) railRoad();
        else if (randomNumber === 3) goToJail();
        else gift();
    }
}

const cardChanse = new Chanse;

// EVENTS
function fine() {
    const fineValues = {
        1: 1000,
        2: 3000,
        3: 5000,
        4: 10000,
        5: 20000
    }

    const fine = fineValues[randomNumber(1, 5)];
    debt(fine);
    messegeRender(`YOU GET A FINE: ${fine} $`);
}

function railRoad() {
    let randomNumber = randomNumber(1, 2);
    let steps = randomNumber(1, 6);

    if (randomNumber === 1) {
        player1.move(steps);
        messegeRender(`GO ${steps} STEPS FORWARD`);
    }
    else {
        player1.move(steps * (-1));
        messegeRender(`GO BACK ${steps} STEPS`);
    }     
}

function goToJail() {
    if (player1.positionNew === 7) player1.move(3);
    else if (player1.positionNew === 22) player1.move(-12)
    else if (player1.positionNew === 36) player1.move(-26);

    messegeRender("GO TO JAIL WIHOUT PASSING THE START");
}

function gift() {
    const giftValues = {
        1: 666,
        2: 1000,
        3: 3000,
        4: 5000,
        5: 10000
    }

    const gift = giftValues[randomNumber(1, 5)];
    addingReward(gift);
    messegeRender(`TAKE THE GIFT FTOM BANK: ${gift}$`);
}

function messegeRender(messege) {
    let gui = document.getElementById("gui");
    const mainWin = document.createElement("div");
    mainWin.id = "settingsMenu";
    mainWin.classList.add("menuPattern");
    gui.appendChild(mainWin);

    let infoText = document.createElement("p");
    infoText.classList.add("infoText");
    infoText.textContent = messege;
    mainWin.appendChild(infoText);

    randomBtn.style.zIndex = "0";

    setTimeout( () => {
        gui.removeChild(mainWin);
        randomBtn.style.zIndex = "2";   
         
    }, 3000);
}

function addingReward(reward) {
    if (player1.debt > 0) {
        player1.debt -= reward;
        if (player1.debt < 0) {
            player1.bank += Math.abs(player1.debt);
            player1.debt = 0;
        }
    }
    else {
        player1.bank += reward;
    }

    playerBankCounter.textContent = `BALANCE: ${player1.bank}$`;
}

function randomNumber(min, max) {
    return Math.floor((Math.random() * max) + min);
}

export { cardChanse, messegeRender }