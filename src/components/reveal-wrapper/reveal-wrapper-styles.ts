import { css } from '@emotion/react'

export const reveal = css`
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.9s ease, transform 0.9s cubic-bezier(.2,.7,.2,1);

  &[data-delay="1"] { transition-delay: 0.1s; }
  &[data-delay="2"] { transition-delay: 0.2s; }
  &[data-delay="3"] { transition-delay: 0.3s; }
`

export const revealIn = css`
  opacity: 1;
  transform: translateY(0);
`
