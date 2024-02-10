//react
import { MouseEventHandler } from "react";

//styled-components
import styled from "styled-components";

//internal components
const Wrapper = styled.div`
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 380px;
  height: 180px;

  border-radius: 10px;

  backdrop-filter: blur(6px);
  background-color: rgba(30, 30, 30, 0.6);

  padding: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 400;
  font-family: inter;
  text-shadow: 0px 0px 4px white;
`;

const Keyboard = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  column-gap: 15px;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button<{ $bgColor: string }>`
  width: 120px;
  height: 50px;

  color: white;

  border: none;
  cursor: pointer;
  border-radius: 5px;

  font-weight: 500;

  //animation
  transition-duration: 0.3s;

  &:hover {
    text-shadow: 0px 0px 4px white;
  }

  //custom color
  background-color: ${(props) => props.$bgColor};
  box-shadow: 0px 0px 4px 0px ${(props) => props.$bgColor};
`;

const OrTag = styled.span`
  color: white;
  font-family: inter;
`;

//local type
interface PropType {
  title: string;
  onBack: MouseEventHandler;
  onRevenge: MouseEventHandler;
}

export default function Modal({ title, onBack, onRevenge }: PropType) {
  return (
    <Wrapper>
      <Box>
        <Title>{title}</Title>
        <Keyboard>
          <Button
            onClick={onBack}
            $bgColor="#D33A3A"
          >
            BACK
          </Button>
          <OrTag>OR</OrTag>
          <Button
            onClick={onRevenge}
            $bgColor="#E1D56A"
          >
            REVENGE
          </Button>
        </Keyboard>
      </Box>
    </Wrapper>
  );
}
