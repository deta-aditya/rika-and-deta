// --- Unit ---

export type CountdownTime = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

// --- Private ---

const MS_PER_SECOND = 1000
const MS_PER_MINUTE = 60 * MS_PER_SECOND
const MS_PER_HOUR = 60 * MS_PER_MINUTE
const MS_PER_DAY = 24 * MS_PER_HOUR

const padTwoDigits = (value: number): string => String(value).padStart(2, '0')

// --- Constructors ---

export const createCountdownTime = (targetDate: number, now: number): CountdownTime => {
  let remaining = Math.max(0, targetDate - now)

  const days = Math.floor(remaining / MS_PER_DAY)
  remaining -= days * MS_PER_DAY

  const hours = Math.floor(remaining / MS_PER_HOUR)
  remaining -= hours * MS_PER_HOUR

  const minutes = Math.floor(remaining / MS_PER_MINUTE)
  remaining -= minutes * MS_PER_MINUTE

  const seconds = Math.floor(remaining / MS_PER_SECOND)

  return { days, hours, minutes, seconds }
}

// --- Selectors ---

export const formatDays = (time: CountdownTime): string => String(time.days)

export const formatHours = (time: CountdownTime): string => padTwoDigits(time.hours)

export const formatMinutes = (time: CountdownTime): string => padTwoDigits(time.minutes)

export const formatSeconds = (time: CountdownTime): string => padTwoDigits(time.seconds)
