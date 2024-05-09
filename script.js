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