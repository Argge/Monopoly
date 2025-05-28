const randomBtn = document.getElementById("randomBtn");

randomBtn.addEventListener("click", () => {
    let diceNumber = randomDiceNumber();
    console.log(diceNumber);
});




function randomDiceNumber() {
    let random = Math.floor((Math.random()*(7-1))+1);
    return random;
}