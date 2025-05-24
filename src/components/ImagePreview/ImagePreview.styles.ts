import { css } from "@emotion/react";

export const imagePreview = css`
  position: absolute;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0,0,0, 0.6);
  top: 0;
  left: 0;
  z-index: 100;
  animation: fadeIn 0.2s ease-in;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }
`;
