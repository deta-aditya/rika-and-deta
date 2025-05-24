import { AppButton } from "../../../components/AppButton";
import { Image } from "../../../components/Image";
import { useImagePreviewContext } from "../../../contexts/ImagePreviewContext";
import { useModalContext } from "../../../contexts/ModalContext";
import * as styles from "../Main.styles";

const IMAGE_LIST = Array.from({ length: 24 }, (_, i) => i + 1).map(i => ({
  key: `gallery${i}`,
  thumbnail: `gallery${i}-thumb.jpg`,
  original: `gallery${i}.jpg`,
}));

export const Gallery = () => {
  const { openModal } = useModalContext();
    
  const handleClick = () => {
    openModal({
      title: 'Gallery',
      body: <ModalBody />,
    });
  }

  return <AppButton buttonClassName="gallery" title="Gallery" onClick={handleClick} />;
}

const ModalBody = () => {
  const { openImage } = useImagePreviewContext();

  const handleClickImage = (original: string) => {
    openImage(original);
  }

  return (
    <div css={styles.galleryModal}>
      {IMAGE_LIST.map(img => (
        <Image src={img.thumbnail} key={img.key} onClick={() => handleClickImage(img.original)} />
      ))}
    </div>
  )
}
