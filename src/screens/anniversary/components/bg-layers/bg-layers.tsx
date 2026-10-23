import { createMediaUrl } from '../../units/media-url'
import * as styles from './bg-layers-styles'

type BgLayersProps = {
  activeBg: string
  bgKeys: string[]
}

const EDGE_BLUR = {
  hero: styles.bgImageEdgeBlurBottom,
  countdown: styles.bgImageEdgeBlurTop,
} as const

const isEdgeBlurKey = (key: string): key is keyof typeof EDGE_BLUR => key in EDGE_BLUR

export const BgLayers = ({ activeBg, bgKeys }: BgLayersProps) => (
  <div css={styles.bgLayers} aria-hidden="true">
    {bgKeys.map(key => {
      const backgroundImage = `url(${createMediaUrl(`/bg-${key}.jpg`)})`
      return (
        <div key={key} css={[styles.bgLayer, activeBg === key && styles.bgLayerActive]}>
          {isEdgeBlurKey(key) ? (
            <>
              <div css={styles.bgImage} style={{ backgroundImage }} />
              <div
                css={[styles.bgImage, styles.bgImageBlurred, EDGE_BLUR[key]]}
                style={{ backgroundImage }}
              />
            </>
          ) : (
            <div css={[styles.bgImage, styles.bgImageBlurred]} style={{ backgroundImage }} />
          )}
        </div>
      )
    })}
  </div>
)
