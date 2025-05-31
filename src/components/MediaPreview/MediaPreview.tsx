import { useMediaPreviewContext } from "../../contexts/MediaPreviewContext"
import * as styles from "./MediaPreview.styles"

export const MediaPreview = () => {
  const { media, closeMedia } = useMediaPreviewContext();

  if (media === null) return null;

  const handleClickOverlay = () => {
    if (!media.focused()) {
      closeMedia();
    }
  }

  return (
    <div css={styles.mediaPreview(media.focused())} onClick={handleClickOverlay}>
      {media.focused() && (
        <button className="close-button" onClick={closeMedia}>&times;</button>
      )}
      {media.visitByType({
        image: (url) => <img src={url} alt={`img-preview-of-${media}`} />,
        video: (url) => (
          <video controls autoPlay>
            <source src={url} />
          </video>
        )
      })}
      
    </div>
  )
}
