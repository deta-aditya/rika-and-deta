import { css } from "@emotion/react";

export const appButton = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 4px;
  
  .button {
    flex: 1;
    aspect-ratio: 1;
    background: linear-gradient(180deg, #0D0D0D 0%, #212121 100%);
    padding: 16px;
    border-radius: 16px;
  }

  .title {
    font-size: 12px;
    text-align: center;
  }
`;
