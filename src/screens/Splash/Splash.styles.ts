import { css } from "@emotion/react";

export const splash = css`
  width: 100dvw;
  height: 100dvh;
  padding: 48px 24px;
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
      font-size: 18px;
    }
  }
`;
