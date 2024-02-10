//react
import { ChangeEvent } from "react";

//styled-Inputs
import styled from "styled-components";

//local type
interface PropType {
  name: string;
  value: string;
  placeholder?: string;
  $dotColor?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

//internal Inputs
const Wrapper = styled.div<{ $dotColor?: string }>`
  width: 100%;
  height: auto;
  max-width: 280px;

  position: relative;

  &::before {
    content: "";
    border: 50%;
    width: 10px;
    height: 10px;

    border-radius: 50%;

    right: 10px;
    position: absolute;
    top: calc(17.5px - 5px);

    background-color: ${({ $dotColor }) => ($dotColor ? $dotColor : "none")};
    box-shadow: 0px 0px 6px 0px
      ${({ $dotColor }) => ($dotColor ? $dotColor : "none")};
  }
`;

const Component = styled.input<{ $dotColor?: string }>`
  border: none;
  outline: none;
  border-radius: 5px;

  width: 100%;
  height: 35px;

  font-size: 14px;
  padding-left: 10px;

  background-color: #1e1e1e;
  color: ${({ $dotColor }) => ($dotColor ? $dotColor : "none")};

  &::placeholder {
    color: #666666;
  }
`;

export default function Input(props: PropType) {
  const { $dotColor } = props;
  return (
    <Wrapper $dotColor={$dotColor}>
      <Component
        {...props}
        autoComplete="off"
      />
    </Wrapper>
  );
}
