function getComputerChoice(){
    let number = Math.floor(Math.random()*3 +1);
    switch(number){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}


function playRound (playerSelection, computerSelection){
   if (playerSelection === computerSelection){
     return "tie " + " " + playerSelection + " " + computerSelection;
   }
   else if (playerSelection  === "rock" && computerSelection === "scissors" ||
            playerSelection  === "paper" && computerSelection === "rock"  ||
            playerSelection  === "scissors"  && computerSelection === "paper")
        {
     return "player" + " " + playerSelection + " " +"beats" + " " +computerSelection;
   }
   else return "computer" + " " + computerSelection + " " + "beats" + " " + playerSelection; 

}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i<5; i++){
       const playerSelection = prompt("rock paper or scissors").toLowerCase();

       const computerSelection = getComputerChoice();
       const outcome = playRound(playerSelection, computerSelection);
       console.log(outcome);
       if (outcome.slice(0,6) == "player"){
        playerScore++
       }
       else if (outcome.slice(0,8)== "computer"){
        computerScore++
       }
       
}
    console.log("player score" + playerScore);
    console.log("computer score" + computerScore);   
    
    }


game(); 




