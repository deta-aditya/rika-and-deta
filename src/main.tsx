import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { ModalContextProvider } from './contexts/ModalContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </StrictMode>,
)
