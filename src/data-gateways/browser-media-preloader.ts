import type { MediaPreloader } from './media-preloader'

// --- Private ---

const CONCURRENCY = 6
const TIMEOUT_MS = 20_000
const VIDEO_EXTENSION = /\.mp4$/i

const withTimeout = (task: Promise<void>): Promise<void> =>
  Promise.race([task, new Promise<void>(resolve => setTimeout(resolve, TIMEOUT_MS))])

// decode() resolves once the image is ready to paint, so large photos do not jank later.
const loadImage = (url: string): Promise<void> => {
  const image = new Image()
  image.src = url
  return image.decode().catch(() => console.warn(`Could not preload image ${url}`))
}

// Only the first frame is awaited. The rest streams once the video plays.
const loadVideo = (url: string): Promise<void> =>
  new Promise(resolve => {
    const video = document.createElement('video')
    const finish = () => {
      video.removeAttribute('src')
      video.load()
      resolve()
    }
    video.preload = 'auto'
    video.muted = true
    video.onloadeddata = finish
    video.onerror = () => {
      console.warn(`Could not preload video ${url}`)
      finish()
    }
    video.src = url
  })

const loadMedia = (url: string): Promise<void> =>
  withTimeout(VIDEO_EXTENSION.test(url) ? loadVideo(url) : loadImage(url))

// --- Constructors ---

export const createBrowserMediaPreloader = (): MediaPreloader => ({
  preload: async (urls, onProgress) => {
    let nextIndex = 0
    let settledCount = 0

    const work = async () => {
      while (nextIndex < urls.length) {
        const url = urls[nextIndex++]
        await loadMedia(url)
        onProgress(++settledCount)
      }
    }

    await Promise.all([
      ...Array.from({ length: CONCURRENCY }, work),
      withTimeout(document.fonts.ready.then(() => undefined)),
    ])
  },
})
