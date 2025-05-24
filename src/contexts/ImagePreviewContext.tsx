import { createContext, ReactNode, useContext, useState } from "react";

export type ImagePreviewContextValue = {
  previewedImage: string | null;
  openImage: (imageUrl: string) => void;
  closeImage: () => void;
}

const ImagePreviewContext = createContext<ImagePreviewContextValue | null>(null);

export const ImagePreivewContextProvider = (props: { children: ReactNode }) => {
  const [previewedImage, setPreviewedImage] = useState<string | null>(null);

  const openImage = (imageUrl: string) => {
    setPreviewedImage(imageUrl);
  }

  const closeImage = () => {
    setPreviewedImage(null);
  }

  return (
    <ImagePreviewContext.Provider value={{ previewedImage, openImage, closeImage }}>
      {props.children}
    </ImagePreviewContext.Provider>
  );
};

export const useImagePreviewContext = () => {
  const value = useContext(ImagePreviewContext);

  if (value === null) {
    throw new Error("useImagePreviewContext used outside ImagePreviewContextProvider");
  }

  return value;
}
