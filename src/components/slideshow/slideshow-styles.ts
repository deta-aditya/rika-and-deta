import { css } from '@emotion/react'

export const slideshow = css`
  position: relative;
  margin: 0 8px 8px;
  z-index: 2;
`

export const viewport = css`
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid rgba(120, 175, 215, 0.5);
  box-shadow:
    inset 0 1px 0 #fff,
    0 1px 2px rgba(8, 40, 70, 0.08);
  background: rgba(220, 240, 255, 0.4);
`

export const slide = css`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.8s ease;
`

export const slideActive = css`
  opacity: 1;
`

export const navButton = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.85);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.55));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 14px rgba(8, 40, 70, 0.3), inset 0 1px 0 #fff;
  color: var(--ink);
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  transition: filter 0.15s ease;

  &:hover {
    filter: brightness(1.08);
  }
`

export const navPrev = css`
  left: 10px;
`

export const navNext = css`
  right: 10px;
`

export const dots = css`
  position: absolute;
  bottom: 12px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 7px;
`

export const dot = css`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 1px 3px rgba(8, 40, 70, 0.3);
`

export const dotActive = css`
  background: #fff;
`
