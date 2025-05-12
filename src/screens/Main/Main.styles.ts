import { css } from "@emotion/react";

export const main = css`
  @keyframes fadeIn {
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
  width: 100dvw;
  height: 100dvh;
  padding: 24px;
  animation: fadeIn 0.5s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    font-size: 14px;
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

      .guest-info {
        display: flex;
        flex-direction: column;
        gap: 4px;

        .guest-title {
          font-size: 12px;
        }

        .guest-name {
          font-size: 18px;
        }
      }

      .thank-you {
        font-size: 12px;
        line-height: 125%;
      }
    }

    .our-story {
      background-image: url('our-story.jpg');
      background-size: cover;
    }
  }

  .bottom-apps {
    display: flex;
    gap: 24px;

    article {
      flex: 1;
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
  }
`;
