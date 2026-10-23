import { css } from '@emotion/react'

export const video = css`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.8s ease;
`

export const videoShown = css`
  opacity: 1;
`
