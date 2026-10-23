import { css } from '@emotion/react'

export const countdownSection = css`
  justify-content: center;
`

export const countdown = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  max-width: 720px;
  margin: 8px auto 0;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const cdBody = css`
  padding: 10px 12px 12px;
  text-align: center;
`

export const cdNum = css`
  font-size: clamp(34px, 5vw, 58px);
  font-weight: 300;
  letter-spacing: -0.03em;
  color: var(--ink);
  line-height: 1;
  font-variant-numeric: tabular-nums;
`

export const cdLabel = css`
  margin-top: 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--aqua-deep);
`

export const footNote = css`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  font-style: italic;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.88);
  text-shadow: 0 1px 10px rgba(8, 40, 70, 0.5);
  margin-top: 28px;
`
