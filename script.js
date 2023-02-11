function getComputerChoice(){
    let number = Math.floor(Math.random()*3 +1);
    if (number == 1){
        return "rock"
    }
    else if (number == 2){
        return "paper"
    }
    else return "scissors"
}


function playRound (playerSelection, computerSelection){
   if (playerSelection === computerSelection){
     return "tie " + playerSelection + " " + computerSelection;
   }
   else if (playerSelection  === "rock" && computerSelection === "scissors"){
     return "player wins "  + playerSelection + " " + computerSelection;
   }
   else if (playerSelection  === "paper" && computerSelection === "rock"){
     return "player wins " + playerSelection + " " + computerSelection; 
   }
   else if (playerSelection  === "scissors"  && computerSelection === "paper"){
     return "player wins " + playerSelection + " " + computerSelection;
   }
   else return "computer wins "  + computerSelection + " " + playerSelection ; 
  

}
function game(){
    for (let i = 0; i<5; i++){
       const playerSelection = prompt("rock, paper or scissors?").toLowerCase();
       const computerSelection = getComputerChoice();
       playRound()
       console.log(playRound (playerSelection, computerSelection));
    }
}



game(); 




