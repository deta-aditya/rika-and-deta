import { css, keyframes } from '@emotion/react'

const bob = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(6px); }
`

export const heroSection = css`
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 8vh;

  @media (max-width: 820px) {
    min-height: 100vh;
    scroll-snap-align: start;
  }
`

export const eyebrow = css`
  font-size: clamp(12px, 1vw, 14px);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: 0.4em;
  text-transform: uppercase;
  margin-bottom: 28px;
  text-shadow: 0 1px 10px rgba(8, 40, 70, 0.5);
`

export const title = css`
  margin: 0;
  font-size: clamp(64px, 11vw, 168px);
  font-weight: 300;
  letter-spacing: -0.025em;
  line-height: 0.95;
  color: white;
  text-shadow:
    0 2px 0 rgba(255,255,255,0.2),
    0 10px 36px rgba(8, 40, 70, 0.6),
    0 0 80px rgba(255, 255, 255, 0.3);

  em {
    display: inline-block;
    font-weight: 300;
    font-style: italic;
    color: rgba(255, 255, 255, 0.92);
    margin: 0 0.04em;
  }
`

export const oneYear = css`
  margin-top: 28px;
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 12px 26px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55));
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow:
    inset 0 1px 0 #fff,
    inset 0 0 0 1px rgba(140, 195, 230, 0.4),
    0 12px 30px rgba(8, 40, 70, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.85);
  font-size: clamp(12px, 1vw, 13px);
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--ink);
`

export const dot = css`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 25%, #fff, var(--rose));
  box-shadow: 0 0 12px rgba(255,111,174,0.7);
`

export const dateStamp = css`
  margin-top: 36px;
  font-size: clamp(14px, 1.1vw, 16px);
  font-weight: 400;
  font-style: italic;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: 0.2em;
  text-shadow: 0 1px 10px rgba(8, 40, 70, 0.5);
`

export const scrollCue = css`
  margin-top: 8vh;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  text-shadow: 0 1px 10px rgba(8, 40, 70, 0.5);
  text-decoration: none;
`

export const scrollCueArrow = css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.55));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: grid;
  place-items: center;
  box-shadow: 0 4px 14px rgba(8, 40, 70, 0.3), inset 0 1px 0 #fff;
  border: 1px solid rgba(255,255,255,0.8);
  animation: ${bob} 1.8s ease-in-out infinite;
`
