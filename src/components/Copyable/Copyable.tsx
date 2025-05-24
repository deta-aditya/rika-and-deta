import { ReactNode, useState } from "react"
import * as styles from "./Copyable.styles"

export const Copyable = (props: { label: ReactNode, content: string }) => {
  const [copying, setCopying] = useState(false);

  const handleClickContent = async () => {
    setCopying(true);
    try {
      await navigator.clipboard.writeText(props.content);
    } finally {
      setTimeout(() => {
        setCopying(false);
      }, 500);
    }
  }

  return (
    <section css={styles.copyable}>
      <div className="copyable-label">{props.label}</div>
      <div className="copyable-content" onClick={handleClickContent}>
        {copying ? 'Copied!' : props.content}
        <span className="copy-icon">
          {copying ? '✅' : '📄'}
        </span>
      </div>
    </section>
  )
}
