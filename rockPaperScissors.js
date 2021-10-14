const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    } if(userInput === 'bomb'){
      return userInput;
    }
    else{
      console.log('Error message');
    }
  }
  /*Testing to see f it is working as expected
  console.log(getUserChoice('paper'));
  console.log(getUserChoice('fork')); */
  const getComputerChoice = () => {
   randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissors';
      break;
    }
  }
  console.log(getComputerChoice());
  const determineWinner = (userChoice,computerChoice) => {
    if(userChoice  === computerChoice){
      return 'Game was a tie';
    }if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer has won';
      }
    if(userChoice === 'bomb'){
        return 'User has won';
      }
      else{
        return 'User has won';   }
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors' || computerChoice === 'rock'){
        return 'Winner';
      }
    }
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock' || computerChoice === 'paper'){
        return 'Winner';
      }
    }
  }
  //Testing to see f it is working as expected
  console.log(determineWinner('bomb','rock'));
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You picked '+ userChoice);
    console.log('Computer picked '+computerChoice );
    console.log(determineWinner(userChoice,computerChoice));
  }
  playGame();
  