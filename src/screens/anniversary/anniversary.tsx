import { BgLayers } from './components/bg-layers'
import { SectionView } from './components/section-view'
import { useAnniversary } from './use-anniversary'
import { collectNearbyBgKeys } from './units/section'
import * as styles from './anniversary-styles'

export const Anniversary = () => {
  const { activeBg, sections } = useAnniversary()

  return (
    <>
      <BgLayers activeBg={activeBg} bgKeys={collectNearbyBgKeys(sections, activeBg)} />
      <main css={styles.page}>
        {sections.map(section => (
          <SectionView key={section.payload.bgKey} section={section} />
        ))}
      </main>
    </>
  )
}
