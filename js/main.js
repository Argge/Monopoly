const randomBtn = document.getElementById("randomBtn");

const gamingDice = document.getElementById("gamingDice");

randomBtn.addEventListener("click", () => {
    let number = randomDiceNumber();
    gamingDice.innerHTML = "";

    if (number === 1) {
        gamingDice1();
    }
    else if (number === 2) {
        gamingDice2();
    }
    else if (number === 3) {
        gamingDice3();
    }
    else if (number === 4) {
        gamingDice4();
    }
    else if (number === 5) {
        gamingDice5();
    }
    else {
        gamingDice6();
    }

    console.log(number);
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
    gamingDice.appendChild(topDiv);

    let dot1 = document.createElement("div");
    dot1.classList.add("dot");
    topDiv.appendChild(dot1);

    let dot2 = document.createElement("div");
    dot2.classList.add("dot");
    topDiv.appendChild(dot2);


    let bottomDiv = document.createElement("div");
    bottomDiv.id = "bottomDots";
    gamingDice.appendChild(bottomDiv);

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
    gamingDice.appendChild(topDiv);

    let dot1 = document.createElement("div");
    dot1.classList.add("dot");
    topDiv.appendChild(dot1);

    let dot2 = document.createElement("div");
    dot2.classList.add("dot");
    topDiv.appendChild(dot2);


    let midleDiv = document.createElement("div");
    midleDiv.id = "midleDots";
    gamingDice.appendChild(midleDiv);

    let dot3 = document.createElement("div");
    dot3.classList.add("dot");
    bottomDiv.appendChild(dot3);


    let bottomDiv = document.createElement("div");
    bottomDiv.id = "bottomDots";
    gamingDice.appendChild(bottomDiv);

    let dot4 = document.createElement("div");
    dot4.classList.add("dot");
    bottomDiv.appendChild(dot4);

    let dot5 = document.createElement("div");
    dot5.classList.add("dot");
    bottomDiv.appendChild(dot5);
}

function gamingDice4() {
    let valueDice = document.createElement("div");
    valueDice.id = "valueDice6";
    gamingDice.appendChild(valueDice);


    let topDiv = document.createElement("div");
    topDiv.id = "topDots";
    gamingDice.appendChild(topDiv);

    let dot1 = document.createElement("div");
    dot1.classList.add("dot");
    topDiv.appendChild(dot1);

    let dot2 = document.createElement("div");
    dot2.classList.add("dot");
    topDiv.appendChild(dot2);

    let dot3 = document.createElement("div");
    dot3.classList.add("dot");
    bottomDiv.appendChild(dot3);


    let bottomDiv = document.createElement("div");
    bottomDiv.id = "bottomDots";
    gamingDice.appendChild(bottomDiv);

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