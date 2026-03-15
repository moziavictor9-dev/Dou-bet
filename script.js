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

function calculateWinnings() {

    let stake = document.getElementById("stake").value;

    let totalOdds = 1;

    betSlip.forEach(function(bet){
        totalOdds *= bet.odd;
    });

    let potentialWin = stake * totalOdds;

    document.getElementById("totalOdds").textContent =
        "Total Odds: " + totalOdds.toFixed(2);

    document.getElementById("potentialWin").textContent =
        "Potential Win: $" + potentialWin.toFixed(2);
        }
