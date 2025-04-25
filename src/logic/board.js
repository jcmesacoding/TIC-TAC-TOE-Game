  import { WINNER_COMBOS } from "../constants.js"
  
  export const checkWinnerFrom = (boardToCheck) => {
    //Revisamos todas las combinaciones gandoras para ver si X u O gana.
    for(const combo of WINNER_COMBOS) {
      const [a, b, c] = combo 
      if (
        boardToCheck[a] && // 0 -> X u O
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a] // Deberia devolver X u O. 
      }
    }
    //Si no hay ganador
    return null 
  }

  export const checkEndGame = (newBoard) => {
    // revisamos si hay un empate
    // Si no hay mas espacios vacios en el tablero.
    return newBoard.every((square) => square !== null)
  }