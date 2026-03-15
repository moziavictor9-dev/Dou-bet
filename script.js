let bets = [];

function placeBet(team, odds){

let exists = bets.find(bet => bet.team === team);

if(exists){
return;
}

bets.push({team:team, odds:odds});

updateBetSlip();

}

}

function updateBetSlip(){

let betSlip = document.getElementById("betSlip");
betSlip.innerHTML = "";

bets.forEach((bet,index)=>{

betSlip.innerHTML += `
<p>
${bet.team} - ${bet.odds}
<button onclick="removeBet(${index})">❌</button>
</p>
`;

});

}

function removeBet(index){

bets.splice(index,1);
updateBetSlip();

}

function calculateWinnings(){

let stake = document.getElementById("stake").value;

let totalOdds = 1;

bets.forEach(bet=>{
totalOdds *= bet.odds;
});

let win = stake * totalOdds;

document.getElementById("totalOdds").innerText =
"Total Odds: " + totalOdds.toFixed(2);

document.getElementById("potentialWin").innerText =
"Potential Win: $" + win.toFixed(2);

}
function placeFinalBet(){

if(bets.length === 0){
alert("No bets selected");
return;
}

let stake = document.getElementById("stake").value;

if(!stake){
alert("Enter a stake amount");
return;
}

document.getElementById("betMessage").innerText =
"Bet placed successfully!";

bets = [];
updateBetSlip();

document.getElementById("stake").value = "";

document.getElementById("totalOdds").innerText = "";
document.getElementById("potentialWin").innerText = "";

             }
