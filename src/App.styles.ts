import { css } from "@emotion/react";

export const app = css`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  background: #000;
  background: linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(51, 51, 51, 1) 50%, rgba(0, 0, 0, 1) 100%);
  
  .app-content {
    width: 100dvw;
    height: 100dvh;
    max-width: 500px;
    overflow: hidden;
    position: relative;
  }
`;
