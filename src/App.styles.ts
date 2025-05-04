import { css } from "@emotion/react";

export const splash = css`
  background-image: url('splash0.jpg');
  background-size: cover;
  background-position: center center;
  width: 100dvw;
  height: 100dvh;
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;  

    .wedding-date {
      margin-top: 4px;
      font-size: 20px;
    }
  }

`;
