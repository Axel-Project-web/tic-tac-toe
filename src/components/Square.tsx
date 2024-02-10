//styled-components
import styled from "styled-components";

const Square = styled.button<{
  $actived: boolean;
  $src: string;
  $someWin: boolean;
}>`
  width: 100%;
  height: 100%;
  border-radius: 5px;

  transition-duration: 0.3s;

  ${({ $actived, $someWin, $src }) => {
    const styles = $actived
      ? `
          box-shadow: none; 
          background-size: 80px;
          background-position: center;
          ${
            $someWin
              ? `
                background-color: #66FFA3;
                box-shadow: 0px 0px 6px 0px #66FFA3;
              `
              : `background-color: #5C78C2;`
          }
          
          background-repeat: no-repeat;
          background-image: url(${$src});
        `
      : `background-color: #6691ff;
        box-shadow: 0px 0px 6px 0px #6691ff;`;
    return styles;
  }}

  cursor: pointer;
  border: none;
`;

export default Square;
