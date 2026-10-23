import { css } from '@emotion/react'

export const overlay = css`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 24px;
  background: linear-gradient(180deg, #8fc6ec 0%, #cae7f6 100%);
`

export const panel = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 480px;
  text-align: center;
`

export const name = css`
  margin: 0;
  font-size: clamp(40px, 9vw, 76px);
  font-weight: 300;
  letter-spacing: -0.03em;
  color: white;
  text-shadow:
    0 2px 0 rgba(255, 255, 255, 0.2),
    0 10px 36px rgba(8, 40, 70, 0.5);
`

export const subtitle = css`
  margin: -20px 0 0;
  font-size: clamp(13px, 3vw, 18px);
  font-weight: 400;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
`

export const form = css`
  width: 100%;
`

export const input = css`
  width: 100%;
  padding: 14px 20px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  font-family: inherit;
  font-size: 15px;
  letter-spacing: 0.12em;
  text-align: center;
  color: var(--ink);
  outline: none;
  box-shadow:
    inset 0 1px 0 #fff,
    0 12px 30px rgba(8, 40, 70, 0.25);
  transition: border-color 0.2s ease;

  &::placeholder {
    color: var(--ink-muted);
    font-size: 11px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
  }

  &:focus {
    border-color: var(--aqua);
  }
`

export const inputError = css`
  border-color: var(--rose);

  &:focus {
    border-color: var(--rose);
  }
`
