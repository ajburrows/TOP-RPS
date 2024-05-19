let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rockButton");
rockButton.addEventListener("click", function(){
    playRound("rock");
})

const paperButton = document.querySelector(".paperButton");
paperButton.addEventListener("click", function(){
    playRound("paper");
})

const scissorsButton = document.querySelector(".scissorsButton");
scissorsButton.addEventListener("click", function(){
    playRound("scissors");
})


function getComputerChoice(){
    let choiceNum = Math.floor(Math.random() * 3);
    const compMoveText = document.querySelector(".compMoveText");
    let choice;
    switch (choiceNum){
        case 0:
            choice = "rock";
            compMoveText.innerHTML = "Rock";
            break;
        case 1:
            choice = "paper";
            compMoveText.innerHTML = "Paper";
            break;
        case 2:
            choice = "scissors";
            compMoveText.innerHTML = "Scissors";
            break;
        default:
            choice = "Invalid choice greater than 2";
            compMoveText.innerHTML = choice;
            break;
    }
    return choice;
}

function playRound(humanMove){
    const winnerText = document.querySelector(".winnerText");
    humanScoreText = document.querySelector(".humanScore");
    computerScoreText = document.querySelector(".computerScore");
    let computerMove = getComputerChoice();
    
    if (computerMove === humanMove){
        winnerText.innerHTML = "Tie!";
    }
    else{
        if ((computerMove == "rock" && humanMove == "scissors") ||
            (computerMove == "paper" && humanMove == "rock")    || 
            (computerMove == "scissors" && humanMove == "paper")) 
        {
            computerScore += 1;
            winnerText.innerHTML = "Computer Wins!";
            computerScoreText.innerHTML = computerScore;

        }
        else{
            humanScore += 1;
            winnerText.innerHTML = "Human Wins!";
            humanScoreText.innerHTML = humanScore;
        }
    }
}
