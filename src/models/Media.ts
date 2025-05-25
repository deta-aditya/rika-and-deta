interface MediaVisitorByType<T> {
  image: (url: string) => T;
  video: (url: string) => T;
}

export abstract class Media {
  constructor(
    protected readonly url: string,
  ) {}

  static image(url: string) {
    return new ImageMedia(url);
  }

  static video(url: string) {
    return new VideoMedia(url);
  }

  abstract visitByType<T>(visitor: MediaVisitorByType<T>): T;
  abstract focused(): boolean;
}

class ImageMedia extends Media {
  constructor(url: string) {
    super(url);
  }

  visitByType<T>(visitor: MediaVisitorByType<T>): T {
    return visitor.image(this.url);
  }

  focused(): boolean {
    return false;
  }
}

class VideoMedia extends Media {
  constructor(url: string) {
    super(url);
  }

  visitByType<T>(visitor: MediaVisitorByType<T>): T {
    return visitor.video(this.url);
  }

  focused(): boolean {
    return true;
  }
}
