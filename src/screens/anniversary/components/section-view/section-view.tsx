import { Sections, type Section } from '../../units/section'
import { CountdownSection } from '../countdown-section'
import { HeroSection } from '../hero-section'
import { MomentSection } from '../moment-section'
import { TodaySection } from '../today-section'

type SectionViewProps = {
  section: Section
}

export const SectionView = ({ section }: SectionViewProps) =>
  Sections.match(section, {
    hero: payload => <HeroSection section={payload} />,
    moment: payload => <MomentSection section={payload} />,
    today: payload => <TodaySection section={payload} />,
    countdown: payload => <CountdownSection section={payload} />,
  })
