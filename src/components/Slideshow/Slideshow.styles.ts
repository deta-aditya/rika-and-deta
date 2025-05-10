import { css } from "@emotion/react";

export const slideshow = css`
  background-image: linear-gradient(
    to bottom,
  #e7ecef 0%,     /* soft sky blue/grey */
  #f0f2f1 30%,    /* misty cloud white */
  #d6d1ca 60%,    /* warm beige from the lower fog */
  #9fa59d 100%    /* muted greenish-grey for the vegetation and hills */
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const image = css`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1s ease-in-out;
`;

export const imageCurrent = (displayNext: boolean) => css`
  ${image}
  opacity: ${displayNext ? 0 : 1};
`;

export const imageNext = (displayNext: boolean) => css`
  ${image}
  opacity: ${displayNext ? 1 : 0};
`;
