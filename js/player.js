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
    positionNew = 0;
    positionOld = 0;
    lapsNew = 0;
    lapsOld = 0;
    bank = 1000;
    cards = [];

    move(steps) {
        this.positionOld = this.positionNew;
        this.positionNew += steps;
        
        if (this.positionNew >= 40) {
            this.lapsOld = this.lapsNew;
            this.lapsNew++;
            setTimeout( () => {
                if (this.lapsNew !== this.lapsOld) {
                    this.lapsOld++;
                }
            }, 1 );
        }

        if (this.positionNew === 40) {
        this.positionNew = 0;
        }
        else if (this.positionNew === 41) {
            this.positionNew = 1;
        }
        else if (this.positionNew === 42) {
            this.positionNew = 2;
        }
        else if (this.positionNew === 43) {
            this.positionNew = 3;
        }
        else if (this.positionNew === 44) {
            this.positionNew = 4;
        }
        else if (this.positionNew === 45) {
            this.positionNew = 5;
        }
           
        playerRender(this.positionNew, this.positionOld);
    }
}

function playerRender(positionNew, positionOld) {
    const player = document.createElement("div");
    player.id = "player";
    cards[positionNew].appendChild(player);
    cards[positionOld].innerHTML = "";
}

export { Player }