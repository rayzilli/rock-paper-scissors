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

function keepScore(outcome){

    // document.getElementById('player').textContent = "player score " + playerScore ;
    // document.getElementById('computer').textContent = "computer score " + computerScore;
     
    //    if (playerScore == 5 || computerScore == 5){
    //     document.getElementById('results').textContent ="GAME OVER" + computerScore + playerScore;
    //     game();
    //    }
        if (outcome.slice(0,6) == "player" ){
        playerScore++;
        document.getElementById('player').textContent = "player score " + playerScore ;
        document.getElementById('computer').textContent = "computer score " + computerScore;
       }
       else if(outcome.slice(0,8)== "computer"){
        computerScore++;
        document.getElementById('player').textContent = "player score " + playerScore ;
        document.getElementById('computer').textContent = "computer score " + computerScore;
       }
    
      
    //    document.getElementById('player').innerHTML = "player score" + playerScore ;
    //    document.getElementById('computer').textContent = "computer score" + computerScore;
    //   console.log("player score" + playerScore);
    //   console.log("computer score" + computerScore);   
   
    
}

function gameOver(){
    if (playerScore == 5 || computerScore == 5){
        document.getElementById('results').textContent ="GAME OVER";
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        game();
       }
}

function game(){
    playerScore = 0;
    computerScore = 0;
    // document.getElementById('player').textContent = "player score " + playerScore;
    // document.getElementById('computer').textContent = "computer score " + computerScore;

    
    
    document.getElementById('rock').addEventListener
       ('click', () => { const playerSelection = "rock";
       const computerSelection = getComputerChoice();
       const outcome = playRound(playerSelection, computerSelection);
       document.getElementById('results').textContent = outcome;
       keepScore(outcome);
       gameOver();
       
    })

    document.getElementById('paper').addEventListener
      ('click', () => { const playerSelection = "paper";
      const computerSelection = getComputerChoice();
      const outcome = playRound(playerSelection, computerSelection);  
      document.getElementById('results').textContent = outcome;
      keepScore(outcome);
      gameOver();
    })

    document.getElementById('scissors').addEventListener
     ('click', () => { const playerSelection = "scissors";
     const computerSelection = getComputerChoice();
     const outcome = playRound(playerSelection, computerSelection);
     document.getElementById('results').textContent = outcome;
     keepScore(outcome);
     gameOver();
   })
    
    

    //    if (outcome.slice(0,6) == "player"){
    //     playerScore++
    //    }
    //    else if (outcome.slice(0,8)== "computer"){
    //     computerScore++
    //    }
       
    // console.log("player score" + playerScore);
    // console.log("computer score" + computerScore);   
    
    }


game(); 




