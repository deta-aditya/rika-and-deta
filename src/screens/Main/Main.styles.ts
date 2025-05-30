import { css } from "@emotion/react";

export const main = css`
  @keyframes fadeInScale {
    from { 
      opacity: 0; 
      transform: scale(1.5); 
      filter: blur(4px);
    }
    to { 
      opacity: 1; 
      transform: scale(1); 
      filter: blur(0);
    }
  };

  background-color: rgba(0,0,0,0.4);
  color: #fff;
  animation: fadeInScale 0.5s ease-out;
  position: relative;
  width: 100dvw;
  max-width: 500px;
  
  .content {
    padding: 24px;
    width: 100dvw;
    max-width: 500px;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .header {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .wedding-date {
    font-size: 16px;

    @media (width <= 400px) {
      font-size: 14px;
    }

    @media (width <= 360px) {
      font-size: 11px;
    }
  }

  .top-apps {
    display: flex;
    gap: 16px;

    article {
      flex: 1;
    }

    .invitation-letter {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 12px;

      .guest-info {
        display: flex;
        flex-direction: column;
        gap: 4px;

        .guest-title {
          font-size: 12px;

          @media (width <= 400px) {
            font-size: 10px;
          }
        }

        .guest-name {
          font-weight: bold;
          font-size: 18px;

          @media (width <= 400px) {
            font-size: 14px;
          }

          @media (width <= 360px) {
            font-size: 12px;
          }
        }
      }

      .thank-you {
        font-size: 14px;
        line-height: 125%;

        @media (width <= 400px) {
          font-size: 12px;
        }

        @media (width <= 360px) {
          font-size: 10px;
        }
      }
    }

    .our-story {
      background-image: url('our-story.jpg');
      background-position: center;
      background-size: cover;
    }
  }

  .bottom-apps {
    display: flex;
    justify-content: center;
    gap: 36px;

    @media (width <= 400px) {
      gap: 24px;
    }

    article {
      flex: 1;
      max-width: 75px;
    }

    .location {
      background-image: url("location-icon.png");
      background-size: cover;
      background-position: center;
    }
    
    .support {
      background-image: url("support-icon.png");
      background-size: cover;
      background-position: center;
    }

    .gallery {
      background-image: url("gallery-icon.png");
      background-size: cover;
      background-position: center;
    }

    .play-video {
      background-image: url("video-icon.png");
      background-size: cover;
      background-position: center;
    }
  }
`;

export const invitationModal = css`
  padding: 16px;
  background-image: url('invitation-bg.png');
  background-position: 4px 4px;
  background-size: 150px;
  background-repeat: no-repeat;
  position: relative;
  font-size: 12px;
  color: #b9b9b9;

  .outer-border {
    position: absolute;
    margin: 20px;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    top: 0;
    left: 0;
    border: 0.5px solid #e2b43899;
    border-radius: 16px;
    z-index: -1;
  }

  .inner-border {
    border: 1px solid #e2b438;
    border-radius: 16px;
    padding: 16px;
    background-image: linear-gradient(#0d0d0d, #212121);
    margin: 18px;
  }

  .salutation {
    margin-bottom: 0;
  }

  .location-and-time {
    padding-left: 10px;
    color: #fff;
    
    li:not(:first-of-type) {
      margin-top: 8px;
    }
  }

  .guest-name {
    color: #fff;
    margin-top: 0;
    font-size: 16px;
    font-weight: bold;
  }

  .couple-names {
    color: #fff;
  }
`;

export const ourStoryModal = css`
  padding: 16px;
  font-size: 12px;
  color: #b9b9b9;

  hr {
    border-color: #333;
  }
`;

export const ourStoryImg = css`
  width: 100%;
  border-radius: 16px;
  border: 2px solid #333;
`;

export const locationModal = css`
  height: 60dvh;
  position: relative;

  .leaflet-container {
    height: 60dvh;
    border-radius: 0 0 16px 16px;
  }

  .leaflet-control-attribution {
    display: none;
  }

  .button-container {
    position: absolute;
    width: 100%;
    z-index: 1000;
    display: flex;
    justify-content: center;
    bottom: 32px;
    left: 0;
  }
`;

export const supportModal = css`
  padding: 16px 32px;
  font-size: 12px;
  color: #b9b9b9;
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    margin: 4px;
    text-align: center;
  }
`;

export const galleryModal = css`
  padding: 8px 8px 16px;
  display: grid;
  gap: 4px;
  grid-template-columns: repeat(3, 1fr);
`;

export const galleryImage = css`
  aspect-ratio: 1;
`;

export const weddingDate = css`
  @keyframes slideUp {
    0% {
      transform: translateY(25px);
    }

    3%, 50% {
      transform: translateY(0);
    }

    53% {
      transform: translateY(-25px);
    }
  }

  overflow: hidden;
  position: relative;
  width: fit-content;
  flex: 1;
  height: 20px;

  @media (width <= 400px) {
    height: 16px;
    font-size: 15px;
  }

  .exact-date {
    position: absolute;
    top: 0;
    right: 0;
    animation: slideUp 14s ease-in-out;
    animation-iteration-count: infinite;
    transform: translateY(-20px);
  }

  .countdown {
    position: absolute;
    top: 0;
    right: 0;
    animation: slideUp 14s ease-in-out;
    animation-delay: 7s;
    animation-iteration-count: infinite;
    transform: translateY(-20px);
  }
`;

export const backgroundMusic = css`
  display: none;
`;

export const hiddenTitleModal = css`
  background-image: url('splash1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0 0 16px 16px;
  height: 80dvh;
  display: flex;

  .rika-click-area, .deta-click-area {
    flex: 1;
  }
`;

export const countdownModal = css`
  padding: 16px;
  display: flex;
  justify-content: center;
  gap: 24px;

  @media (width <= 400px) {
    gap: 16px;
  }

  .time-unit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    .time-unit-value {
      font-size: 48px;

      @media (width <= 400px) {
        font-size: 36px;
      }

      font-family: "Space Mono", monospace;
    }

    .time-unit-label {
      font-size: 14px;

      @media (width <= 400px) {
        font-size: 11px;
      }

      margin-bottom: 8px;
    }
  }


  
`;
