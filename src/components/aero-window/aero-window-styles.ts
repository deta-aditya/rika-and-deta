import { css } from '@emotion/react'

export const aeroWindow = css`
  position: relative;
  background: var(--glass-tint);
  backdrop-filter: blur(28px) saturate(1.5);
  -webkit-backdrop-filter: blur(28px) saturate(1.5);
  border-radius: 9px;
  border: 1px solid rgba(255, 255, 255, 0.75);
  box-shadow:
    0 0 0 1px rgba(8, 60, 90, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 1),
    inset 0 -1px 0 rgba(255, 255, 255, 0.4),
    inset 1px 0 0 rgba(255, 255, 255, 0.5),
    inset -1px 0 0 rgba(255, 255, 255, 0.4),
    0 28px 60px -22px rgba(8, 40, 70, 0.6),
    0 10px 28px -10px rgba(8, 40, 70, 0.32);

  &::before {
    content: "";
    position: absolute;
    inset: -3px;
    border-radius: 12px;
    background: linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0));
    filter: blur(3px);
    z-index: -1;
    pointer-events: none;
    opacity: 0.7;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 1px 1px auto 1px;
    height: 38%;
    border-radius: 8px 8px 0 0;
    background: linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 100%);
    pointer-events: none;
  }
`

export const titlebar = css`
  position: relative;
  height: 34px;
  padding: 0 6px 0 14px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: transparent;
  z-index: 2;
`

export const title = css`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-soft);
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 1px 0 rgba(255,255,255,0.7);
  align-self: center;
`

export const controls = css`
  display: inline-flex;
  align-items: stretch;
  gap: 0;
  margin-top: 0;
  align-self: flex-start;
`

export const ctlBase = css`
  width: 27px;
  height: 20px;
  border-radius: 0;
  border: 1px solid rgba(95, 135, 175, 0.85);
  border-top-color: rgba(150, 185, 215, 0.7);
  background: linear-gradient(180deg,
    rgba(230, 245, 255, 0.82) 0%,
    rgba(180, 215, 240, 0.72) 48%,
    rgba(140, 185, 220, 0.78) 50%,
    rgba(195, 225, 245, 0.85) 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.95),
    inset 0 -1px 0 rgba(255, 255, 255, 0.55),
    inset 1px 0 0 rgba(255, 255, 255, 0.45),
    inset -1px 0 0 rgba(255, 255, 255, 0.4);
  position: relative;
  display: inline-block;
  cursor: default;
  transition: filter 0.15s ease;

  & + & { border-left: none; }
  &:first-of-type { border-bottom-left-radius: 5px; }
  &:last-of-type { border-bottom-right-radius: 5px; }
  &:hover { filter: brightness(1.1) saturate(1.18); }
  &:active { filter: brightness(0.92); }

  &::before {
    position: absolute;
    display: block;
  }
`

export const ctlMin = css`
  &::before {
    content: "";
    width: 9px;
    height: 2px;
    background: #0a3358;
    border-radius: 1px;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const ctlMax = css`
  &::before {
    content: "";
    width: 9px;
    height: 7px;
    border: 1px solid #0a3358;
    border-top-width: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const ctlClose = css`
  width: 46px;
  border-color: rgba(140, 30, 30, 0.85);
  border-top-color: rgba(200, 90, 90, 0.75);
  background: linear-gradient(180deg,
    #ffa7a7 0%,
    #ee5252 48%,
    #c81818 52%,
    #f06868 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 220, 220, 0.95),
    inset 0 -1px 0 rgba(255, 180, 180, 0.55),
    inset 1px 0 0 rgba(255, 200, 200, 0.4),
    inset -1px 0 0 rgba(255, 200, 200, 0.4);

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 11px;
    height: 1.5px;
    background: #ffffff;
    border-radius: 1px;
  }
  &::before { transform: translate(-50%, -50%) rotate(45deg); }
  &::after  { transform: translate(-50%, -50%) rotate(-45deg); }
`

export const aeroBody = css`
  position: relative;
  margin: 8px;
  background: var(--inner-pane);
  border-radius: 4px;
  border: 1px solid rgba(120, 175, 215, 0.5);
  box-shadow:
    inset 0 1px 0 #fff,
    0 1px 2px rgba(8, 40, 70, 0.08);
  z-index: 2;
  padding: 24px 28px 26px;

  @media (max-width: 820px) {
    padding: 20px 22px 22px;
  }
`

export const titlebarCompact = css`
  height: 18px;
`

export const aeroBodyNoTitle = css`
  margin-top: 8px;
`

export const photoSlot = css`
  position: relative;
  margin: 0 8px 8px;
  aspect-ratio: 4 / 5;
  background:
    repeating-linear-gradient(45deg,
      rgba(220, 240, 255, 0.6) 0 12px,
      rgba(190, 225, 250, 0.5) 12px 24px) !important;
  border-radius: 4px;
  border: 1px solid rgba(120, 175, 215, 0.5);
  box-shadow:
    inset 0 1px 0 #fff,
    0 1px 2px rgba(8, 40, 70, 0.08);
  z-index: 2;

  &::after {
    content: attr(data-label);
    position: absolute;
    bottom: 14px;
    left: 14px;
    right: 14px;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--ink-soft);
    padding: 8px 12px;
    border-radius: 6px;
    background: rgba(255,255,255,0.85);
    border: 1px solid rgba(255,255,255,0.95);
    text-align: center;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    box-shadow: 0 2px 8px rgba(8, 40, 70, 0.12);
  }
`
