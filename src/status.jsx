export default Winner;
import CalculateWinner from './playBord.jsx'
const Winner = CalculateWinner(squares);
  let status;
  if (Winner) {
    status = "Winner: " + Winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
