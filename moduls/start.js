function start(playerName) {
    if (playerName.lapsNew !== playerName.lapsOld) {
        const startReward = 10000;
        
        if (playerName.debt > 0) {
            playerName.debt -= startReward;
            if (playerName.debt < 0) {
                playerName.bank += Math.abs(playerName.debt);
                playerName.debt = 0;
                console.log(playerName.lapsNew);
                console.log(`${playerName}: + ${startReward}$`);
                console.log(`${playerName}: + ${playerName.debt}$`);
            }
        }
        else {
            playerName.bank += startReward;
            console.log(playerName.lapsNew);
            console.log(`${playerName}: +${startReward}$`);
        }
        return true;
    }
    else {
        return false;
    }
}

module.exports = { start };