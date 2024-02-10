//styled-components
import styled from "styled-components";

//helper
import { COLOR } from "../helper/Color";
import { PLAYER } from "../helper/Players";

//hooks
import { useHome } from "../hooks/useHome";

//components
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import HomeBar from "../components/HomeBar";
import Divisor from "../components/Divisor";

//internal components
const Main = styled.main`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 50px;
`;

const Description = styled.h4`
  color: white;
  font-family: inter;
  font-weight: normal;
`;

export default function Home() {
  const { onPlay, players, handleChange } = useHome();

  return (
    <Main>
      <Title>Tic Tac Toe</Title>
      <br />
      <Description>
        It is so perfect that there was no second version
      </Description>
      <br />
      <br />
      <HomeBar />
      <br />
      <br />
      <Input
        name={PLAYER.p1}
        value={players.p1}
        placeholder="Player 1"
        $dotColor={COLOR.green}
        onChange={handleChange}
      />
      <Divisor />
      <Input
        name={PLAYER.p2}
        value={players.p2}
        $dotColor={COLOR.red}
        placeholder="Player 2"
        onChange={handleChange}
      />
      <Button
        text="PLAY"
        onClick={() => onPlay()}
        backgroundColor={COLOR.blue}
      />
    </Main>
  );
}
