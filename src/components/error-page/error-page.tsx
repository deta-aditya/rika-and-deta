import { css } from '@emotion/react'

const styles = {
  page: css`
    display: grid;
    place-items: center;
    min-height: 100vh;
    padding: 24px;
    font-family: inherit;
    background: #f8f8f8;
  `,
  box: css`
    max-width: 480px;
    width: 100%;
    padding: 32px;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
  `,
  title: css`
    margin: 0 0 16px;
    font-size: 18px;
    font-weight: 600;
    color: #c0392b;
  `,
  message: css`
    margin: 0;
    font-size: 13px;
    line-height: 1.6;
    color: #444;
    white-space: pre-wrap;
    font-family: monospace;
  `,
}

type ErrorPageProps = {
  message: string
}

export const ErrorPage = ({ message }: ErrorPageProps) => (
  <div css={styles.page}>
    <div css={styles.box}>
      <p css={styles.title}>Failed to load content</p>
      <p css={styles.message}>{message}</p>
    </div>
  </div>
)
