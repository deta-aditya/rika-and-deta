import type { ReactNode } from 'react'
import { useRevealWrapper } from './use-reveal-wrapper'
import * as styles from './reveal-wrapper-styles'

export type RevealWrapperProps = {
  children: ReactNode
  delay?: 1 | 2 | 3
}

export const RevealWrapper = (props: RevealWrapperProps) => {
  const { ref, isIn, dataAttributes } = useRevealWrapper(props)

  return (
    <div ref={ref} css={[styles.reveal, isIn && styles.revealIn]} {...dataAttributes}>
      {props.children}
    </div>
  )
}
