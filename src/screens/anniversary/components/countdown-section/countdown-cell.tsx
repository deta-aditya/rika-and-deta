import { AeroWindow } from '../../../../components/aero-window'
import * as styles from './countdown-section-styles'

type CountdownCellProps = {
  value: string
  label: string
}

export const CountdownCell = ({ value, label }: CountdownCellProps) => (
  <AeroWindow title="" noControls>
    <div css={styles.cdBody}>
      <div css={styles.cdNum}>{value}</div>
      <div css={styles.cdLabel}>{label}</div>
    </div>
  </AeroWindow>
)
