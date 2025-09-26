import { player1 } from "./main.js";
import { debt } from "./player-position-check.js";

class Chanse {
    generate() {
        let ranNum = randomNumber(1, 5);
        if (ranNum === 1) {
            fine();
        }
        else if (ranNum === 2) {
            railRoad();
        }
        else if (ranNum === 3) {
            goToJail();
        }
        else if (ranNum === 4) {
            gift();
        }
    }
}

const cardChanse = new Chanse;

// EVENTS
function fine() {
    let ranNum = randomNumber(1, 6);
    let fine = 0;
    if (ranNum === 1) {
        debt(1000);
        fine = 1000;
    }
    else if (ranNum === 2) {
        debt(3000);
        fine = 3000;
    }
    else if (ranNum === 3) {
        debt(5000);
        fine = 5000;
    }
    else if (ranNum === 4) {
        debt(10000);
        fine = 10000;
     }
    else {
        debt(20000);
        fine = 20000;
    }
    messegeRender("YOU GET A FINE: ", fine, "$");
}

function railRoad() {
    let ranNum = randomNumber(1, 3);
    let steps = randomNumber(1, 7);
    if (ranNum === 1) {
        if (steps === 1) {
            player1.move(1);
        }
        else if (steps === 2) {
            player1.move(2);
        }
        else if (steps === 3) {
            player1.move(3);
        }
        else if (steps === 4) {
            player1.move(4);
        }
        else if (steps === 5) {
            player1.move(5);
        }
        else if (steps === 6) {
            player1.move(6);
        }
        messegeRender("GO ", steps, " STEPS FORWARD");
    }
    else {
        if (steps === 1) {
            player1.move(-1);
        }
        else if (steps === 2) {
            player1.move(-2);
        }
        else if (steps === 3) {
            player1.move(-3);
        }
        else if (steps === 4) {
            player1.move(-4);
        }
        else if (steps === 5) {
            player1.move(-5);
        }
        else if (steps === 6) {
            player1.move(-6);
        }
        messegeRender("GO BACK ", steps, " STEPS");
    }     
}

function goToJail() {
    if (player1.positionNew === 7) {
        player1.move(3);
    }
    else if (player1.positionNew === 22) {
        player1.move(-12);
    }
    else if (player1.positionNew === 36) {
        player1.move(-26);
    }
    messegeRender("GO TO JAIL ", "WIHOUT ", "PASSING THE START");
}

function gift() {
    let ranNum = randomNumber(1, 6);
    let gift = 0;
    if (ranNum === 1) {
        gift = 666;
        addingReward(gift);
    }
    else if (ranNum === 2) {
        gift = 1000;
        addingReward(gift);
    }
    else if (ranNum === 3) {
        gift = 3000;
        addingReward(gift);
    }
    else if (ranNum === 4) {
        gift = 5000;
        addingReward(gift);
     }
    else {
        gift = 10000;
        addingReward(gift);
    }
    messegeRender("TAKE THE GIFT FTOM BANK: ", gift, "$");
}

function messegeRender(n1, n2, n3) {
    let gui = document.getElementById("gui");
    const mainWin = document.createElement("div");
    mainWin.id = "settingsMenu";
    mainWin.classList.add("menuPattern");
    gui.appendChild(mainWin);

    let infoText = document.createElement("p");
    infoText.classList.add("infoText");
    infoText.textContent = n1 + n2 + n3;
    mainWin.appendChild(infoText);

    randomBtn.style.zIndex = "0";

    setTimeout( () => {
        gui.removeChild(mainWin);
        randomBtn.style.zIndex = "2";   
         
    }, 3000);
}

function addingReward(reward) {
    if (player1.debt === 0) {
            player1.bank += reward;
            playerBankCounter.textContent = "BALANCE: " + player1.bank + "$";
        }
        else {
            player1.debt -= reward;
            if (player1.debt === 0) {
                player1.bank += reward;
                playerBankCounter.textContent = "BALANCE: " + player1.bank + "$";
            }
            else if (player1.debt < 0) {
                player1.bank += player1.debt;
                playerBankCounter.textContent = "BALANCE: " + player1.bank + "$";
                player1.debt = 0;
            }
        }
}

function randomNumber(min, max) {
            let ranNum = Math.floor((Math.random() * (max - min)) + min);
            return ranNum;
}

export { cardChanse, messegeRender }