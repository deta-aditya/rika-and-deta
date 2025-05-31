import { css } from "@emotion/react";

export const mediaPreview = (focused: boolean) => css`
  position: absolute;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0,0,0, ${focused ? 1 : 0.6});
  top: 0;
  left: 0;
  z-index: 100;
  animation: fadeIn 0.2s ease-in;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img, video {
    width: 100%;
  }

  video {
    max-height: 80dvh;
  }

  .close-button {
    align-self: flex-end;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 24px;
    padding: 16px;
  }
`;
