//react
import { useState, useEffect } from "react";

//helper
import { PLAYER } from "../helper/Players";

//hooks
import { useGameContext } from "./useGameContext";

//react-router-dom
import { useNavigate } from "react-router-dom";

//local type
interface WinnerType {
  grid: null | Array<number>;
  player: string | null;
}

interface StateType {
  grid: Array<number | null>;
  currentPlayer: string;
}

//init state
const INIT_WINNER_STATE: WinnerType = {
  grid: null,
  player: null,
};

const INIT_STATE: StateType = {
  grid: Array(9).fill(null),
  currentPlayer: PLAYER.p2,
};

const POSSIBILITIES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

function useGame() {
  const data = useGameContext();
  const navigate = useNavigate();
  const [locked, setLocked] = useState(false);
  const [game, setGame] = useState(INIT_STATE);
  const [winner, setWinner] = useState(INIT_WINNER_STATE);

  function handleWinner(marked: Array<number>) {
    setWinner({
      grid: marked,
      player: game.currentPlayer === PLAYER.p1 ? PLAYER.p1 : PLAYER.p2,
    });
  }

  useEffect(() => {
    if (data.p1 === "" || data.p2 === "") navigate("/");
  }, []);

  useEffect(() => {
    checkEndGame();
    checkGameLocked();
  }, [game]);

  function handleOnClick(index: number, player: string) {
    if (winner.player) return;
    if (game.grid[index] != null) return;
    setGame((prevState) => {
      const array = [...prevState.grid];
      array[index] = player === "p1" ? 1 : 2;
      return {
        grid: array,
        currentPlayer: prevState.currentPlayer === "p1" ? "p2" : "p1",
      };
    });
  }

  function checkGameLocked() {
    const gameIsLocked = game.grid.every((grid) => grid != null);
    if (gameIsLocked) setLocked(true);
  }

  function checkEndGame() {
    for (let row: number = 0; row < 8; row++) {
      if (
        game.grid[POSSIBILITIES[row][0]] === game.grid[POSSIBILITIES[row][1]] &&
        game.grid[POSSIBILITIES[row][0]] === game.grid[POSSIBILITIES[row][2]] &&
        game.grid[POSSIBILITIES[row][0]] != null
      ) {
        handleWinner(POSSIBILITIES[row]);
        break;
      }
    }
  }

  function handleOnRevenge() {
    setLocked(false);
    setGame(INIT_STATE);
    setWinner(INIT_WINNER_STATE);
  }

  const handleOnBack = () => navigate("/");

  return {
    data,
    game,
    winner,
    locked,
    handleOnBack,
    handleOnClick,
    handleOnRevenge,
  };
}

export { useGame };
