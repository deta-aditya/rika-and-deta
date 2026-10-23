import { RevealWrapper } from '../../../../components/reveal-wrapper'
import * as screenStyles from '../../anniversary-styles'
import { formatDays, formatHours, formatMinutes, formatSeconds } from '../../units/countdown-time'
import type { CountdownPayload } from '../../units/countdown-payload'
import { EmphasisHeadingView } from '../emphasis-heading'
import { SignatureView } from '../signature'
import { CountdownCell } from './countdown-cell'
import * as styles from './countdown-section-styles'
import { useCountdown } from './use-countdown'

type CountdownSectionProps = {
  section: CountdownPayload
}

export const CountdownSection = ({ section }: CountdownSectionProps) => {
  const time = useCountdown(new Date(section.targetDate).getTime())

  return (
    <section css={[screenStyles.sectionBase, screenStyles.annivSection, styles.countdownSection]} data-bg={section.bgKey} id="countdown-section">
      <RevealWrapper>
        <div className="banner">{section.banner}</div>
      </RevealWrapper>

      <RevealWrapper delay={1}>
        <h2><EmphasisHeadingView heading={section.title} /></h2>
      </RevealWrapper>

      <RevealWrapper delay={3}>
        <div css={styles.countdown}>
          <CountdownCell value={formatDays(time)} label={section.daysLabel} />
          <CountdownCell value={formatHours(time)} label={section.hoursLabel} />
          <CountdownCell value={formatMinutes(time)} label={section.minutesLabel} />
          <CountdownCell value={formatSeconds(time)} label={section.secondsLabel} />
        </div>
      </RevealWrapper>

      <RevealWrapper delay={3}>
        <SignatureView signature={section.signature} />
      </RevealWrapper>

      <div css={styles.footNote}>{section.footNote}</div>
    </section>
  )
}
