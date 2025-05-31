import { useEffect, useRef } from "react";
import { useMediaPreviewContext } from "../../../contexts/MediaPreviewContext";
import * as styles from "../Main.styles";

export const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { media } = useMediaPreviewContext();

  const playBasedOnMediaAvailability = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!media && audio.paused) {
      audio.play().catch(() => {});
      return;
    }

    const mediaIsVideo = media?.visitByType({
      image: () => false,
      video: () => true,
    }) || false;

    if (mediaIsVideo && audio.played) {
      audio.pause();
      return;
    }
  }

  const handleFirstClick = () => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.25;
    playBasedOnMediaAvailability();
    document.body.removeEventListener('click', handleFirstClick);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleFirstClick);
    return () => {
      document.body.removeEventListener('click', handleFirstClick);
    };
  }, []);

  useEffect(() => {
    playBasedOnMediaAvailability();
  }, [media])

  return (
    <audio css={styles.backgroundMusic} ref={audioRef} src="/background-music.mp3" loop />
  )
};
