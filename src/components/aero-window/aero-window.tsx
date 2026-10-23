import type { ReactNode } from 'react'
import * as styles from './aero-window-styles'

type AeroWindowProps = {
  title: string
  children: ReactNode
  noControls?: boolean
}

export const AeroWindow = ({ title, children, noControls }: AeroWindowProps) => (
  <div css={styles.aeroWindow}>
    <div css={[styles.titlebar, noControls && styles.titlebarCompact]}>
      <span css={styles.title}>{title}</span>
      {!noControls && (
        <span css={styles.controls}>
          <i css={[styles.ctlBase, styles.ctlMin]} />
          <i css={[styles.ctlBase, styles.ctlMax]} />
          <i css={[styles.ctlBase, styles.ctlClose]} />
        </span>
      )}
    </div>
    {children}
  </div>
)

export const AeroBody = ({ children }: { children: ReactNode }) => (
  <div css={styles.aeroBody}>{children}</div>
)

export const PhotoSlot = ({ label }: { label: string }) => (
  <div css={styles.photoSlot} data-label={label} />
)
