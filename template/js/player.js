import { playerPosCheck } from "./player-position-check.js";

const socket = io(`http://${window.location.hostname}:3200`);

class Player {
    constructor(id, name, color) {
        this.id = id;
        this.name = name;
        this.color = color
        this.positionNew = 0;
        this.positionOld = 0;
        this.lapsNew = 0;
        this.lapsOld = 0;
        this.bank = 1000;
        this.debt = 0;
        this.cards = [];

        this.playerDom = document.createElement("div");
        this.playerDom.classList.add("player");
        this.playerDom.classList.add(this.color);
        this.playerDom.id = socket.id;
    }

    move(steps) {
        this.positionOld = this.positionNew;
        this.positionNew += steps;
        
        if (this.positionNew >= 40) {
            this.positionNew %= 40;
            this.lapsOld = this.lapsNew;
            this.lapsNew++;
            setTimeout( () => {
                if (this.lapsNew !== this.lapsOld) {
                    this.lapsOld++;
                }
            }, 1 ); 
        }
           
        playerRender(this.positionNew, this.positionOld);
        playerPosCheck();
    }
    
}

function playerRender(player) {
    if (cards[player.positionOld].contains(player.playerDom)) {
        cards[player.positionOld].removeChild(player.playerDom);
    }
    cards[player.positionNew].appendChild(player.playerDom);
}

export { Player }