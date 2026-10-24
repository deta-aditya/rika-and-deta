import { css } from '@emotion/react'

export const moment = css`
  display: grid;
  /* minmax(0, 1fr) instead of 1fr: a plain 1fr is minmax(auto, 1fr), so a nowrap window title
     would stretch the column past the viewport. */
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(24px, 4vw, 56px);
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;
  width: 100%;

  .moment-text,
  .moment-photo {
    min-width: 0;
  }

  /* Keep the photo frame from filling the column edge-to-edge so it
     breathes within the section instead of touching its bounds. */
  .moment-photo {
    justify-self: center;
    width: 100%;
    max-width: 440px;
  }

  @media (max-width: 820px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;

    .moment-text { order: 1; }
    .moment-photo { order: 2; }
  }
`

export const momentFlip = css`
  .moment-text { order: 2; }
  .moment-photo { order: 1; }

  @media (max-width: 820px) {
    .moment-text { order: 1; }
    .moment-photo { order: 2; }
  }
`

export const momentTitle = css`
  font-size: clamp(32px, 4.4vw, 56px);
  font-weight: 300;
  letter-spacing: -0.025em;
  line-height: 1.04;
  margin: 0 0 16px;
  color: var(--ink);
  text-wrap: balance;

  em {
    font-style: italic;
    font-weight: 300;
    color: var(--aqua-deep);
  }
`

export const momentDate = css`
  display: inline-block;
  padding: 6px 14px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(225, 245, 255, 0.95), rgba(190, 225, 250, 0.7));
  border: 1px solid rgba(255, 255, 255, 0.9);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--aqua-deep);
  margin-bottom: 20px;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.9),
    inset 0 -1px 0 rgba(140, 195, 230, 0.5),
    0 2px 6px rgba(8, 40, 70, 0.12);
`

export const momentBody = css`
  font-size: clamp(15px, 1.1vw, 16.5px);
  font-weight: 400;
  line-height: 1.65;
  color: var(--ink);
  text-wrap: pretty;

  p { margin: 0 0 10px; }
  p:last-child { margin-bottom: 0; }
  em { font-style: italic; color: var(--aqua-deep); }
`
