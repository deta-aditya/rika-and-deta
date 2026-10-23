import { useEffect, useRef } from 'react'

export const useVideoPlayback = (isPlaying: boolean) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video === null) return

    if (!isPlaying) {
      video.pause()
      return
    }
    video.currentTime = 0
    video.play().catch(() => undefined)
  }, [isPlaying])

  return videoRef
}
