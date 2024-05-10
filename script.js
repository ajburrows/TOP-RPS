
const container = document.getElementById("container");

const redPara = document.createElement("p");
redPara.textContent = "I'm red too!";
redPara.style.color = "red";

const blueH3 = document.createElement("h3");
blueH3.style.color = "blue";
blueH3.textContent = "I'm a blue h3!";

const newDiv = document.createElement("div");
newDiv.style.backgroundColor = "pink";
newDiv.style.border = "black";

container.appendChild(redPara);
container.appendChild(blueH3);
container.appendChild(newDiv);

const h1Div = document.createElement("h1");
const pDiv = document.createElement("p");
h1Div.textContent = "I'm in a div";
pDiv.textContent = "ME TOO!";





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