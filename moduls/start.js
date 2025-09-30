function start(playerName) {
    if (playerName.lapsNew !== playerName.lapsOld) {
        const startReward = 10000;

        if (playerName.debt === 0) {
            playerName.bank += startReward;
            console.log(playerName.lapsNew);
            console.log(`${playerName}: +${startReward}$`);
        }
        else {
            playerName.debt -= startReward;
            if (playerName.debt === 0) {
                playerName.bank += startReward;
                console.log(playerName.lapsNew);
                console.log(`${playerName}: +${startReward}$`);
            }
            else if (playerName.debt < 0) {
                playerName.bank += playerName.debt;
                console.log(playerName.lapsNew);
                console.log(`${playerName}: + ${startReward}$`);
                console.log(`${playerName}: + ${playerName.debt}$`);
                playerName.debt = 0;
            }
        }
        return true;
    }
    else {
        return false;
    }
}

module.exports = { start };