import dayjs from "dayjs"
import * as styles from "../Main.styles"

export const WeddingDate = (props: { className?: string }) => {
  const now = dayjs();
  const diff = Math.abs(now.diff('2025-06-15', 'days'));

  return (
    <div css={styles.weddingDate} className={props.className}>
      <div className="exact-date">Sunday, 15 June 2025</div>
      <div className="countdown">
        {diff <= 0 ? "Today!" : `${diff} days to go!`}
      </div>
    </div>
  )
}
