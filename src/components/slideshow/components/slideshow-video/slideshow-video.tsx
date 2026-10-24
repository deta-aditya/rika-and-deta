import { useVideoPlayback } from './hooks/use-video-playback'
import * as styles from './slideshow-video-styles'

type SlideshowVideoProps = {
  src: string
  label: string
  isShown: boolean
  isPlaying: boolean
  isLooping: boolean
  onEnded: () => void
}

export const SlideshowVideo = ({ src, label, isShown, isPlaying, isLooping, onEnded }: SlideshowVideoProps) => {
  const videoRef = useVideoPlayback(isPlaying)

  return (
    <video
      ref={videoRef}
      src={src}
      aria-label={label}
      muted
      playsInline
      preload={isShown ? 'auto' : 'metadata'}
      loop={isLooping}
      onEnded={onEnded}
      css={[styles.video, isShown && styles.videoShown]}
    />
  )
}
