import { AeroBody, AeroWindow } from '../../../../components/aero-window'
import { RichParagraph } from '../../../../components/rich-paragraph'
import { RevealWrapper } from '../../../../components/reveal-wrapper'
import { Slideshow } from '../../../../components/slideshow'
import * as screenStyles from '../../anniversary-styles'
import { createMediaUrl } from '../../units/media-url'
import type { MomentPayload } from '../../units/moment-payload'
import { Orientations } from '../../units/orientation'
import { EmphasisHeadingView } from '../emphasis-heading'
import * as styles from './moment-section-styles'

type MomentSectionProps = {
  section: MomentPayload
}

export const MomentSection = ({ section }: MomentSectionProps) => (
  <section css={screenStyles.sectionBase} data-bg={section.bgKey} id={section.bgKey}>
    <div css={[styles.moment, Orientations.isLeft(section.orientation) && styles.momentFlip]}>
      <div className="moment-text">
        <RevealWrapper>
          <AeroWindow title={section.windowTitle}>
            <AeroBody>
              <h2 css={styles.momentTitle}><EmphasisHeadingView heading={section.heading} /></h2>
              <div css={styles.momentDate}>{section.date}</div>
              <div css={styles.momentBody}>
                {section.body.map((paragraph, index) => (
                  <RichParagraph key={index} text={paragraph} />
                ))}
              </div>
            </AeroBody>
          </AeroWindow>
        </RevealWrapper>
      </div>
      <div className="moment-photo">
        <RevealWrapper delay={3}>
          <AeroWindow title={section.photoTitle} noControls>
            <Slideshow images={section.images.map(createMediaUrl)}label={section.photoLabel} />
          </AeroWindow>
        </RevealWrapper>
      </div>
    </div>
  </section>
)
