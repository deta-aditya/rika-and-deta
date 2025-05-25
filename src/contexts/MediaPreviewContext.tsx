import { createContext, ReactNode, useContext, useState } from "react";
import { Media } from "../models/Media";

export type MediaPreviewContextValue = {
  media: Media | null;
  openMedia: (media: Media) => void;
  closeMedia: () => void;
}

const MediaPreviewContext = createContext<MediaPreviewContextValue | null>(null);

export const MediaPreivewContextProvider = (props: { children: ReactNode }) => {
  const [media, setMediaUrl] = useState<Media | null>(null);

  const openMedia = (media: Media) => {
    setMediaUrl(media);
  }

  const closeMedia = () => {
    setMediaUrl(null);
  }

  return (
    <MediaPreviewContext.Provider value={{ media, openMedia, closeMedia }}>
      {props.children}
    </MediaPreviewContext.Provider>
  );
};

export const useMediaPreviewContext = () => {
  const value = useContext(MediaPreviewContext);

  if (value === null) {
    throw new Error("useMediaPreviewContext used outside MediaPreviewContextProvider");
  }

  return value;
}
