// MyContext.tsx
import { PropsWithChildren, createContext, useState } from "react";

// Define el tipo para el contexto
type GameContextType = {
  p1: string;
  p2: string;
  setPlayers: (p1: string, p2: string) => void;
};

// Crea el contexto
const GameContext = createContext<GameContextType | undefined>(undefined);

// Proveedor del contexto
function GameProvider({ children }: PropsWithChildren) {
  const [game, setGame] = useState({
    p1: "",
    p2: "",
  });

  const setPlayers = (p1: string, p2: string) => setGame({ p1, p2 });

  return (
    <GameContext.Provider value={{ ...game, setPlayers }}>
      {children}
    </GameContext.Provider>
  );
}

export { GameContext };
export default GameProvider;
