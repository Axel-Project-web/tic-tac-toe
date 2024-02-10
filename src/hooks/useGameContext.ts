//react
import { useContext } from "react";

//context
import { GameContext } from "../context/game.context";

// Hook personalizado para acceder al contexto
export function useGameContext() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useTodoContext debe usarse dentro de TodoProvider");
  }
  return context;
}
