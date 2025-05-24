import { useImagePreviewContext } from "../../contexts/ImagePreviewContext"
import * as styles from "./ImagePreview.styles"

export const ImagePreview = () => {
  const { previewedImage, closeImage } = useImagePreviewContext();

  if (previewedImage === null) return null;

  return (
    <div css={styles.imagePreview} onClick={() => closeImage()}>
      <img src={previewedImage} alt={`img-preview-of-${previewedImage}`} />
    </div>
  )
}
