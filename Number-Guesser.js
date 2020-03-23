let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
var globalTarget = 9;

// Write your code below:

function generateTarget(){
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanG, computerG, target){
    let counter1 = 0; // human counter
    let counter2 = 0; // computer counter
    globalTarget = target;
  
  var values = getAbsoluteDistance(humanG, computerG);
    if(values[0] == values[1]){
        return true;
    } 
    else if(values[0] < values[1]){
        return true;
    }
    else{
        return false;
    }
  
}


function updateScore(winner){
  if(winner == 'human'){
    humanScore+=1;
  }else{
    computerScore+=1;
  }
}

function advanceRound(){
  currentRoundNumber+=1;
}

function getAbsoluteDistance(human, computer){
  let counter1 = globalTarget - human;
  let counter2 = globalTarget - computer;
  
  return [counter1,counter2];
}

var target = generateTarget();
var res = compareGuesses(-1,7,target);
console.log(res);