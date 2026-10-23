import * as styles from './loading-overlay-styles'

const WEBSITE_NAME = 'Deta & Rika'

type LoadingOverlayProps = {
  settledCount: number
  total: number
}

const getPercent = (settledCount: number, total: number): number =>
  total === 0 ? 100 : Math.round((settledCount / total) * 100)

export const LoadingOverlay = ({ settledCount, total }: LoadingOverlayProps) => {
  const percent = getPercent(settledCount, total)

  return (
    <div css={styles.overlay}>
      <div css={styles.panel}>
        <h1 css={styles.name}>{WEBSITE_NAME}</h1>
        <p css={styles.subtitle}>One Year</p>
        <div
          css={styles.track}
          role="progressbar"
          aria-label="Loading"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
        >
          <div css={styles.fill} style={{ width: `${percent}%` }} />
        </div>
        <p css={styles.percent}>{percent}%</p>
      </div>
    </div>
  )
}
