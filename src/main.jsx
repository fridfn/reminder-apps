import '@/index.scss';
import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AudioPlayerProvider } from "./context/AudioPlayerContext";

createRoot(document.getElementById('root')).render(
  <AudioPlayerProvider>
      <StrictMode>
        <App />
      </StrictMode>,
  </AudioPlayerProvider>
)