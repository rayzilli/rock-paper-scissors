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
   

    
    
    document.getElementById('rock').addEventListener
       ('click', () => { const playerSelection = "rock";
       const computerSelection = getComputerChoice();
       const outcome = playRound(playerSelection, computerSelection);
       document.getElementById('results').textContent = outcome;
    })

    document.getElementById('paper').addEventListener
      ('click', () => { const playerSelection = "paper";
      const computerSelection = getComputerChoice();
      const outcome = playRound(playerSelection, computerSelection);  
      document.getElementById('results').textContent = outcome;
    })

    document.getElementById('scissors').addEventListener
     ('click', () => { const playerSelection = "scissors";
     const computerSelection = getComputerChoice();
     const outcome = playRound(playerSelection, computerSelection);
     document.getElementById('results').textContent = outcome;
   })
    
    

    //    if (outcome.slice(0,6) == "player"){å
    //     playerScore++
    //    }
    //    else if (outcome.slice(0,8)== "computer"){
    //     computerScore++
    //    }
       
    // console.log("player score" + playerScore);
    // console.log("computer score" + computerScore);   
    
    }


game(); 




