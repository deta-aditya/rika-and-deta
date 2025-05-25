import { AppButton } from "../../../components/AppButton";
import { useMediaPreviewContext } from "../../../contexts/MediaPreviewContext";
import { Media } from "../../../models/Media";

export const PlayVideo = () => {
  const { openMedia } = useMediaPreviewContext();

  const handleClickButton = () => {
    openMedia(Media.video("prewedding.mp4"))
  }

  return (
    <AppButton title="Play Video" buttonClassName="play-video" onClick={handleClickButton} />
  );
}
