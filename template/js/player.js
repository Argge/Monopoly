import { playerPosCheck } from "./player-position-check.js";

const socket = io(`http://${window.location.hostname}:3200`);

const cards = [
    document.getElementById("playerSec1"),
    document.getElementById("playerSec2"),
    document.getElementById("playerSec3"),
    document.getElementById("playerSec4"),
    document.getElementById("playerSec5"),
    document.getElementById("playerSec6"),
    document.getElementById("playerSec7"),
    document.getElementById("playerSec8"),
    document.getElementById("playerSec9"),
    document.getElementById("playerSec10"),    
    document.getElementById("playerSec11"),
    document.getElementById("playerSec12"),
    document.getElementById("playerSec13"),
    document.getElementById("playerSec14"),
    document.getElementById("playerSec15"),
    document.getElementById("playerSec16"),
    document.getElementById("playerSec17"),
    document.getElementById("playerSec18"),
    document.getElementById("playerSec19"),
    document.getElementById("playerSec20"),
    document.getElementById("playerSec21"),
    document.getElementById("playerSec22"),
    document.getElementById("playerSec23"),
    document.getElementById("playerSec24"),
    document.getElementById("playerSec25"),
    document.getElementById("playerSec26"),
    document.getElementById("playerSec27"),
    document.getElementById("playerSec28"),
    document.getElementById("playerSec29"),
    document.getElementById("playerSec30"),
    document.getElementById("playerSec31"),
    document.getElementById("playerSec32"),
    document.getElementById("playerSec33"),
    document.getElementById("playerSec34"),
    document.getElementById("playerSec35"),
    document.getElementById("playerSec36"),
    document.getElementById("playerSec37"),
    document.getElementById("playerSec38"),
    document.getElementById("playerSec39"),
    document.getElementById("playerSec40"),
];

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