// const cards = document.querySelectorAll("playerCardSec");

// cards.forEach( (e) => {
//     e.addEventListener("mouseenter", () => {
//         cardIndex = e;
//         renderCardInfoBtn(cardIndex);
//     });
// });

// function renderCardInfoBtn(cardIndex) { 
//     let infoBtn = document.createElement("button");
//     infoBtn.id = "cardInfoBtn";
//     infoBtn.textContent = "INFO";
//     cardIndex.appendChild(infoBtn);
// }

const sec2 = document.getElementById("playerSec2");

sec2.addEventListener("mouseenter", () => {
    renderCardInfoBtn();
});

function renderCardInfoBtn() { 
    let infoBtn = document.createElement("button");
    infoBtn.id = "cardInfoBtn";
    infoBtn.textContent = "INFO";
    sec2.appendChild(infoBtn);
}