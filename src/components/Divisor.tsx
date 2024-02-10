//styled-components
import styled from "styled-components";

//helper
import { COLOR } from "../helper/Color";

//internal components
const Wrapper = styled.div`
  width: 380px;
  height: auto;

  display: flex;
  column-gap: 20px;
  align-items: center;

  margin: 40px 0px;
`;

const Span = styled.span`
  font-size: 14px;
  color: #e1d56a;
  font-family: inter;
  text-shadow: 0px 0px 6px #e1d56a;
`;

const Hr = styled.hr<{ $lineColor: string }>`
  height: 1px;
  width: 160px;

  //custom line color
  border: thin solid ${({ $lineColor }) => ($lineColor ? $lineColor : "none")};
  box-shadow: 0px 0px 4px 0px
    ${({ $lineColor }) => ($lineColor ? $lineColor : "none")};
`;

export default function Divisor() {
  return (
    <Wrapper>
      <Hr $lineColor={COLOR.green} />
      <Span>VS</Span>
      <Hr $lineColor={COLOR.red} />
    </Wrapper>
  );
}
