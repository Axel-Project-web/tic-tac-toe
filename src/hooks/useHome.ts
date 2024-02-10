//react
import { useState, ChangeEvent } from "react";

//react-router-dom
import { useNavigate } from "react-router-dom";

//hooks
import { useGameContext } from "./useGameContext";

//Local type
interface PlayersType {
  p1: string;
  p2: string;
}

//init state
const InitState: PlayersType = {
  p1: "",
  p2: "",
};

export function useHome() {
  const navigate = useNavigate();
  const gameContext = useGameContext();
  const [players, setPlayers] = useState(InitState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length > 15) return;
    const { name, value } = e.target;
    setPlayers({
      ...players,
      [name]: value,
    });
  }

  function onPlay() {
    if (players.p1 === "" || players.p2 == "") return;
    gameContext.setPlayers(players.p1, players.p2);
    navigate("/start");
  }

  return {
    onPlay,
    players,
    navigate,
    gameContext,
    handleChange,
  };
}
