import { PhotoSlot } from '../aero-window'
import { SlideshowVideo } from './components/slideshow-video'
import { useIsInView } from './hooks/use-is-in-view'
import { useSlideshow } from './hooks/use-slideshow'
import { createSlideMedia, getSlideMediaSrc, SlideMedias } from './units/slide-media'
import * as styles from './slideshow-styles'

type SlideshowProps = {
  images: string[]
  label: string
}

export const Slideshow = ({ images, label }: SlideshowProps) => {
  const slides = images.map(createSlideMedia)
  const { activeIndex, isNearActive, next, prev } = useSlideshow(slides)
  const { ref, isInView, isNearView } = useIsInView()

  if (slides.length === 0) {
    return <PhotoSlot label={label} />
  }

  const handlePrev = () => prev()
  const handleNext = () => next()

  return (
    <div ref={ref} css={styles.slideshow}>
      <div css={styles.viewport}>
        {slides.map((media, index) => {
          if (!isNearView || !isNearActive(index)) return null

          const isShown = index === activeIndex
          return SlideMedias.match(media, {
            image: ({ src }) => (
              <img key={src} src={src} alt={label} css={[styles.slide, isShown && styles.slideActive]} />
            ),
            video: ({ src }) => (
              <SlideshowVideo
                key={src}
                src={src}
                label={label}
                isShown={isShown}
                isPlaying={isShown && isInView}
                isLooping={slides.length === 1}
                onEnded={handleNext}
              />
            ),
          })
        })}
      </div>

      {slides.length > 1 && (
        <>
          <button type="button" aria-label="Previous photo" css={[styles.navButton, styles.navPrev]} onClick={handlePrev}>
            ‹
          </button>
          <button type="button" aria-label="Next photo" css={[styles.navButton, styles.navNext]} onClick={handleNext}>
            ›
          </button>
          <div css={styles.dots}>
            {slides.map((media, index) => (
              <span key={getSlideMediaSrc(media)} css={[styles.dot, index === activeIndex && styles.dotActive]} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
