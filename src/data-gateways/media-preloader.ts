// --- Unit ---

// Data gateway contract for warming up media before the page is shown. `onProgress` receives
// how many urls have settled so far. A url that fails or times out still counts as settled,
// so preloading never hangs on one bad file.
export type MediaPreloader = {
  preload: (urls: string[], onProgress: (settledCount: number) => void) => Promise<void>
}
