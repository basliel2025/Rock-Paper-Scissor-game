 let humanScore =0;
 let computerScore =0;
function getComputerChoice(){
const choice = ['rock','paper','scissors'];
const pick = choice[Math.floor(Math.random()*choice.length)];
    return pick;
 }
     const displayScore = document.getElementById('displayScore');
     const playerScore = document.getElementById('playerScore');
     const computerScored = document.getElementById('computerScore');
      let rock = document.getElementById('rock');
      let paper = document.getElementById('paper');
      let scissors = document.getElementById('scissors');
      function playRound(e,humanChoose, computerChoose){
        var button = e.target;
        if(humanChoose === 'rock' && computerChoose === 'paper'){
            displayScore.textContent='you lose, paper beat rock';
            computerScored.textContent= 'computer: ' + computerScore++;
        }
        else if(humanChoose === 'paper' && computerChoose === 'scissors'){
            displayScore.textContent='you lose, scissors beat paper';
            computerScored.textContent= 'computer: ' + computerScore++;
        }
        else if(humanChoose === 'scissors' && computerChoose === 'rock'){
            displayScore.textContent='you lose, rock beat scissors';
            computerScored.textContent= 'computer: ' + computerScore++;
        }
        else if(humanChoose === 'scissors' && computerChoose === 'paper'){
            displayScore.textContent='you win, scissors beat paper';
            playerScore.textContent= 'player: ' + humanScore++;
        }
        else if(humanChoose === 'paper' && computerChoose ==='rock'){
            displayScore.textContent='you win, paper beat rock';
            playerScore.textContent= 'player: ' + humanScore++;
        }
        else if(humanChoose === 'rock' && computerChoose ==='scissors'){
            displayScore.textContent='you win, rock beat scissors';
            playerScore.textContent= 'player: ' + humanScore++;
        }
        else if(humanChoose === 'rock' && computerChoose==='rock'){
            displayScore.textContent='you both picked rock and it is a draw';
        }
        else if(humanChoose==='paper' && computerChoose ==='paper'){
            displayScore.textContent='you both picked paper so it is a draw';
        }
        else if(humanChoose==='scissors' && computerChoose==='scissors'){
            displayScore.textContent='you both picked scissors so it is a draw';
        }
      
      
      if(humanScore===5 && computerScore <5){
        displayScore.textContent='you win ' + humanScore + '-'+ computerScore;
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
      }
      else if(humanScore<5 && computerScore ===5){
        displayScore.textContent='you lost ' + computerScore + '-'+ humanScore;
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
      }
      else{
        displayScore.textContent='it is a draw';
      }
    }
      rock.addEventListener('click', function(e){
        playRound(e, 'rock', getComputerChoice());
      });
      paper.addEventListener('click', function(e){
        playRound(e, 'paper', getComputerChoice());
      });
      scissors.addEventListener('click', function(e){
        playRound(e, 'scissors', getComputerChoice());
      });