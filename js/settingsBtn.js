
const gui = document.getElementById("gui");
let randomBtn = document.getElementById("randomBtn");

// let openClose = false;
// settingsBtn.addEventListener("click", () => {
//     if (openClose === false) {
//         openClose = true;
//         settingsWinCreate();
//     }
//     else {
//         openClose = false;
//         settingsWinDelete();
//     }
// });

function settingsWinCreate() {
    const mainWin = document.createElement("div"); 
    mainWin.id = "settingsMenu";
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

    let returnBtn = document.createElement("button");
    returnBtn.id = "returnToMenuBtn";
    returnBtn.classList.add("setBtn");
    returnBtn.textContent = "BACK TO MENU";
    mainWin.appendChild(returnBtn);
}

function settingsWinDelete() {
    let mainWin = document.getElementById("settingsMenu");
    gui.removeChild(mainWin);
}

export { settingsWinCreate, settingsWinDelete };