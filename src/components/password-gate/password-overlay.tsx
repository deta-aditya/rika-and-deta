import type { ChangeEvent, FormEvent } from 'react'
import * as styles from './password-overlay-styles'

const WEBSITE_NAME = 'Deta & Rika'

type PasswordOverlayProps = {
  value: string
  hasError: boolean
  onChange: (value: string) => void
  onSubmit: (value: string) => void | Promise<void>
}

export const PasswordOverlay = ({ value, hasError, onChange, onSubmit }: PasswordOverlayProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(value)
  }

  return (
    <div css={styles.overlay}>
      <div css={styles.panel}>
        <h1 css={styles.name}>{WEBSITE_NAME}</h1>
        <p css={styles.subtitle}>One Year</p>
        <form css={styles.form} onSubmit={handleSubmit}>
          <input
            css={[styles.input, hasError && styles.inputError]}
            type="password"
            value={value}
            onChange={handleChange}
            placeholder="Password"
            aria-label="Password"
            autoFocus
          />
        </form>
      </div>
    </div>
  )
}
