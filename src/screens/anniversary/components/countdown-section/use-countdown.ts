import { useEffect, useState } from 'react'
import { createCountdownTime, type CountdownTime } from '../../units/countdown-time'

const REFRESH_INTERVAL_MS = 1000

export const useCountdown = (targetDate: number): CountdownTime => {
  const [time, setTime] = useState(() => createCountdownTime(targetDate, Date.now()))

  useEffect(() => {
    const id = setInterval(() => setTime(createCountdownTime(targetDate, Date.now())), REFRESH_INTERVAL_MS)
    return () => clearInterval(id)
  }, [targetDate])

  return time
}
