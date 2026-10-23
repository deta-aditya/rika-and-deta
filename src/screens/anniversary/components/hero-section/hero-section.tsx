import { RevealWrapper } from '../../../../components/reveal-wrapper'
import * as screenStyles from '../../anniversary-styles'
import type { HeroPayload } from '../../units/hero-payload'
import { EmphasisHeadingView } from '../emphasis-heading'
import * as styles from './hero-section-styles'

type HeroSectionProps = {
  section: HeroPayload
}

export const HeroSection = ({ section }: HeroSectionProps) => (
  <section css={[screenStyles.sectionBase, styles.heroSection]} data-bg={section.bgKey}>
    <RevealWrapper>
      <div css={styles.eyebrow}>{section.eyebrow}</div>
    </RevealWrapper>

    <RevealWrapper delay={1}>
      <h1 css={styles.title}><EmphasisHeadingView heading={section.title} /></h1>
    </RevealWrapper>

    <RevealWrapper delay={2}>
      <div css={styles.oneYear}>
        <span css={styles.dot} />
        {section.badge}
        <span css={styles.dot} />
      </div>
    </RevealWrapper>

    <RevealWrapper delay={3}>
      <div css={styles.dateStamp}>{section.dateRange}</div>
    </RevealWrapper>

    <RevealWrapper delay={3}>
      <a href={section.scrollTarget} css={styles.scrollCue}>
        <span>{section.scrollCue}</span>
        <span css={styles.scrollCueArrow}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="#2b4a5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
    </RevealWrapper>
  </section>
)
