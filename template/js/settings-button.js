const gui = document.getElementById("gui");
let randomBtn = document.getElementById("randomBtn");

let openClose = false;
settingsBtn.addEventListener("click", () => {
    if (openClose === false) {
        openClose = true;
        settingsWinCreate();
        const continueBtn = document.getElementById("continueBtn");
        continueBtn.addEventListener("click", () => {
            openClose = false;
            settingsWinDelete();
        });
    }
    else {
        openClose = false;
        settingsWinDelete();
    }
});

function settingsWinCreate() {
    const mainWin = document.createElement("div"); 
    mainWin.id = "settingsMenu";
    mainWin.classList.add("menuPattern");
    gui.appendChild(mainWin);

    const logoImg = document.createElement("img");
    logoImg.id = "monopolyLogo";
    logoImg.src = "img/logo/white_logos/coca-cola_logo.png";
    mainWin.appendChild(logoImg);

    let continueBtn = document.createElement("button");
    continueBtn.id = "continueBtn";
    continueBtn.classList.add("setBtn");
    continueBtn.textContent = "CONTINUE";
    mainWin.appendChild(continueBtn);

    let rullesBtn = document.createElement("button");
    rullesBtn.id = "rullesBtn";
    rullesBtn.classList.add("setBtn");
    rullesBtn.textContent = "RULLLES";
    mainWin.appendChild(rullesBtn);

    let returnBtn = document.createElement("a");
    returnBtn.id = "returnToMenuBtn";
    returnBtn.classList.add("setBtn");
    returnBtn.textContent = "BACK TO MENU";
    returnBtn.href = "index.html";
    mainWin.appendChild(returnBtn);

    let authorText = document.createElement("p");
    authorText.classList.add("authorText");
    authorText.textContent = "GAME CREATED BY ARGGE";
    mainWin.appendChild(authorText);

    randomBtn.style.zIndex = "0";
}

function settingsWinDelete() {
    let mainWin = document.getElementById("settingsMenu");
    gui.removeChild(mainWin);
    randomBtn.style.zIndex = "3";
}

export { settingsWinCreate, settingsWinDelete };