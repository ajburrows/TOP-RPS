console.log("Hello World");

function getComputerChoice(){
    let choiceNum = Math.floor(Math.random() * 3);
    let choice;
    switch (choiceNum){
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scisscors";
            break;
        default:
            choice = "choice is greater than 2";
            break;
    }
    return choice;
}

function getHumanChoice(){
    let p1Move = prompt("Enter your move: Rock, Paper, or Scissors").toLowerCase();
    return p1Move;
}

while (true){
    let computerMove = getComputerChoice();
    let humanMove = getHumanChoice();
    let computerWins = 0;
    
    if (computerMove == humanMove){
        console.log("Tie");
    }
    else{
        if ((computerMove == "rock" && humanMove == "paper")    ||
            (computerMove == "paper" && humanMove == "scissors") || 
            (computerMove == "scissors" && humanMove == "rock")) 
        {
            console.log("Computer Wins");
        }
        else{
            console.log("Human Wins");
        }
    }
}