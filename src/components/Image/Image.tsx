import { useState } from "react"
import * as styles from "./Image.styles";

export const Image = (props: React.ComponentProps<'img'>) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div css={styles.image(loaded)}>
      {!loaded && <div className="image-shimmer" />}
      <img {...props} onLoad={() => setLoaded(true)} />
    </div>
  )
}
