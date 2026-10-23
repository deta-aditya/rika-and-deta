import { css } from '@emotion/react'

export const bgLayers = css`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: linear-gradient(180deg, #8fc6ec 0%, #cae7f6 100%);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.18) 100%);
    pointer-events: none;
  }
`

export const bgLayer = css`
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1.1s ease;
  will-change: opacity;
`

export const bgLayerActive = css`
  opacity: 1;
`

export const bgImage = css`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const bgImageBlurred = css`
  filter: blur(14px);
  transform: scale(1.06);
`

export const bgImageEdgeBlurBottom = css`
  mask-image: linear-gradient(to bottom, transparent 55%, #000 100%);
`

export const bgImageEdgeBlurTop = css`
  mask-image: linear-gradient(to top, transparent 55%, #000 100%);
`
