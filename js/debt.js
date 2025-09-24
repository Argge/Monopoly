function debt() {
    if (player1.bank >= 5000) {
        player1.bank -= 5000;
    }
    // DEBT LOGIC
    else if (player1.bank < 5000) {
        let debt = 0;
        debt = 5000 - player1.bank;
        player1.debt += debt;
        player1.bank = 0;
    }
}