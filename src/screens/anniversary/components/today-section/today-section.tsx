import { AeroBody, AeroWindow } from '../../../../components/aero-window'
import { RichParagraph } from '../../../../components/rich-paragraph'
import { RevealWrapper } from '../../../../components/reveal-wrapper'
import * as screenStyles from '../../anniversary-styles'
import type { TodayPayload } from '../../units/today-payload'
import { EmphasisHeadingView } from '../emphasis-heading'
import { SignatureView } from '../signature'

type TodaySectionProps = {
  section: TodayPayload
}

export const TodaySection = ({ section }: TodaySectionProps) => (
  <section css={[screenStyles.sectionBase, screenStyles.annivSection]} data-bg={section.bgKey}>
    <RevealWrapper>
      <div className="banner">{section.banner}</div>
    </RevealWrapper>

    <RevealWrapper delay={1}>
      <h2><EmphasisHeadingView heading={section.title} /></h2>
    </RevealWrapper>

    <RevealWrapper delay={2}>
      <div className="lead">
        <AeroWindow title={section.letterTitle}>
          <AeroBody>
            {section.letterBody.map((paragraph, index) => (
              <RichParagraph key={index} text={paragraph} />
            ))}
          </AeroBody>
        </AeroWindow>
      </div>
    </RevealWrapper>

    <RevealWrapper delay={3}>
      <SignatureView signature={section.signature} />
    </RevealWrapper>
  </section>
)
