import { TitleProps } from "./Title.props"
import * as styles from "./Title.styles"

export const Title = ({ color = 'black', size = 'large', onClick }: TitleProps) => {
  return (
    <h1 css={styles.title({ color, size })} onClick={onClick}>
      Rika <span className="amp">&</span> Deta
    </h1>
  )
}
