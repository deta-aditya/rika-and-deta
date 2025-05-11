import { css } from "@emotion/react";
import { TitleProps } from "./Title.props";

export const title = (params: TitleProps) => css`
  margin: 0;
  font-family: "Pinyon Script", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: ${params.size === 'large' ? '60px' : '30px'};
  color: ${params.color === 'black' ? '#000' : '#fff'};

  .amp {
    font-family: "Gwendolyn", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: ${params.size === 'large' ? '48px' : '20px'};;
  }
`;
