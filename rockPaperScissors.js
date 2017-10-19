const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput == 'rock' || userInput == 'paper' || userInput == 'scissors'){
    return userInput;
  }else{
    
    console.log('error');
  }
}

const getComputerChoice = ()=>{
  let randomNumber = Math.floor(Math.random() * 3);
  let result = '';
  switch(randomNumber){
    case '0':
      result = 'rock';
      break;
    case '1':
      result = 'scissors';
      break;
    case '2':
      result = 'paper';
      break;
    default:
      break;
 }
  return result;
}

const determineWinner = (userChoice, compChoice) => {
  let winnerIs = '';
  if(userChoice == 'rock'){
    
    if(compChoice == 'rock'){
      winnerIs = 'no one';
    }else if(compChoice == 'paper'){
      winnerIs = 'computer';
    }else{
      winnerIs = 'user';
    }
  }else if(userChoice == 'paper'){
    if(compChoice == 'paper'){
      winnerIs = 'no one';
    }else if(compChoice == 'scissors'){
      winnerIs = 'computer';
    }else{
      winnerIs = 'user';
    }
  }else{
    if(compChoice == 'paper'){
      winnerIs = 'user';
    }else if(compChoice == 'scissors'){
      winnerIs = 'no one';
    }else{
      winnerIs = 'computer';
    }
  }
  return winnerIs;
}

const playGame = () => {
  let userChoice = 'scissors';
  if(userChoice != 'bomb'){
    userChoice = getUserChoice(userChoice);
  let computerChoice = getComputerChoice();
  let result = determineWinner(userChoice,computerChoice);
  console.log(`winner is ${result}`);
  }else{
    console.log('user win');
  }
  
}

playGame()