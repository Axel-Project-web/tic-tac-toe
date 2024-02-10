//react
import { MouseEventHandler } from "react";

//styled-components
import styled from "styled-components";

//interface
interface PropType {
  text: string;
  backgroundColor: string;
  onClick: MouseEventHandler;
}

//internal components
const Component = styled.button<{ $bgColor?: string }>`
  width: 150px;
  height: 50px;

  border: none;
  border-radius: 5px;

  cursor: pointer;

  color: white;
  margin-top: 40px;

  //custom color
  background-color: ${(props) => (props.$bgColor ? props.$bgColor : "red")};
  box-shadow: 0px 0px 6px 0px
    ${(props) => (props.$bgColor ? props.$bgColor : "red")};

  //animation
  transition-duration: 0.3s;
  &:hover {
    text-shadow: 0px 0px 4px white;
  }
`;

export default function Button({ onClick, backgroundColor, text }: PropType) {
  return (
    <Component
      onClick={onClick}
      $bgColor={backgroundColor}
    >
      {text}
    </Component>
  );
}
