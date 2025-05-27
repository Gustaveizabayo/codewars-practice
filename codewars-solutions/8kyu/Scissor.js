const rps = (p1, p2) => {

    if(p1 === p2){
      return "Draw!";
    }
  
  switch ( p1+ p2) {
      case "rockscissors" :
      return "Player 1 won!";
      case "scissorspaper" :
      return "Player 1 won!";
      case "paperrock" :
      return "Player 1 won!";
      default:
      return "Player 2 won!";
  }

  
};