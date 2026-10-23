import { css } from '@emotion/react'

export { overlay, panel, name, subtitle } from '../password-gate/password-overlay-styles'

export const track = css`
  width: 100%;
  max-width: 260px;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.45);
  overflow: hidden;
  box-shadow: inset 0 1px 2px rgba(8, 40, 70, 0.2);
`

export const fill = css`
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--aqua), #fff);
  transition: width 0.25s ease;
`

export const percent = css`
  margin: -16px 0 0;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.3em;
  color: rgba(255, 255, 255, 0.85);
`
