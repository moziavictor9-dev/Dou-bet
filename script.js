let betSlip = [];

function placeBet(team, odd) {
    betSlip.push({team: team, odd: odd});
    displayBets();
}

function displayBets() {
    let slip = document.getElementById("betSlip");
    slip.innerHTML = "";

    betSlip.forEach(function(bet){
        let item = document.createElement("p");
        item.textContent = bet.team + " - " + bet.odd;
        slip.appendChild(item);
    });
}
