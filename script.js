let rockCheckBox = document.getElementById("Rock");
let paperCheckBox = document.getElementById("Paper");
let scissorsCheckBox = document.getElementById("Scissors");

rockCheckBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        paperCheckBox.checked = false;
        scissorsCheckBox.checked = false;
    }
});

paperCheckBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        rockCheckBox.checked = false;
        scissorsCheckBox.checked = false;
    }
});

scissorsCheckBox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        paperCheckBox.checked = false;
        rockCheckBox.checked = false;
    }
});

let playButton = document.getElementById("playButton");
let resultText = document.getElementById("ResultText")

playButton.addEventListener("click", (event) =>{
    let computerMove = getRandomMove();
    let playerMove = "";
    if (rockCheckBox.checked)
        playerMove = "rock";
    else if (paperCheckBox.checked)
        playerMove = "paper";
    else if (scissorsCheckBox.checked)
        playerMove = "scissors";
    else{
        alert("You have to choose a move!");
        return;
    }

    // alert("The computer is choosing!!! Exciting...");

    let resultMessage = ""

    if (playerMove == computerMove)
        resultMessage = `It's a Tie! Both you and the computer chose ${playerMove}.`
    else{
        switch(computerMove){
            case "rock":
                if (playerMove == "paper")
                    resultMessage = `You won! The computer chose ${computerMove} and you chose ${playerMove}` 
                else
                    resultMessage = `You Lost! The computer chose ${computerMove} and you chose ${playerMove}` 
                break;
            case "paper":
                if (playerMove == "scissors")
                    resultMessage = `You won! The computer chose ${computerMove} and you chose ${playerMove}` 
                else
                    resultMessage = `You Lost! The computer chose ${computerMove} and you chose ${playerMove}` 
                break;
            case "scissors":
                if (playerMove == "rock")
                    resultMessage = `You won! The computer chose ${computerMove} and you chose ${playerMove}` 
                else
                    resultMessage = `You Lost! The computer chose ${computerMove} and you chose ${playerMove}` 
                break;
        }
    }


    resultText.textContent = resultMessage;

});

function getRandomMove(){
    switch(Math.floor(Math.random() * 3) + 1){
        case 1:
            return  "rock";
        case 2:
            return  "paper";
        case 3:
            return  "scissors";
    }
}