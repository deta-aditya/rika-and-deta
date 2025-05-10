import { useEffect, useRef, useState } from "react"
// import { Image as ImageComponent } from "../Image"
import * as styles from "./Slideshow.styles";

async function loadImage(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();
    const imageURL = URL.createObjectURL(blob);

    return imageURL;
  } catch (error) {
    console.error("Failed to load image:", error);
    throw error;
  }
}

export const Slideshow = (props: { images: string[] }) => {
  const loadingInitiated = useRef<boolean>(false);
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [displayNext, setDisplayNext] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const loadImages = () => {
    props.images.forEach(image => {
      loadImage(image)
        .then(imageUrl => setImageUrls(prev => [...prev, imageUrl]));
    });
  }

  useEffect(() => {
    if (!loadingInitiated.current) {
      loadImages();
      loadingInitiated.current = true;
    }
  }, []);

  useEffect(() => {
    if (imageUrls.length !== props.images.length) {
      return;
    }

    const interval = setInterval(() => {
      setDisplayNext(prev => {
        const nextValue = !prev

        if (nextValue) {
          setNext((prev) => (prev + 2) % props.images.length);
        } else {
          setCurrent((prev) => (prev + 2) % props.images.length);
        }

        return nextValue;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [imageUrls.length, props.images.length])

  return (
    <div css={styles.slideshow}>
      <img css={styles.imageCurrent(displayNext)} src={imageUrls[current]} alt="slideshow-img" />
      <img css={styles.imageNext(displayNext)} src={imageUrls[next]} alt="slideshow-img" />
    </div>
  )
}
