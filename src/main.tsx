import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ModalContextProvider } from './contexts/ModalContext.tsx';
import { MediaPreivewContextProvider } from './contexts/MediaPreviewContext.tsx';
import App from './App.tsx'
import './index.css';
import 'reactjs-popup/dist/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalContextProvider>
      <MediaPreivewContextProvider>
        <App />
      </MediaPreivewContextProvider>
    </ModalContextProvider>
  </StrictMode>,
)
