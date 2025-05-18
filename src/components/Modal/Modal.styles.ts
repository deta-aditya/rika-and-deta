import { css } from "@emotion/react";

export const modal = (display: boolean) => css`
  @keyframes fadeIn {
    from { 
      opacity: 0; 
    }
    to { 
      opacity: 1; 
    }
  };

  @keyframes fadeOut {
    from { 
      opacity: 1; 
      filter: blur(0);
    }
    to { 
      opacity: 0; 
    }
  };

  @keyframes scaleOut {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes scaleIn {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0);
    }
  }

  position: absolute;
  width: 100dvw;
  height: 100dvh;
  display: ${display ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  opacity: 0;
  top: 0;
  
  &.opening {
    animation: fadeIn 0.25s ease-out; 
    opacity: 1;

    .dialog {
      animation: scaleOut 0.25s ease-out; 
    }
  }
  
  &.closing {
    animation: fadeOut 0.25s ease-in; 

    .dialog {
      animation: scaleIn 0.25s ease-out; 
    }
  }

  .overlay {
    position: absolute;
    background-color: rgba(0,0,0, 0.6);
    width: 100dvw;
    height: 100dvh;
    top: 0;
  }

  .dialog {
    border-radius: 16px;
    background-image: linear-gradient(#0d0d0d, #212121);
    width: 85dvw;
    position: relative;
    z-index: 10;

    .dialog-header {
      padding: 16px;
      font-size: 14px;
      border-bottom: 1px solid #323232;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .dialog-title {
      text-align: center;
      flex: 1;
    }
    
    .close-button {
      background-color: transparent;
      border: none;
      color: #fff;
      font-size: 18px;
    }
  }
`;
