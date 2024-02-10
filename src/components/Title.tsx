//react
import { PropsWithChildren } from "react";

//styled-components
import styled from "styled-components";

//internal components
const H1 = styled.h1`
  width: fit-content;

  font-size: 3.2em;
  color: #6691ff;
  font-family: inter;
  text-shadow: 0px 0px 4px #6691ff;
`;

//constants
const DEFAULT_TITLE = "Your title here...";

export default function Title({ children }: PropsWithChildren) {
  return <H1>{children || DEFAULT_TITLE}</H1>;
}
