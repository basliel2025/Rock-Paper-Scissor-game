 let humanScore =0;
 let computerScore =0;
function getComputerChoice(){
const choice = ['rock','paper','scissors'];
const pick = choice[Math.floor(Math.random()*choice.length)];
    return pick;
 }
      function getHumanChoice(){
        let value ;
        while(true){
            value = prompt('enter value');
            if (value === null){
                return null;
            }
             if(value == 'rock' || value == 'paper' || value=='scissors'){
                return value;
            }
             else{
                alert(`invalid input`);
            }
        }
      }
      function playRound(humanChoose, computerChoose){
        if(humanChoose=== null){
            console.log('Quit match');
        }
       else if(humanChoose === 'rock' && computerChoose === 'paper'){
            console.log('you lose, paper beat rock');
            computerScore+=1;
        }
        else if(humanChoose === 'paper' && computerChoose === 'scissors'){
            console.log('you lose, scissors beat paper');
            computerScore+=1;
        }
        else if(humanChoose === 'scissors' && computerChoose === 'rock'){
            console.log('you lose, rock beat scissors');
            computerScore+=1;
        }
        else if(humanChoose === 'scissors' && computerChoose === 'paper'){
            console.log('you win, scissors beat paper');
            humanScore+=1;
        }
        else if(humanChoose === 'paper' && computerChoose ==='rock'){
            console.log('you win, paper beat rock');
            humanScore+=1;
        }
        else if(humanChoose === 'rock' && computerChoose ==='scissors'){
            console.log('you win, rock beat scissors');
            humanScore+=1;
        }
        else if(humanChoose === 'rock' && computerChoose==='rock'){
            console.log('you both picked rock and it is a draw');
        }
        else if(humanChoose==='paper' && computerChoose ==='paper'){
            console.log('you both picked paper so it is a draw');
        }
        else if(humanChoose==='scissors' && computerChoose==='scissors'){
            console.log('you both picked scissors so it is a draw');
        }
      }
      let score = 0;
      while(score<5){
        let human = getHumanChoice();
        if(human === null){
            console.log('Quit match');
            break;
        }
      playRound(human ,getComputerChoice());
      score++;
      }
      if(humanScore>computerScore){
        console.log('you win ' + humanScore + '-'+ computerScore);
      }
      else if(humanScore<computerScore){
        console.log('you lost ' + computerScore + '-'+ humanScore);
      }
      else{
        console.log('it is a draw');
      }
