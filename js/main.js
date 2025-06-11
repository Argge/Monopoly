import { movePlayer, createPlayer } from "./player.js";

const randomBtn = document.getElementById("randomBtn");
const gamingDice = document.getElementById("gamingDice");

let diceNumber = 0;

randomBtn.addEventListener("click", () => {
    diceNumber = randomDiceNumber();
    gamingDice.innerHTML = "";

    if (diceNumber === 1) {
        gamingDice1();
    }
    else if (diceNumber === 2) {
        gamingDice2();
    }
    else if (diceNumber === 3) {
        gamingDice3();
    }
    else if (diceNumber === 4) {
        gamingDice4();
    }
    else if (diceNumber === 5) {
        gamingDice5();
    }
    else {
        gamingDice6();
    }

    console.log(diceNumber);

    movePlayer;
    createPlayer;
});

function randomDiceNumber() {
    let ranNum = Math.floor((Math.random() * (7 - 1)) + 1);
    return ranNum;
}

function gamingDice1() {
    let valueDice = document.createElement("div");
    valueDice.id = "valueDice1";
    gamingDice.appendChild(valueDice);

    let dot = document.createElement("div");
    dot.classList.add("dot");
    valueDice.appendChild(dot);
}

function gamingDice2() {
    let valueDice = document.createElement("div");
    valueDice.id = "valueDice2";
    gamingDice.appendChild(valueDice);

    let dot1 = document.createElement("div");
    dot1.classList.add("dot");
    valueDice.appendChild(dot1);

    let dot2 = document.createElement("div");
    dot2.classList.add("dot");
    valueDice.appendChild(dot2);
}

function gamingDice3() {
    let valueDice = document.createElement("div");
    valueDice.id = "valueDice3";
    gamingDice.appendChild(valueDice);

    let dot1 = document.createElement("div");
    dot1.classList.add("dot");
    valueDice.appendChild(dot1);

    let dot2 = document.createElement("div");
    dot2.classList.add("dot");
    valueDice.appendChild(dot2);

    let dot3 = document.createElement("div");
    dot3.classList.add("dot");
    valueDice.appendChild(dot3);
}

function gamingDice4() {
    let valueDice = document.createElement("div");
    valueDice.id = "valueDice4";
    gamingDice.appendChild(valueDice);


    let topDiv = document.createElement("div");
    topDiv.id = "topDots";
    valueDice.appendChild(topDiv);

    let dot1 = document.createElement("div");
    dot1.classList.add("dot");
    topDiv.appendChild(dot1);

    let dot2 = document.createElement("div");
    dot2.classList.add("dot");
    topDiv.appendChild(dot2);


    let bottomDiv = document.createElement("div");
    bottomDiv.id = "bottomDots";
    valueDice.appendChild(bottomDiv);

    let dot3 = document.createElement("div");
    dot3.classList.add("dot");
    bottomDiv.appendChild(dot3);

    let dot4 = document.createElement("div");
    dot4.classList.add("dot");
    bottomDiv.appendChild(dot4);
}

function gamingDice5() {
    let valueDice = document.createElement("div");
    valueDice.id = "valueDice5";
    gamingDice.appendChild(valueDice);


    let topDiv = document.createElement("div");
    topDiv.id = "topDots";
    valueDice.appendChild(topDiv);

    let dot1 = document.createElement("div");
    dot1.classList.add("dot");
    topDiv.appendChild(dot1);

    let dot2 = document.createElement("div");
    dot2.classList.add("dot");
    topDiv.appendChild(dot2);


    let midleDiv = document.createElement("div");
    midleDiv.id = "midleDots";
    valueDice.appendChild(midleDiv);

    let dot3 = document.createElement("div");
    dot3.classList.add("dot");
    midleDiv.appendChild(dot3);


    let bottomDiv = document.createElement("div");
    bottomDiv.id = "bottomDots";
    valueDice.appendChild(bottomDiv);

    let dot4 = document.createElement("div");
    dot4.classList.add("dot");
    bottomDiv.appendChild(dot4);

    let dot5 = document.createElement("div");
    dot5.classList.add("dot");
    bottomDiv.appendChild(dot5);
}

function gamingDice6() {
    let valueDice = document.createElement("div");
    valueDice.id = "valueDice6";
    gamingDice.appendChild(valueDice);


    let topDiv = document.createElement("div");
    topDiv.id = "topDots";
    valueDice.appendChild(topDiv);

    let dot1 = document.createElement("div");
    dot1.classList.add("dot");
    topDiv.appendChild(dot1);

    let dot2 = document.createElement("div");
    dot2.classList.add("dot");
    topDiv.appendChild(dot2);

    let dot3 = document.createElement("div");
    dot3.classList.add("dot");
    topDiv.appendChild(dot3);

    let bottomDiv = document.createElement("div");
    bottomDiv.id = "bottomDots";
    valueDice.appendChild(bottomDiv);

    let dot4 = document.createElement("div");
    dot4.classList.add("dot");
    bottomDiv.appendChild(dot4);

    let dot5 = document.createElement("div");
    dot5.classList.add("dot");
    bottomDiv.appendChild(dot5);

    let dot6 = document.createElement("div");
    dot6.classList.add("dot");
    bottomDiv.appendChild(dot6);
}

export { randomDiceNumber, diceNumber };