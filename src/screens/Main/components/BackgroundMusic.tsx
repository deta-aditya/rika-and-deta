import { useEffect, useRef } from "react";
import { useMediaPreviewContext } from "../../../contexts/MediaPreviewContext";
import * as styles from "../Main.styles";

export const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { media } = useMediaPreviewContext();

  const onFirstClick = () => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.25;
    audioRef.current?.play();
    document.body.removeEventListener('click', onFirstClick);
  };

  useEffect(() => {
    document.body.addEventListener('click', onFirstClick);
    return () => {
      document.body.removeEventListener('click', onFirstClick);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!media && audio.paused) {
      audio.play();
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
  }, [media])

  return (
    <audio css={styles.backgroundMusic} ref={audioRef} src="/background-music.mp3" loop />
  )
};
