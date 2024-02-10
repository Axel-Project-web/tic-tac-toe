//hooks
import { useGame } from "../hooks/useGame";

//helper
import { COLOR } from "../helper/Color";
import { PLAYER } from "../helper/Players";

//styled-components
import styled from "styled-components";

//assets
import x_icon from "../assets/x.svg";
import circle_icon from "../assets/circle.svg";

//internal components
import Title from "../components/Title";
import Modal from "../components/Modal";
import Square from "../components/Square";
import DivisorGame from "../components/DivisorGame";

//internal components
const Main = styled.main`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 50px;
`;

const Grid = styled.div`
  gap: 20px;
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(3, 100px);
`;

//local types
interface FigureType {
  [index: number]: any;
  1: string;
  2: string;
}

const FIGURE: FigureType = {
  1: x_icon,
  2: circle_icon,
};

export default function Game() {
  const {
    data,
    game,
    locked,
    winner,
    handleOnBack,
    handleOnClick,
    handleOnRevenge,
  } = useGame();

  return (
    <Main>
      {(winner.grid || locked) && (
        <Modal
          title={locked ? "GAME LOCKED" : "END OF GAME"}
          onBack={handleOnBack}
          onRevenge={handleOnRevenge}
        />
      )}
      <Title>Tic Tac Toe</Title>
      <DivisorGame
        winner={winner.player}
        nicknamePlayer1={data.p1}
        nicknamePlayer2={data.p2}
        rightLineColor={COLOR.red}
        leftLineColor={COLOR.green}
        turn={game.currentPlayer === PLAYER.p1 ? PLAYER.p2 : PLAYER.p1}
      />
      <Grid>
        {game.grid.map((square: number | null, index: number) => (
          <Square
            key={index}
            $someWin={
              winner.grid
                ? winner.grid.some((_index: number) => _index === index)
                : false
            }
            $actived={!!square}
            $src={square != null ? FIGURE[square] : ""}
            onClick={() => handleOnClick(index, game.currentPlayer)}
          />
        ))}
      </Grid>
    </Main>
  );
}
