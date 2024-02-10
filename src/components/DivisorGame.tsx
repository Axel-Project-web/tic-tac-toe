//styled-components
import styled from "styled-components";

//icons images
import x_icon from "../assets/x.svg";
import circle_icon from "../assets/circle.svg";

//helper
import { PLAYER } from "../helper/Players";

//internal components
const Wrapper = styled.div`
  width: fit-content;

  display: flex;
  column-gap: 40px;
  align-items: center;

  margin: 40px 0px;
`;

const Span = styled.span<{
  $icon: string;
  $lineColor: string;
  $isCurrentPlayer: boolean;
}>`
  width: 120px;
  height: 25px;
  color: white;
  font-size: 14px;
  font-family: inter;
  border-bottom: thin solid ${({ $lineColor }) => $lineColor};

  position: relative;

  &::before {
    content: "";
    width: 15px;
    height: 15px;

    background-position: center;
    background-image: url(${({ $icon }) => $icon});
    background-size: cover;

    right: 0px;
    position: absolute;
    top: calc(12.5px - 10px);
  }
`;

const Triangle = styled.div<{ $isActived: boolean }>`
  width: 12px;
  height: 12px;

  bottom: -20px;
  position: absolute;
  left: calc(60px - 6px);

  transition-duration: 0.3s;
  display: ${({ $isActived }) => ($isActived ? "block" : "none")};

  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

  background-color: #e1d56a;
`;

const WinnerMessage = styled.span<{ $isVisible: boolean }>`
  position: relative;

  ${({ $isVisible }) =>
    $isVisible &&
    `
      &::before {
        top: -20px;
        content: "Winner";
        position: absolute;
        left: calc(35px);

        color: #e1d56a;
        text-shadow: 0px 0px 4px #e1d56a;
      }
    `}
`;

const VSText = styled.span`
  font-size: 14px;
  color: #e1d56a;
  font-family: inter;
  font-weight: "bold";
  text-shadow: 0px 0px 4px #e1d56a;
`;

//local type
interface PropType {
  nicknamePlayer1: string;
  nicknamePlayer2: string;
  turn: string;
  winner: string | null;
  leftLineColor: string;
  rightLineColor: string;
}

export default function DivisorGame({
  turn,
  winner,
  leftLineColor,
  rightLineColor,
  nicknamePlayer2,
  nicknamePlayer1,
}: PropType) {
  return (
    <Wrapper>
      <Span
        $icon={circle_icon}
        $lineColor={leftLineColor}
        $isCurrentPlayer={turn === PLAYER.p1}
      >
        <Triangle $isActived={turn === PLAYER.p2} />
        <WinnerMessage $isVisible={winner === PLAYER.p1}>
          {nicknamePlayer1}
        </WinnerMessage>
      </Span>
      <VSText>VS</VSText>
      <Span
        $icon={x_icon}
        $lineColor={rightLineColor}
        $isCurrentPlayer={turn === PLAYER.p2}
      >
        <Triangle $isActived={turn === PLAYER.p1} />
        <WinnerMessage $isVisible={winner === PLAYER.p2}>
          {nicknamePlayer2}
        </WinnerMessage>
      </Span>
    </Wrapper>
  );
}
