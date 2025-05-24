import { css } from "@emotion/react";

export const image = (loaded: boolean) => css`
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  position: relative;
  overflow: hidden;

  .image-shimmer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }

  img {
    width: 100%;
    height: 100%;
    display: ${loaded ? 'block' : 'none'};
    object-fit: cover;
  }
`;
