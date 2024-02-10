//styled-components
import styled, { keyframes } from "styled-components";

//images
import x from "../assets/x.svg";
import circle from "../assets/circle.svg";
import icon from "../assets/pen-fight.svg";

//animations
const squareAnimation = keyframes`
  0% {
    transform: translateY(0px);
  } 50% {
    transform: translateY(-6px);
    box-shadow: 0px 0px 6px 0px #4167ca;
  } 100% {
    transform: translateY(0px);
  }
`;

//internal components
const Wrapper = styled.div`
  display: flex;
  column-gap: 25px;
  align-items: center;
`;

const Image = styled.img`
  width: 45px;
`;

const Square = styled.div`
  width: 30px;
  height: 30px;

  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  animation-duration: 1.5s;
  animation-name: ${squareAnimation};
  animation-iteration-count: infinite;

  background-color: #4167ca;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
`;

const AnimationWrapper = styled.div`
  display: flex;
  column-gap: 12px;
`;

export default function HomeBar() {
  return (
    <Wrapper>
      <Image src={icon} />
      <AnimationWrapper>
        <Square>
          <img
            src={x}
            alt="icon"
          />
        </Square>
        <Square>
          <img
            src={circle}
            alt="icon"
          />
        </Square>
        <Square>
          <img
            src={x}
            alt="icon"
          />
        </Square>
      </AnimationWrapper>
      <Image src={icon} />
    </Wrapper>
  );
}
