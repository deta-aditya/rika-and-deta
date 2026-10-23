import { css } from '@emotion/react'

export const page = css`
  position: relative;
  z-index: 2;

  /* Dedicated scroll-snap container. Putting the snap here (rather than on
     html/body) avoids the overflow-x:hidden-on-body quirk that hijacks the
     page scroll and silently disables root-level scroll snapping. */
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  @media (max-width: 820px) {
    height: auto;
    overflow: visible;
    scroll-snap-type: none;
  }
`

export const sectionBase = css`
  height: 100vh;
  min-height: 640px;
  padding: 8vh 6vw;
  display: flex;
  align-items: center;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  overflow: hidden;

  @media (max-width: 820px) {
    height: auto;
    min-height: auto;
    overflow: visible;
    scroll-snap-align: none;
  }
`

export const annivSection = css`
  text-align: center;
  flex-direction: column;

  .banner {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 0 1px 10px rgba(8, 40, 70, 0.5);
    margin-bottom: 22px;
  }

  h2 {
    font-size: clamp(48px, 7.5vw, 110px);
    font-weight: 300;
    margin: 0 0 26px;
    color: white;
    letter-spacing: -0.025em;
    line-height: 0.98;
    text-shadow:
      0 2px 0 rgba(255,255,255,0.2),
      0 10px 36px rgba(8, 40, 70, 0.6);

    em {
      font-style: italic;
      font-weight: 300;
    }
  }

  .lead {
    max-width: 620px;
    margin: 0 auto 30px;

    .aero-body {
      font-size: clamp(15px, 1.1vw, 17px);
      line-height: 1.7;
      padding: 26px 34px 28px;
      text-wrap: pretty;
      color: var(--ink);
    }

    p { margin: 0 0 12px; }
    p:last-child { margin-bottom: 0; }
    em { font-style: italic; color: var(--aqua-deep); }
  }

  .signature {
    margin-top: 40px;
    font-size: clamp(20px, 1.9vw, 24px);
    font-weight: 300;
    font-style: italic;
    letter-spacing: 0.04em;
    color: white;
    text-shadow: 0 2px 16px rgba(8, 40, 70, 0.55);
    display: inline-flex;
    align-items: center;
    gap: 18px;

    .heart {
      color: var(--rose);
      font-size: 1em;
      font-style: normal;
      filter: drop-shadow(0 4px 10px rgba(255,111,174,0.55));
    }

    .with {
      font-size: 0.5em;
      font-weight: 500;
      font-style: normal;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.88);
    }
  }
`
