// code your solution here
function superbowlWin(array) {
    const winningGame = array.find(game => game.result === "W");
    return winningGame ? winningGame.year : undefined;
  }