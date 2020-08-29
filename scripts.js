const wheelNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 , 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 28, 29, 30, 30, 32, 33, 34, 35, 36]



function rollTheWheel() {
    function getInputValue() {
        var winningNumber = document.body.querySelector('H1').innerHTML;
        var playersInput = document.getElementById("players-input").value;
        
        console.log(playersInput);
    
        if (playersInput === winningNumber) {
            document.getElementById("wallet").innerHTML = (+walletBalance + +currentBet * +currentBet);
            console.log("winner");
        } else if (playersInput == "even" && (winningNumber % 2 === 0) ) {
            document.getElementById("wallet").innerHTML = (+walletBalance + +currentBet);
            console.log("winner, even");
        } else if (playersInput == "odd" && (winningNumber % 2 === 1) ) {
            document.getElementById("wallet").innerHTML = (+walletBalance + +currentBet);
            console.log("winner, odd");
        } else {
            console.log("loser");
        }
    }

    winningNumber = wheelNumbers[Math.floor(Math.random() * wheelNumbers.length)];

    var node = document.createElement("H1");
    var nodeText = document.createTextNode(winningNumber);
    node.appendChild(nodeText);
    document.getElementById("result").appendChild(node);

    currentBet = document.getElementById("bet").value;
    walletBalance = document.getElementById("wallet").innerHTML;
    document.getElementById("wallet").innerHTML = (walletBalance - currentBet);
    
    

    getInputValue();

    if (winningNumber % 2 === 1) {
        console.log("odd number");
    }
}

function cashOut() {
    var node = document.createElement("H1");
    var nodeText = document.createTextNode(document.getElementById("wallet").innerHTML);
    node.appendChild(nodeText);
    document.getElementById("cash-out-button").appendChild(node);
}


